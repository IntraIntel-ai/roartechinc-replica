"use client";

import { motion } from "framer-motion";
import { Cloud, Shield, Settings, ChevronRight, Menu, X, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-blue-500/30">
      <nav className="fixed w-full z-50 top-0 border-b border-white/5 bg-slate-950/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            RoarTech
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#why-us" className="hover:text-white transition-colors">Why Us</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          <button className="hidden md:flex items-center gap-2 bg-white text-slate-950 px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-200 transition-colors">
            Get Started
            <ArrowRight className="w-4 h-4" />
          </button>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-slate-950 pt-24 px-6 md:hidden">
          <div className="flex flex-col gap-6 text-lg">
            <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="#why-us" onClick={() => setIsMenuOpen(false)}>Why Us</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </div>
        </div>
      )}

      <main>
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/20 rounded-full blur-[120px] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-6 border border-blue-500/20">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                Founded in 2014
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
                Cloud Migration &<br />
                <span className="text-slate-400">Enterprise Governance.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed">
                RoarTech brings expert advisory to the C-level. We build roadmaps, hire vendors, and manage implementation within your organization's budget and timeline.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors">
                  Contact Us
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button className="flex items-center gap-2 bg-white/5 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors border border-white/10">
                  Our Services
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="services" className="py-24 bg-slate-900/50 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What we do</h2>
              <p className="text-slate-400 max-w-2xl">We integrate DevSecOps with cloud migration best practices tailored to federal and commercial standards.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <Cloud className="w-6 h-6 text-blue-400" />,
                  title: "Cloud Technology",
                  desc: "Seamless migration and modernization of enterprise infrastructure to scalable cloud environments."
                },
                {
                  icon: <Shield className="w-6 h-6 text-indigo-400" />,
                  title: "Security & DevSecOps",
                  desc: "Integrating security from Day One. Repeatable, sustainable processes delivered on-time and under-budget."
                },
                {
                  icon: <Settings className="w-6 h-6 text-purple-400" />,
                  title: "Enterprise Governance",
                  desc: "Program management, vendor hiring, and strategic roadmaps aligned with C-level objectives."
                }
              ].map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-950/50 p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-colors"
                >
                  <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center mb-6 border border-white/5">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="why-us" className="py-24">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Promise-to-Deliver</h2>
              <p className="text-lg text-slate-400 mb-6 leading-relaxed">
                Our innovative approach to Cloud Security ensures that DevSecOps and interconnectivity are integrated into your solution from Day One.
              </p>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                We exceed our clients' expectations by focusing on repeatable, sustainable processes that continually come in under-budget and are delivered on-time.
              </p>
              <ul className="space-y-4">
                {['Sustainability', 'Security', 'Governance'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300 font-medium">
                    <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-blue-400" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 blur-3xl rounded-full" />
              <div className="relative bg-slate-900 border border-white/10 rounded-3xl p-8 aspect-square flex flex-col justify-center items-center text-center">
                <h3 className="text-4xl font-bold text-white mb-2">10+</h3>
                <p className="text-slate-400 font-medium">Years of Excellence</p>
                <div className="w-full h-px bg-white/10 my-8" />
                <h3 className="text-4xl font-bold text-white mb-2">100%</h3>
                <p className="text-slate-400 font-medium">Commitment to the Status Quo? Never.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-24 bg-blue-900/10 border-t border-white/5">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform?</h2>
            <p className="text-slate-400 mb-10">Get in touch with us to discuss your cloud migration and enterprise governance needs.</p>
            <form className="flex flex-col gap-4 max-w-md mx-auto text-left" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Name" className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors" />
              <input type="email" placeholder="Email" className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors" />
              <textarea placeholder="Message" rows={4} className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"></textarea>
              <button className="w-full bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 py-12 text-center text-slate-500">
        <p>Copyright © {new Date().getFullYear()} RoarTech Inc.</p>
      </footer>
    </div>
  );
}
