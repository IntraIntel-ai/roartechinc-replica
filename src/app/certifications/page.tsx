import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certifications",
  description: "RoarTech Inc. Certifications and achievements.",
};

export default function CertificationsPage() {
  return (
    <>
      <Header />
      <section className="relative pt-32 pb-24 bg-brand-primary">
        <div className="absolute inset-0 bg-[#004a69] mix-blend-multiply opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Certifications</h1>
          <div className="w-16 h-[3px] bg-brand-accent"></div>
        </div>
      </section>
      <section className="py-24 bg-brand-grayBg px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-items-center bg-white p-12 rounded-lg shadow-sm">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={num} className="relative w-32 h-32 md:w-48 md:h-48">
                <Image 
                  src={`/images/certification0${num}.png`} 
                  alt={`Certification ${num}`} 
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
