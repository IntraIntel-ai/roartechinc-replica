"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  { id: 1, img: "/images/slider003.jpg" },
  { id: 2, img: "/images/slider002.jpg" },
  { id: 3, img: "/images/slider001.jpg" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center bg-gray-900 overflow-hidden group">
      {slides.map((slide, index) => (
        <div key={slide.id} className={`absolute inset-0 transition-opacity duration-1000 ${index === current ? 'opacity-60' : 'opacity-0'}`}>
          <Image src={slide.img} alt={`Slide ${index + 1}`} fill className="object-cover" priority={index === 0} />
        </div>
      ))}
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center mt-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
          Our Guarantee is Sustainability + Security + Governance
        </h1>
        <p className="text-lg md:text-2xl text-gray-100 mb-10 font-medium drop-shadow-md">
          We are your Principal Technology Advisors.
        </p>
        <Link href="#services" className="px-8 py-4 bg-brand-primary text-white font-semibold rounded-full hover:bg-brand-secondary transition-colors text-[15px]">
          Know our services
        </Link>
      </div>

      <button onClick={prevSlide} className="absolute left-4 md:left-8 z-20 p-2 text-white/80 hover:text-white transition-opacity opacity-0 group-hover:opacity-100"><ChevronLeft size={48} strokeWidth={1} /></button>
      <button onClick={nextSlide} className="absolute right-4 md:right-8 z-20 p-2 text-white/80 hover:text-white transition-opacity opacity-0 group-hover:opacity-100"><ChevronRight size={48} strokeWidth={1} /></button>

      <div className="absolute bottom-6 flex gap-3 z-20">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} className={`w-3 h-3 rounded-full transition-colors duration-300 ${i === current ? 'bg-white' : 'bg-white/40 hover:bg-white/70'}`} />
        ))}
      </div>
    </section>
  );
}
