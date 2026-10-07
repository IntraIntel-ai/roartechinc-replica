import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Clients from "../../components/Clients";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "RoarTech Inc. services including Cloud Technology, DevSecOps, Next-Generation Data and Analytics, and more.",
};

const servicesList = [
  {
    title: "Cloud Technology",
    icon: "/images/icon08.png",
    description: "At RoarTech, our clients experience the best of all worlds by leveraging AWS, Azure, GCP, or a hybrid approach to cloud migration. Our cloud technology is scalable to a variety of operating systems and platforms and is cost efficient. Our team of experts can lead multi-phase/multi-dimensional/multi-resource cloud migration projects to the conclusion with complex tasks, aggressive targets, and deadlines while maintaining high customer satisfaction. With application migration expertise, we migrate our clients’ enterprise into a modernized platform to provide efficiency and value at every level."
  },
  {
    title: "DevSecOps",
    icon: "/images/icon13.png",
    description: "We consider automation to be a cornerstone of secure and up-to-date cloud migrations. Some of our tools we leverage include GitHub, Security testing, Microsoft TFS/VSTS, Veracode, Checkmarx, and WhiteSource. Regardless if our client desires an on-prem or hybrid solution, we compute the necessary design architecture to incorporate a DevSecOps operational model."
  },
  {
    title: "Next-Generation Data and Analytics",
    icon: "/images/icon03.png",
    description: "The data visualization tools we use are both pwerful and user-friendly. We analyze digital, big data from various sources using machine learning (ML) and artificial intelligence (AI) data visualization tools. We focus on graphical representations of data, templates availability, and interactive capabilities. We can move your organization from visualization to big data visualization and from slicing and dicing data to predictive analytics."
  },
  {
    title: "Reporting and Metrics",
    icon: "/images/icon32.png",
    description: "We incorporate reporting and metrics into all of our solutions. We integrate our solutions with industry leaders such as Google Analytics and PowerBI. With an accurate measurement of our client’s cloud migration ROI, we ensure that key metrics and KPIs are captured to monitor the benefits. We are adept at utilizing both cloud native and open source reporting tools."
  },
  {
    title: "Enterprise Architecture",
    icon: "/images/icon36.png",
    description: "We provide a holistic view between the information environment enterprise and supported business, enabling the integration of information and services across organizations, mission partners, and systems. We develop a CONOPS document for our clients’ platform and digital transformation, advise on change management procedures, and present a best-case scenario enterprise architecture and system design diagram."
  },
  {
    title: "Governance Regulatory and Compliance",
    icon: "/images/icon06.png",
    description: "We develop end-to-end governance structures through change management, process functions, standardization, and tech council to manage the different governance tasks across the board. Our experts establish cross-department governance framework and boards to supervise and regulate our clients’ platform. Our vendor governance approach and framework consists of over 50 processes and prioritized critical operational functions across multiple capabilities."
  }
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-brand-primary">
        <div className="absolute inset-0 bg-[#004a69] mix-blend-multiply opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Services</h1>
          <div className="w-16 h-[3px] bg-brand-accent"></div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 space-y-8">
          {servicesList.map((service, idx) => (
            <div key={idx} className="border border-gray-200 rounded p-8 flex flex-col md:flex-row gap-8 items-start hover:shadow-md transition-shadow">
              <div className="flex-shrink-0 w-24 h-24 relative">
                <Image src={service.icon} alt={service.title} fill className="object-contain" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-accent mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Clients />
      <Footer />
    </>
  );
}
