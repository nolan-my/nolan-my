"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Code, Database, LayoutTemplate, Box, Server, Compass, Menu, X, Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

// Aceternity-inspired minimal card
const GlowCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`group relative overflow-hidden rounded-2xl bg-[#090909] border border-white/[0.06] p-8 transition-colors duration-500 hover:border-white/[0.15] hover:bg-[#0c0c0c] ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
    <div className="absolute top-0 right-0 -m-20 w-40 h-40 rounded-full bg-emerald-500/10 blur-[50px] opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
    <div className="relative z-10">{children}</div>
  </div>
);

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Products", href: "#products" },
    { name: "Open Source", href: "#open-source" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white selection:bg-emerald-500/30 font-sans">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0b0b0b]/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="#" className="flex items-center gap-0 cursor-pointer">
            <div className="relative w-8 h-8 overflow-hidden rounded-full flex items-center justify-center">
              <Image src="/logo.png" alt="Nolan Logo" fill className="object-contain" />
            </div>
            {/* <span className="font-mono font-bold text-xl tracking-wide text-white">Nolan</span> */}
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="hover:text-white transition-colors cursor-pointer">
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-gray-400 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-b border-white/5 bg-[#0b0b0b] overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-4">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    href={link.href} 
                    className="text-lg text-gray-400 hover:text-white transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="pt-16">
        {/* 1. Hero Section */}
        <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-3xl mx-auto px-6 text-center z-10">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerChildren}
              className="space-y-8"
            >
              <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">
                Beyond the Build
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto tracking-wide leading-relaxed">
                We build thoughtful, scalable software that solves real problems.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Link href="#contact" className="w-full sm:w-auto cursor-pointer">
                  <button className="w-full h-12 px-8 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                    Start a Project <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
                <Link href="#services" className="w-full sm:w-auto cursor-pointer">
                  <button className="w-full h-12 px-8 rounded-full bg-transparent border border-white/20 hover:bg-white/10 transition-colors text-white font-semibold flex items-center justify-center gap-2">
                    View Our Work
                  </button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* 2. Philosophy / Approach Section */}
        <section className="py-24 relative border-t border-white/5">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="mb-16"
            >
              <h2 className="text-3xl font-semibold mb-4 text-white">How We Build</h2>
              <p className="text-gray-400 max-w-2xl text-lg">
                Software isn't just code. It's understanding problems and designing systems that last.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Thoughtful Engineering", desc: "Clarity, maintainability, and strong architecture.", icon: <Code className="w-6 h-6" /> },
                { title: "Scalable Systems", desc: "Built to grow alongside your business naturally.", icon: <Server className="w-6 h-6" /> },
                { title: "Craft & Care", desc: "Details matter. We sweat the small stuff.", icon: <Compass className="w-6 h-6" /> }
              ].map((pillar, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <GlowCard className="h-full flex flex-col">
                    <div className="text-gray-500 group-hover:text-emerald-400 transition-colors mb-6">
                      {pillar.icon}
                    </div>
                    <h3 className="text-xl font-medium mb-3">{pillar.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{pillar.desc}</p>
                  </GlowCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Services Section */}
        <section id="services" className="py-24 relative bg-white/[0.01] border-t border-white/5">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="mb-16"
            >
              <h2 className="text-3xl font-semibold mb-4 text-white">What We Do</h2>
              <p className="text-gray-400 max-w-2xl text-lg">
                From complex systems to modern web interfaces, we build software that performs cleanly and scales reliably.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Custom Software", desc: "Tailored software systems built precisely for your unique business workflows.", icon: <Database className="w-6 h-6" /> },
                { title: "Web Applications", desc: "High-performance, modern web platforms engineered for scale and speed.", icon: <LayoutTemplate className="w-6 h-6" /> },
                { title: "Product Engineering", desc: "Taking your raw idea and transforming it into a robust, production-ready product.", icon: <Box className="w-6 h-6" /> }
              ].map((service, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <GlowCard className="h-full flex flex-col">
                    <div className="text-gray-500 group-hover:text-emerald-400 transition-colors mb-6">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-medium mb-3">{service.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mt-auto">{service.desc}</p>
                  </GlowCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Products Section */}
        <section id="products" className="py-24 relative border-t border-white/5">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="mb-16"
            >
              <h2 className="text-3xl font-semibold mb-2 text-white">Our Products</h2>
              <p className="text-gray-400 text-lg max-w-2xl">Digital products we've built from the ground up.</p>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <Link href="https://www.trylah.my" target="_blank" rel="noopener noreferrer" className="block w-full">
                <GlowCard className="max-w-lg group">
                  <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 overflow-hidden">
                    <Image src="/trylah-logo.png" alt="Try Lah" width={40} height={40} className="object-contain" />
                  </div>
                  <h3 className="text-2xl font-medium mb-2 tracking-tight">Try Lah</h3>
                  <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                    A TikTok-style revision web app for SPM candidate. Making learning Revision engaging and accessible for everyone.
                  </p>
                  <div className="text-sm font-medium text-emerald-400 flex items-center gap-2">
                    Visit Website <ExternalLink className="w-4 h-4" />
                  </div>
                </GlowCard>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* 5. Open Source Section */}
        <section id="open-source" className="py-24 relative border-t border-white/5">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="mb-16"
            >
              <h2 className="text-3xl font-semibold mb-2 text-white">Open Source</h2>
              <p className="text-gray-400 text-lg max-w-2xl">We build and contribute to tools that empower developers.</p>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <GlowCard className="block w-full">
                <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                  <Code className="w-5 h-5 text-gray-300" />
                </div>
                <h3 className="text-2xl font-medium mb-2 tracking-tight">Next Passkey Webauthn</h3>
                <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                  A lightweight, framework-agnostic Passkey (WebAuthn) integration package for Next.js. Includes adapters (Prisma, Supabase, etc.), hooks, and utilities to make passkey authentication simple and secure.
                </p>
                <div className="flex flex-wrap items-center gap-6">
                  <Link 
                    href="https://github.com/shaoxuan0916/next-passkey-webauthn" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sm font-medium text-emerald-400 group-hover:text-emerald-300 transition-colors flex items-center gap-2 hover:underline"
                  >
                    <Github className="w-4 h-4" /> GitHub Repository
                  </Link>
                  <Link 
                    href="https://www.npmjs.com/package/next-passkey-webauthn" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sm font-medium text-emerald-400 group-hover:text-emerald-300 transition-colors flex items-center gap-2 hover:underline"
                  >
                    <Box className="w-4 h-4" /> NPM Package
                  </Link>
                </div>
              </GlowCard>
            </motion.div>
          </div>
        </section>

        {/* 6. Process / How We Work */}
        <section className="py-24 relative bg-white/[0.01] border-y border-white/5">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="mb-16"
            >
              <h2 className="text-3xl font-semibold mb-2 text-white">How We Work</h2>
              <p className="text-gray-400 max-w-2xl text-lg">Our systematic approach ensures high quality results every time.</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { step: "01", title: "Understand", desc: "Discover the real problem before suggesting solutions." },
                { step: "02", title: "Design", desc: "Map the architecture. Planning precedes coding." },
                { step: "03", title: "Build", desc: "Execute with high precision and focus on stability." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <GlowCard className="h-full flex flex-col p-4">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center font-mono text-xs text-gray-400 mb-8">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </GlowCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Contact Section */}
        <section id="contact" className="py-32 relative">
          <div className="max-w-xl mx-auto px-6">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="mb-12"
            >
              <h2 className="text-4xl font-semibold mb-4 tracking-tight">Start a Project</h2>
              <p className="text-gray-400 text-lg">Have an idea or need custom software? Let's build it together.</p>
            </motion.div>

            <motion.form 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = "mailto:hello@nolan.my?subject=Project Inquiry";
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2 font-medium">Name</label>
                  <input 
                    type="text" required
                    className="w-full bg-[#090909] border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all text-sm"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2 font-medium">Email</label>
                  <input 
                    type="email" required
                    className="w-full bg-[#090909] border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all text-sm"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2 font-medium">Project Description</label>
                <textarea 
                  rows={4} required
                  className="w-full bg-[#090909] border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all resize-none text-sm"
                  placeholder="Tell us about what you want to build..."
                />
              </div>
              <button className="cursor-pointer w-full h-12 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 active:scale-[0.98] transition-all duration-300 mt-2">
                Send Inquiry
              </button>
            </motion.form>
          </div>
        </section>
      </main>

      {/* 8. Footer */}
      <footer className="border-t border-white/5 py-16 bg-[#090909]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            
            {/* Links first on mobile (order-first) */}
            <div className="order-first md:order-last flex flex-col md:items-end gap-6">
              <h4 className="text-xs uppercase tracking-widest text-gray-500 font-bold">Navigation</h4>
              <div className="flex flex-col md:items-end gap-4 text-sm text-gray-400">
                {navLinks.map((link) => (
                  <Link key={link.name} href={link.href} className="hover:text-white transition-colors cursor-pointer">
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Branding second on mobile (order-last) */}
            <div className="flex flex-col gap-4 md:order-first">
              <Link href="#" className="flex items-center gap-3 cursor-pointer">
                <div className="relative w-7 h-7 overflow-hidden rounded-full">
                  <Image src="/logo.png" alt="Nolan Logo" fill className="object-contain" />
                </div>
                <span className="font-bold text-lg text-white">Nolan Innovation</span>
              </Link>
              <div className="flex flex-col gap-1">
                <div className="text-sm text-gray-400 font-medium tracking-wide font-mono italic opacity-80">
                  Beyond the Build
                </div>
                <div className="text-sm text-gray-600 mt-4">
                  &copy; {new Date().getFullYear()} Nolan Innovation. All rights reserved.
                </div>
              </div>
            </div>

          </div>
        </div>
      </footer>
    </div>
  );
}
