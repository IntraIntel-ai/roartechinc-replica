"use client";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex-shrink-0 relative w-[220px] h-[52px]">
          <Image src="/images/logo-roartechinc.png" alt="RoarTech Inc." fill className="object-contain" priority />
        </Link>
        
        <nav className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-gray-700">
          <Link href="#services" className="hover:text-blue-600 transition-colors">Services</Link>
          <Link href="#work" className="hover:text-blue-600 transition-colors">Our work</Link>
          <Link href="#certifications" className="hover:text-blue-600 transition-colors">Certifications</Link>
          <div className="relative group" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
            <button className="flex items-center gap-1 hover:text-blue-600 transition-colors">
              Capability statement <ChevronDown size={16} />
            </button>
            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-100 shadow-lg py-2 rounded-md z-50">
                <Link href="#" className="block px-4 py-2 hover:bg-gray-50 hover:text-blue-600">RoarTech’s capability statement</Link>
                <Link href="#" className="block px-4 py-2 hover:bg-gray-50 hover:text-blue-600">INR hybrid multi-cloud</Link>
                <Link href="#" className="block px-4 py-2 hover:bg-gray-50 hover:text-blue-600">Air Force multi-cloud integration</Link>
              </div>
            )}
          </div>
          <Link href="#careers" className="hover:text-blue-600 transition-colors">Careers</Link>
        </nav>

        <div className="hidden lg:block">
          <Link href="#contact" className="px-6 py-2 border-2 border-brand-dark text-brand-dark rounded-full font-semibold hover:bg-brand-dark hover:text-white transition-colors">
            Contact us
          </Link>
        </div>

        <button className="lg:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-100 px-4 py-4 flex flex-col gap-4 text-[15px] font-medium text-gray-700 shadow-lg absolute w-full">
          <Link href="#services" className="hover:text-blue-600">Services</Link>
          <Link href="#work" className="hover:text-blue-600">Our work</Link>
          <Link href="#certifications" className="hover:text-blue-600">Certifications</Link>
          <div className="font-semibold text-gray-800">Capability statement</div>
          <div className="pl-4 flex flex-col gap-3 border-l-2 border-gray-100 mt-1 text-[14px]">
             <Link href="#" className="hover:text-blue-600">RoarTech’s capability statement</Link>
             <Link href="#" className="hover:text-blue-600">INR hybrid multi-cloud</Link>
             <Link href="#" className="hover:text-blue-600">Air Force multi-cloud integration</Link>
          </div>
          <Link href="#careers" className="hover:text-blue-600">Careers</Link>
          <Link href="#contact" className="mt-4 px-6 py-2 bg-brand-dark text-white text-center rounded-full">Contact us</Link>
        </div>
      )}
    </header>
  );
}
