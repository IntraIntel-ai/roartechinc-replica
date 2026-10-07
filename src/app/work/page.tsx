import Header from "../../components/Header";
import Footer from "../../components/Footer";
import OurWork from "../../components/OurWork";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work",
  description: "Explore RoarTech Inc's past performance and case studies across multiple agencies.",
};

export default function WorkPage() {
  return (
    <>
      <Header />
      <section className="relative pt-32 pb-24 bg-brand-primary">
        <div className="absolute inset-0 bg-[#004a69] mix-blend-multiply opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our work</h1>
          <div className="w-16 h-[3px] bg-brand-accent"></div>
        </div>
      </section>
      <OurWork />
      <Footer />
    </>
  );
}
