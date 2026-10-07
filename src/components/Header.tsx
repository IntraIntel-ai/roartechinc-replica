"use client";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"}`}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8 flex items-center justify-between">
        <Link href="/" className="flex-shrink-0 relative w-[220px] h-[52px]">
          <Image src="/images/logo-roartechinc.png" alt="RoarTech Inc." fill className="object-contain" priority />
        </Link>
        
        <nav className={`hidden lg:flex items-center gap-8 text-[15px] font-medium ${isScrolled ? "text-brand-dark" : "text-white drop-shadow-md"}`}>
          <Link href="/services" className="hover:text-brand-primary transition-colors">Services</Link>
          <Link href="/work" className="hover:text-brand-primary transition-colors">Our work</Link>
          <Link href="/certifications" className="hover:text-brand-primary transition-colors">Certifications</Link>
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-brand-primary transition-colors py-4">
              Capability statement <ChevronDown size={16} />
            </button>
            <div className="absolute top-full left-0 hidden group-hover:block w-64 bg-white border border-gray-100 shadow-lg py-2 rounded-md z-50 text-brand-dark">
              <Link href="/capability-statement" className="block px-4 py-2 hover:bg-brand-grayBg hover:text-brand-primary">RoarTech's capability statement</Link>
              <Link href="/inr-hybrid-multi-cloud" className="block px-4 py-2 hover:bg-brand-grayBg hover:text-brand-primary">INR hybrid multi-cloud</Link>
              <Link href="/air-force-multi-cloud-integration" className="block px-4 py-2 hover:bg-brand-grayBg hover:text-brand-primary">Air Force multi-cloud integration</Link>
            </div>
          </div>
          <Link href="/careers" className="hover:text-brand-primary transition-colors">Careers</Link>
        </nav>

        <div className="hidden lg:block">
          <Link href="/#contact" className="px-6 py-3 bg-brand-primary text-white rounded-full font-semibold hover:bg-brand-secondary transition-colors text-[15px]">
            Contact us
          </Link>
        </div>

        <button className={`lg:hidden p-2 ${isScrolled ? "text-brand-dark" : "text-white"}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white px-4 py-4 flex flex-col gap-4 text-[15px] font-medium text-brand-dark shadow-lg absolute w-full top-full left-0">
          <Link href="/services" className="hover:text-brand-primary" onClick={() => setMobileMenuOpen(false)}>Services</Link>
          <Link href="/work" className="hover:text-brand-primary" onClick={() => setMobileMenuOpen(false)}>Our work</Link>
          <Link href="/certifications" className="hover:text-brand-primary" onClick={() => setMobileMenuOpen(false)}>Certifications</Link>
          <div className="font-semibold">Capability statement</div>
          <div className="pl-4 flex flex-col gap-3 border-l-2 border-gray-200 mt-1 text-[14px]">
             <Link href="/capability-statement" className="hover:text-brand-primary" onClick={() => setMobileMenuOpen(false)}>RoarTech's capability statement</Link>
             <Link href="/inr-hybrid-multi-cloud" className="hover:text-brand-primary" onClick={() => setMobileMenuOpen(false)}>INR hybrid multi-cloud</Link>
             <Link href="/air-force-multi-cloud-integration" className="hover:text-brand-primary" onClick={() => setMobileMenuOpen(false)}>Air Force multi-cloud integration</Link>
          </div>
          <Link href="/careers" className="hover:text-brand-primary" onClick={() => setMobileMenuOpen(false)}>Careers</Link>
          <Link href="/#contact" className="mt-4 px-6 py-3 bg-brand-primary text-white text-center rounded-full font-semibold" onClick={() => setMobileMenuOpen(false)}>Contact us</Link>
        </div>
      )}
    </header>
  );
}
