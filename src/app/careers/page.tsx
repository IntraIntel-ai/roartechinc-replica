import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join the team at RoarTech Inc.",
};

export default function CareersPage() {
  return (
    <>
      <Header />
      <section className="relative pt-32 pb-24 bg-brand-primary">
        <div className="absolute inset-0 bg-[#004a69] mix-blend-multiply opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Careers</h1>
          <div className="w-16 h-[3px] bg-brand-accent"></div>
        </div>
      </section>
      <section className="py-24 bg-white px-6 min-h-[400px] flex items-center justify-center">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-brand-dark mb-6">Join our team</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            RoarTech Inc. is constantly looking for motivated and talented individuals to join our growing team. If you are passionate about cloud migration, enterprise architecture, and DevSecOps, we would love to hear from you.
          </p>
          <a href="mailto:info@roartechinc.com" className="inline-block px-8 py-3 bg-brand-primary text-white font-semibold rounded-full hover:bg-brand-secondary transition-colors">
            Send us your resume
          </a>
        </div>
      </section>
      <Footer />
    </>
  );
}
