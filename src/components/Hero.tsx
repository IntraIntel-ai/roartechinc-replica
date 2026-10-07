"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  { img: "/images/slider003.jpg", title: "Our Guarantee is Sustainability + Security + Governance", subtitle: "We are your Principal Technology Advisors." },
  { img: "/images/slider003.jpg", title: "Cloud Migration Experts", subtitle: "Ensuring smooth transition to the future." },
  { img: "/images/slider003.jpg", title: "Enterprise Governance", subtitle: "Tailored based on federal and commercial standards." }
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[50vh] md:h-[70vh] flex items-center justify-center bg-gray-900 overflow-hidden">
      {slides.map((slide, index) => (
        <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${index === current ? 'opacity-50' : 'opacity-0'}`}>
          <Image src={slide.img} alt="Hero background" fill className="object-cover" priority={index === 0} />
        </div>
      ))}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight min-h-[120px]">
          {slides[current].title}
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 mb-8 min-h-[40px]">
          {slides[current].subtitle}
        </p>
        <Link href="#services" className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-colors">
          Know our services
        </Link>
      </div>
      <div className="absolute bottom-6 flex gap-2 z-20">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} className={`w-3 h-3 rounded-full ${i === current ? 'bg-white' : 'bg-white/50'}`} />
        ))}
      </div>
    </section>
  );
}
