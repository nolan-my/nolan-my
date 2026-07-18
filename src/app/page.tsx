"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Check, Code2, Copy, Linkedin, Mail, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type CopyState = "idle" | "copied" | "error";

const projects = [
  {
    type: "Product",
    title: "Try Lah",
    description: "A short-form revision space that helps SPM students learn at their own rhythm.",
    href: "https://www.trylah.my",
    cta: "Visit Try Lah",
    mark: "trylah",
  },
  {
    type: "Open source",
    title: "Next Passkey WebAuthn",
    description: "A lightweight toolkit that makes passwordless sign-in simpler to build in Next.js.",
    href: "https://github.com/shaoxuan0916/next-passkey-webauthn",
    cta: "View on GitHub",
    mark: "passkey",
  },
] as const;

const services = [
  ["Custom software", "Systems shaped around the way your business works."],
  ["Web applications", "Fast, thoughtful experiences built to grow."],
  ["Digital products", "Ideas refined, built, and carried into production."],
] as const;

// TODO: remove this comment message later
export default function Home() {
  const [copyState, setCopyState] = useState<CopyState>("idle");
  const resetTimer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (resetTimer.current) window.clearTimeout(resetTimer.current);
    };
  }, []);

  const copyEmail = async () => {
    if (resetTimer.current) window.clearTimeout(resetTimer.current);

    try {
      await navigator.clipboard.writeText("shaoxuan@nolan.my");
      setCopyState("copied");
    } catch {
      setCopyState("error");
    }

    resetTimer.current = window.setTimeout(() => setCopyState("idle"), 3000);
  };

  const copyLabel = copyState === "copied" ? "Copied" : copyState === "error" ? "Copy failed" : "Copy";

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">Skip to content</a>

      <header className="site-header">
        <nav className="nav-shell" aria-label="Primary navigation">
          <Link href="#top" className="logo-link" aria-label="Nolan Innovation home">
            <Image className="brand-logo" src="/logo.png" alt="" width={32} height={32} priority />
          </Link>
          <div className="nav-links">
            <Link href="#work">Work</Link>
            <Link href="#services" className="nav-services">Services</Link>
            <Link href="#contact">Contact</Link>
          </div>
        </nav>
      </header>

      <main id="main">
        <section id="top" className="hero" aria-labelledby="hero-title">
          <div className="hero-signal" aria-hidden="true"><span /></div>
          <div className="hero-copy page-frame">
            <h1 id="hero-title">Ideas into software.</h1>
            <div className="hero-lower">
              <p>We turn ambitious ideas into clear, dependable products.</p>
              <div className="hero-actions">
                <Link href="#work" className="button-primary">View work</Link>
                <Link href="#contact" className="text-link">Contact <ArrowUpRight aria-hidden="true" /></Link>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="work-section" aria-labelledby="work-title">
          <div className="section-intro page-frame reveal-on-scroll">
            <h2 id="work-title">Work we&apos;ve shipped.</h2>
            <p className="section-summary">Products and tools shaped from idea to release.</p>
          </div>

          <div className="project-list">
            {projects.map((project) => (
              <article key={project.title} className="project page-frame reveal-on-scroll">
                <div className="project-meta">
                  <span className={`project-mark project-mark-${project.mark}`} aria-hidden="true">
                    {project.mark === "trylah" ? (
                      <Image src="/trylah-logo.png" alt="" width={28} height={28} />
                    ) : (
                      <Code2 />
                    )}
                  </span>
                  <span>{project.type}</span>
                </div>
                <div className="project-heading">
                  <h3>{project.title}</h3>
                </div>
                <div className="project-evidence">
                  <p>{project.description}</p>
                  <Link href={project.href} target="_blank" rel="noopener noreferrer" className="project-link project-button">
                    {project.cta} <ArrowUpRight aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="services" className="services-section page-frame" aria-labelledby="services-title">
          <div className="section-intro reveal-on-scroll">
            <h2 id="services-title">What we build</h2>
          </div>
          <div className="service-list">
            {services.map(([title, description], index) => (
              <article key={title} className="service reveal-on-scroll">
                <span className="service-number">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{description}</p>
                <span className="service-signal" aria-hidden="true" />
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-section" aria-labelledby="contact-title">
          <div className="contact-inner page-frame reveal-on-scroll">
            <div>
              <h2 id="contact-title">Let&apos;s make it real.</h2>
            </div>
            <div className="contact-panel">
              <p>A short message is enough. Reach us on WhatsApp or email.</p>
              <Link href="https://wa.me/60169956277" target="_blank" rel="noopener noreferrer" className="button-primary contact-primary">
                <MessageCircle aria-hidden="true" /> Message on WhatsApp
              </Link>
              <div className="email-row">
                <Link href="mailto:shaoxuan@nolan.my" className="email-link">
                  <Mail aria-hidden="true" /> shaoxuan@nolan.my
                </Link>
                <button type="button" onClick={copyEmail} className={`copy-button copy-${copyState}`} aria-label={`${copyLabel} email address`}>
                  {copyState === "copied" ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
                  {copyLabel}
                </button>
              </div>
              {copyState === "error" ? <p className="copy-error" role="alert">Could not access the clipboard. Use the email link instead.</p> : null}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer page-frame">
        <Image className="brand-logo footer-logo" src="/logo.png" alt="" width={28} height={28} />
        <p>Malaysia. Working worldwide.</p>
      </footer>

      <div className="sr-status" role="status" aria-live="polite">
        {copyState === "copied" ? "Email address copied" : ""}
      </div>
    </div>
  );
}
