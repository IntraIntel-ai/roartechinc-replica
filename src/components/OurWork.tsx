import Image from "next/image";

const cases = [
  {
    title: "T&T Consulting",
    img: "/images/photo-tt.jpg",
    desc: "At T&T, RoarTech designed technology architecture solutions to align with enterprise standards, processes, procedures, and targets. We verified that their IT strategy was aligned with the organization’s mission and developed technical solutions to meet their needs. Using clear architectural models and the help of domain experts, we defined business goals and designed an information technology roadmap. This roadmap created a bridge between context and concept. We delivered an architecture that supports the most efficient and secure architectures meeting the business needs."
  },
  {
    title: "US Marine Corps",
    img: "/images/work-ship.jpg",
    desc: "We performed market research, developed an Alternative of Analysis (AoA), and provided analysis and recommendations against the current IT portfolio. We maintained their technology in line with its strategy and contributed to the agency’s technology roadmap. In addition, we defined and documented high-level and low-level solution architecture design based on requirements. We produced reference architectures for consumption across teams, participated in architecture-related review boards, and evaluated next-generation and emerging technologies."
  },
  {
    title: "DoS",
    img: "/images/work-servers.jpg",
    desc: "We designed and architected the end-to-end Hybrid Multi-Cloud Platform for the entire State Department, with necessary Governance and Security around it, while involving all the different Leadership, Product Owners, Vendors, contractors and FTEs. Our team coordinated with the government leadership to build a mission, strategy, execution plan, and innovation roadmap while engaging with multiple teams. We contributed to developing end-to-end governance structure within the CPMO group through change management, process functions, standardization, and tech council to manage all different governance relates tasks across the board."
  },
  {
    title: "Dept of Education",
    img: "/images/work-computer.jpg",
    desc: "We built the Education Grant Management Platform, leveraging the business process re-engineering and digital transformation analysis; ensured efficient program management services for the Next Generation Full Life Cycle Grants Management and Payment System. We identified all the challenges with the current G5, recommended a roadmap to integrate G5 modernization, and determined the appropriate SaaS/PaaS/IaaS vendors to build the platform and build an As-A-Service delivery model. Our team also architected the G5 Data Management Platform using Data Lake solution and integration with Department’s central data repository employing a hybrid multi-cloud environment."
  },
  {
    title: "USAID",
    img: "/images/work-buildings.jpg",
    desc: "We performed market research, developed an Alternative of Analysis (AoA), and provided analysis and recommendations against the current IT portfolio. We maintained their technology in line with its strategy and contributed to the agency’s technology roadmap. In addition, we defined and documented high-level and low-level solution architecture design based on requirements. We produced reference architectures for consumption across teams, participated in architecture-related review boards, and evaluated next-generation and emerging technologies."
  },
  {
    title: "GSA",
    img: "/images/work-web.jpg",
    desc: "We architected and designed the entire Operation Warp Speed public website in the AWS Innovation Lab environment using AWS services. Our work contributed to the client’s innovation lab (secure AWS Gov cloud) with best practices and procedures around cloud security practices for keeping instances separate, hardening the environments, DevOps in the cloud environment. We also produced system architecture diagrams of the entire cloud boundary and environment to support security requirements and leadership assistance. In addition, we facilitated the GAO security leadership team in defining and mapping all different controls based on NIST."
  },
  {
    title: "DOD USAF",
    img: "/images/work-air.jpg",
    desc: "We engaged with USAF EITaaS LoE vendors to review the technical deliverables, verifying and validating vendor solutions, and provided feedback to the government based on the market best practices and industry standards. Our team developed the PMO and vendor governance approach and framework, consisting of 50 processes and prioritized critical operational functions across multiple capabilities. We led the network and security reviews for USAF base mobilization with key USAF support personnel; ensured connections, permissions to systems and enclaves via 2875 submission, working with the ISSMs and systems owners."
  },
  {
    title: "VA",
    img: "/images/work-server.jpg",
    desc: "We developed the on-prem and hybrid cloud system strategy and the design infrastructure necessary to support the VA’s cloud architecture and DevOps operational model. We performed infrastructure-related tasks such as automation of infrastructure provisioning, configuration, continuous monitoring, audit logging, etc. Our team built net-new and migrated existing architecture, software, and services on the AWS and Azure platforms; facilitated migrations to the cloud from physical and virtual environments. We supported Web, Java, and JavaScript frameworks such as Spring, REST APIs, and Angular.js, as well as utilized DevOps methods, CI/CD automation, and all other cloud best practices."
  }
];

export default function OurWork() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-brand-dark mb-4">Our work</h2>
          <div className="w-16 h-[3px] bg-brand-primary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16">
          {cases.map((c, i) => (
            <div key={i} className="flex flex-col gap-6">
              <div className="relative w-full h-[280px] md:h-[380px] rounded-lg overflow-hidden shadow-md">
                <Image src={c.img} alt={c.title} fill className="object-cover transition-transform duration-500 hover:scale-105" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-brand-dark mb-4">{c.title}</h4>
                <div className="w-16 h-[3px] bg-brand-primary mb-6"></div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {c.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
