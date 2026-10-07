"use client";
import { useState } from "react";
import { Menu, X, ChevronDown, MapPin, Mail, Phone, Cloud, Database, BarChart, ShieldCheck, Server, FileText } from "lucide-react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-[1240px] mx-auto px-4 lg:px-8 h-[80px] flex items-center justify-between">
          <a href="#" className="flex-shrink-0">
            <img src="https://roartechinc.com/wp-content/uploads/2024/02/logo-roartechinc.png" alt="RoarTech Inc." className="h-[40px] md:h-[52px] object-contain" />
          </a>
          
          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-gray-700">
            <a href="#" className="hover:text-blue-600 transition-colors">Services</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Our work</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Certifications</a>
            <div className="relative group" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
              <button className="flex items-center gap-1 hover:text-blue-600 transition-colors">
                Capability statement <ChevronDown size={16} />
              </button>
              {dropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-100 shadow-lg py-2 rounded-md z-50">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-50 hover:text-blue-600">RoarTech’s capability statement</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-50 hover:text-blue-600">INR hybrid multi-cloud</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-50 hover:text-blue-600">Air Force multi-cloud integration</a>
                </div>
              )}
            </div>
            <a href="#" className="hover:text-blue-600 transition-colors">Careers</a>
          </nav>

          <div className="hidden lg:block">
            <a href="#contact" className="px-6 py-2 border-2 border-gray-800 text-gray-800 rounded-full font-semibold hover:bg-gray-800 hover:text-white transition-colors">
              Contact us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-gray-100 px-4 py-4 flex flex-col gap-4 text-[15px] font-medium text-gray-700 shadow-lg absolute w-full">
            <a href="#" className="hover:text-blue-600">Services</a>
            <a href="#" className="hover:text-blue-600">Our work</a>
            <a href="#" className="hover:text-blue-600">Certifications</a>
            <a href="#" className="hover:text-blue-600">Capability statement</a>
            <div className="pl-4 flex flex-col gap-3 border-l-2 border-gray-100 mt-2 text-[14px]">
               <a href="#" className="hover:text-blue-600">RoarTech’s capability statement</a>
               <a href="#" className="hover:text-blue-600">INR hybrid multi-cloud</a>
               <a href="#" className="hover:text-blue-600">Air Force multi-cloud integration</a>
            </div>
            <a href="#" className="hover:text-blue-600">Careers</a>
            <a href="#contact" className="mt-4 px-6 py-2 bg-gray-800 text-white text-center rounded-full">Contact us</a>
          </div>
        )}
      </header>

      <main>
        {/* HERO SLIDER (Static replication) */}
        <section className="relative w-full h-[50vh] md:h-[70vh] flex items-center justify-center bg-gray-900 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src="https://roartechinc.com/wp-content/uploads/2024/02/slider003.jpg" alt="Hero" className="w-full h-full object-cover opacity-50" />
          </div>
          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Our Guarantee is Sustainability + Security + Governance
            </h1>
            <p className="text-lg md:text-2xl text-gray-200 mb-8">
              We are your Principal Technology Advisors.
            </p>
            <a href="#" className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-colors">
              Know our services
            </a>
          </div>
        </section>

        {/* INTRO */}
        <section className="py-20 px-6 max-w-[1000px] mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-gray-900">
            Founded in 2014, RoarTech is a software development consulting firm specializing in Cloud Migration and Enterprise Governance.
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our innovative approach to Cloud Security ensures that DevSecOps and interconnectivity are integrated into your solution from Day One. We exceed our clients’ expectations by focusing on repeatable, sustainable processes that continually come in under-budget and are delivered on-time. Our Promise-to-Deliver is the cornerstone of our customer-centric, value-based approach. We never settle for the status quo!
          </p>
        </section>

        {/* WHAT WE DO */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-[1240px] mx-auto">
            <div className="text-center mb-12">
              <h4 className="text-2xl font-medium text-gray-900 mb-6">What we do</h4>
              <div className="w-16 h-1 bg-gray-200 mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Column 1 */}
              <div className="flex flex-col gap-6">
                <div className="flex gap-4 items-start">
                  <span className="shrink-0 w-4 h-4 mt-1 text-gray-800 fill-current">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"></path></svg>
                  </span>
                  <p className="text-gray-700 text-lg leading-relaxed"><strong className="text-gray-900">Cloud Technology</strong> – Our SMEs specialize in a variety of cloud technologies including AWS, Azure, GCP, and hybrid-multi-cloud solutions.</p>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="shrink-0 w-4 h-4 mt-1 text-gray-800 fill-current">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"></path></svg>
                  </span>
                  <p className="text-gray-700 text-lg leading-relaxed"><strong className="text-gray-900">Next-Generation Data and Analytics</strong> – We analyze digital, big data from various sources using machine learning (ML) and artificial intelligence (AI) data visualization tools.</p>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="shrink-0 w-4 h-4 mt-1 text-gray-800 fill-current">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"></path></svg>
                  </span>
                  <p className="text-gray-700 text-lg leading-relaxed"><strong className="text-gray-900">Reporting and Metrics</strong> – Our next-generation metrics and reporting capabilities make identifying strengths, weaknesses, and future possibilities for new software a breeze for our clients.</p>
                </div>
              </div>

              {/* Column 2 */}
              <div className="flex flex-col gap-6">
                <div className="flex gap-4 items-start">
                  <span className="shrink-0 w-4 h-4 mt-1 text-gray-800 fill-current">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"></path></svg>
                  </span>
                  <p className="text-gray-700 text-lg leading-relaxed"><strong className="text-gray-900">DevSecOps</strong> – We use CI/CD automation tools to ensure that our software solution is continuously up-to-date.</p>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="shrink-0 w-4 h-4 mt-1 text-gray-800 fill-current">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"></path></svg>
                  </span>
                  <p className="text-gray-700 text-lg leading-relaxed"><strong className="text-gray-900">Enterprise Architecture</strong> – We leverage EA best practices and standards to plan, design, and implement secure cloud solutions in AWS, Azure, and Google cloud environments.</p>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="shrink-0 w-4 h-4 mt-1 text-gray-800 fill-current">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"></path></svg>
                  </span>
                  <p className="text-gray-700 text-lg leading-relaxed"><strong className="text-gray-900">Governance Regulatory and Compliance</strong> – We develop end-to-end governance structures through change management, process functions, standardization, and tech council to manage the different governance tasks across the board.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHO WE SERVE */}
        <section className="py-20 px-6">
          <div className="max-w-[1240px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Who we serve</h2>
              <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center text-center">
              {[
                { name: "T&T Consulting", img: "clients01.png" },
                { name: "US Marine", img: "clients02.png" },
                { name: "DoS", img: "clients03.png" },
                { name: "Dept of Education", img: "clients04.png" },
                { name: "USAID", img: "clients05.png" },
                { name: "GSA", img: "clients06.png" },
                { name: "DOD USAF", img: "clients07.png" },
                { name: "VA", img: "clients08.png" },
              ].map((client, i) => (
                <div key={i} className="flex flex-col items-center justify-center p-4">
                  <img src={`https://roartechinc.com/wp-content/uploads/2023/04/${client.img}`} alt={client.name} className="w-24 h-24 object-contain mb-4 filter grayscale hover:grayscale-0 transition-all duration-300" />
                  <span className="font-medium text-gray-700">{client.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY US */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-[1000px] mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why us</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 leading-relaxed">
              RoarTech brings expert advisory to the C-level to help them move to next generation technology. We build roadmaps, hire vendors, help with implementation, Program Management, and Governance, all within an organization’s budget and timeline. We integrate DevSecOps with cloud migration best practices that are tailored based on federal and commercial standards.
            </p>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer id="contact" className="bg-[#1A1A1A] text-white pt-20 pb-8">
        <div className="max-w-[1240px] mx-auto px-6 grid md:grid-cols-2 gap-16 mb-16">
          
          {/* Footer Left - Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact us</h3>
            <p className="text-gray-400 mb-10 text-lg">
              Roar Tech Inc. is a software development consulting firm specializing in Cloud Migration and Enterprise Governance.
            </p>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 text-gray-300">
                <MapPin className="w-6 h-6 text-gray-400" />
                <span className="text-lg">Washington DC</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <Mail className="w-6 h-6 text-gray-400" />
                <span className="text-lg">info@roartechinc.com</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <Phone className="w-6 h-6 text-gray-400" />
                <span className="text-lg">(703) 984-9981</span>
              </div>
            </div>
          </div>

          {/* Footer Right - Form */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Send us a message</h3>
            <form className="flex flex-col gap-4">
              <input 
                type="text" 
                placeholder="Your name" 
                className="w-full px-4 py-3 bg-white text-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full px-4 py-3 bg-white text-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea 
                rows={5} 
                placeholder="Your message" 
                className="w-full px-4 py-3 bg-white text-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              ></textarea>
              <button 
                type="button" 
                className="self-start px-8 py-3 bg-gray-600 text-white font-semibold rounded hover:bg-gray-700 transition-colors"
              >
                Send
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="max-w-[1240px] mx-auto px-6 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>Copyright © 2026 RoarTech Inc.</p>
        </div>
      </footer>
    </div>
  );
}
