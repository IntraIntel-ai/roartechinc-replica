import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        
        {/* INTRO */}
        <section className="py-20 px-6 max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-gray-900">
            Founded in 2014, RoarTech is a software development consulting firm specializing in Cloud Migration and Enterprise Governance.
          </h2>
          <div className="w-16 h-1 bg-brand-blue mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our innovative approach to Cloud Security ensures that DevSecOps and interconnectivity are integrated into your solution from Day One. We exceed our clients’ expectations by focusing on repeatable, sustainable processes that continually come in under-budget and are delivered on-time. Our Promise-to-Deliver is the cornerstone of our customer-centric, value-based approach. We never settle for the status quo!
          </p>
        </section>

        {/* WHAT WE DO */}
        <section id="services" className="py-20 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-medium text-gray-900 mb-6">What we do</h2>
              <div className="w-16 h-1 bg-gray-200 mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Column 1 */}
              <div className="flex flex-col gap-6">
                {[
                  { title: "Cloud Technology", desc: "Our SMEs specialize in a variety of cloud technologies including AWS, Azure, GCP, and hybrid-multi-cloud solutions." },
                  { title: "Next-Generation Data and Analytics", desc: "We analyze digital, big data from various sources using machine learning (ML) and artificial intelligence (AI) data visualization tools." },
                  { title: "Reporting and Metrics", desc: "Our next-generation metrics and reporting capabilities make identifying strengths, weaknesses, and future possibilities for new software a breeze for our clients." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <span className="shrink-0 w-4 h-4 mt-1 text-gray-800 fill-current">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"></path></svg>
                    </span>
                    <p className="text-gray-700 text-lg leading-relaxed"><strong className="text-gray-900">{item.title}</strong> – {item.desc}</p>
                  </div>
                ))}
              </div>
              {/* Column 2 */}
              <div className="flex flex-col gap-6">
                {[
                  { title: "DevSecOps", desc: "We use CI/CD automation tools to ensure that our software solution is continuously up-to-date." },
                  { title: "Enterprise Architecture", desc: "We leverage EA best practices and standards to plan, design, and implement secure cloud solutions in AWS, Azure, and Google cloud environments." },
                  { title: "Governance Regulatory and Compliance", desc: "We develop end-to-end governance structures through change management, process functions, standardization, and tech council to manage the different governance tasks across the board." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <span className="shrink-0 w-4 h-4 mt-1 text-gray-800 fill-current">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"></path></svg>
                    </span>
                    <p className="text-gray-700 text-lg leading-relaxed"><strong className="text-gray-900">{item.title}</strong> – {item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* WHO WE SERVE */}
        <section id="work" className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Who we serve</h2>
              <div className="w-16 h-1 bg-brand-blue mx-auto"></div>
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
                  <div className="relative w-24 h-24 mb-4">
                    <Image src={`/images/${client.img}`} alt={client.name} fill className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300" />
                  </div>
                  <span className="font-medium text-gray-700">{client.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY US */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why us</h2>
            <div className="w-16 h-1 bg-brand-blue mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 leading-relaxed">
              RoarTech brings expert advisory to the C-level to help them move to next generation technology. We build roadmaps, hire vendors, help with implementation, Program Management, and Governance, all within an organization’s budget and timeline. We integrate DevSecOps with cloud migration best practices that are tailored based on federal and commercial standards.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
