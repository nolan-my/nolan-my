"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Check, Copy, MessageCircle } from "lucide-react";
import Image from "next/image";

type CopyState = "idle" | "copied" | "error";

const email = "sam@nolan.my";
const services = [
  ["Custom software", "Tools and systems shaped around the way your business works."],
  ["Web applications", "Fast, intuitive experiences that work beautifully on every screen."],
  ["Digital products", "From the first idea to a product people can use every day."],
] as const;

export default function Home() {
  const [copyState, setCopyState] = useState<CopyState>("idle");
  const resetTimer = useRef<number | null>(null);
  const headerMarker = useRef<HTMLDivElement>(null);
  const [compactHeader, setCompactHeader] = useState(false);

  useEffect(() => {
    const marker = headerMarker.current;
    if (!marker) return;
    const observer = new IntersectionObserver(([entry]) => {
      setCompactHeader(!entry.isIntersecting);
    });
    observer.observe(marker);
    return () => observer.disconnect();
  }, []);

  useEffect(() => () => {
    if (resetTimer.current) window.clearTimeout(resetTimer.current);
  }, []);

  const copyEmail = async () => {
    if (resetTimer.current) window.clearTimeout(resetTimer.current);
    try {
      await navigator.clipboard.writeText(email);
      setCopyState("copied");
    } catch {
      setCopyState("error");
    }
    resetTimer.current = window.setTimeout(() => setCopyState("idle"), 3000);
  };

  const copyLabel = copyState === "copied" ? "Copied" : copyState === "error" ? "Try again" : "Copy";

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <div id="top" className="header-marker" ref={headerMarker} aria-hidden="true" />
      <header className="site-header" data-compact={compactHeader}>
        <div className="header-inner page-frame">
          <a href="#top" className="wordmark" aria-label="Nolan Innovation home">
            nolan<span>innovation</span>
          </a>
          <nav className="navigation" aria-label="Primary navigation">
            <a href="#work">Work</a>
            <a href="#services">Services</a>
            <a href="#contact" className="nav-contact">Let&apos;s talk <ArrowUpRight aria-hidden="true" /></a>
          </nav>
        </div>
      </header>

      <main id="main">
        <section className="hero page-frame" aria-labelledby="hero-title">
          <h1 id="hero-title">Your idea deserves<br /><span>to be built.</span></h1>
        </section>

        <section id="work" className="page-frame" aria-labelledby="work-title">
          <article className="project">
            <div className="project-copy">
              <div className="project-brand">
                <Image src="/trylah-logo.png" alt="" width={40} height={40} />
                <h2 id="work-title">Try Lah</h2>
              </div>
              <p className="project-statement">SPM revision.<br />Swipe like TikTok.</p>
              <p className="project-description">Past-paper questions, one swipe at a time. A little practice, every day. 20,000 active users and counting.</p>
              <a href="https://www.trylah.my" target="_blank" rel="noopener noreferrer" className="project-link">
                Explore Try Lah <ArrowUpRight aria-hidden="true" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              <span className="project-category">Our product <span aria-hidden="true">/</span> Education</span>
            </div>
            <div className="project-screens">
              <div className="device screen-dashboard">
                <div className="device-display">
                  <Image
                    src="/work/trylah-dashboard.png"
                    alt="Try Lah dashboard with a daily quiz streak, subjects, and practice activities"
                    width={778}
                    height={1688}
                    unoptimized // Preserve fine UI text in the original lossless screenshot.
                    className="product-screen"
                    preload
                  />
                </div>
                <Image src="/work/iphone-18-pro.webp" alt="" width={389} height={800} className="device-frame" sizes="(max-width: 600px) 42vw, 260px" />
              </div>
              <div className="device screen-question">
                <div className="device-display">
                  <Image
                    src="/work/trylah-question.png"
                    alt="A Sejarah past-paper question with multiple-choice answers in Try Lah"
                    width={738}
                    height={1600}
                    unoptimized
                    className="product-screen"
                  />
                </div>
                <Image src="/work/iphone-18-pro.webp" alt="" width={389} height={800} className="device-frame" sizes="(max-width: 600px) 42vw, 260px" />
              </div>
            </div>
          </article>
        </section>

        <section id="services" className="services-section page-frame" aria-labelledby="services-title">
          <div className="services-intro">
            <h2 id="services-title">What we<br /><span>build.</span></h2>
          </div>
          <div>
            {services.map(([title, description]) => (
              <article key={title} className="service">
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-section" aria-labelledby="contact-title">
          <div className="contact-inner page-frame">
            <div className="contact-heading">
              <h2 id="contact-title">Something<br />on your mind?</h2>
              <p>Tell us what you&apos;re thinking. We&apos;ll take it from there.</p>
            </div>
            <div className="contact-actions">
              <a href="https://wa.me/60169956277" target="_blank" rel="noopener noreferrer" className="button button-light">
                <MessageCircle aria-hidden="true" /> Let&apos;s talk on WhatsApp <ArrowUpRight aria-hidden="true" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              <div className="email-row">
                <a href={`mailto:${email}`} className="email-link">{email}</a>
                <button type="button" onClick={copyEmail} className="copy-button" aria-label={`${copyLabel} email address`}>
                  {copyState === "copied" ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
                  <span>{copyLabel}</span>
                </button>
              </div>
              {copyState === "error" && <p className="copy-error" role="alert">Couldn&apos;t copy. Select the address or use the email link.</p>}
              <span className="sr-only" role="status" aria-live="polite">{copyState === "copied" ? "Email address copied" : ""}</span>
            </div>
          </div>
          <footer className="footer page-frame">
            <a href="#top" className="wordmark" aria-label="Nolan Innovation, back to top">nolan<span>innovation</span></a>
            <p>Malaysia. Working worldwide.</p>
            <a href="#top" className="back-top">Back to top <ArrowUpRight aria-hidden="true" /></a>
          </footer>
        </section>
      </main>
    </>
  );
}
