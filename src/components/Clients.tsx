import Image from "next/image";

export default function Clients() {
  const clients = [
    { name: "T&T Consulting", logo: "/images/tt-consulting.png" },
    { name: "US Marine", logo: "/images/us-marine.png" },
    { name: "DoS", logo: "/images/dos.png" },
    { name: "Dept of Education", logo: "/images/dept-of-education.png" },
    { name: "USAID", logo: "/images/usaid.png" }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-brand-dark mb-16">Who we serve</h2>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
          {clients.map((client, i) => (
            <div key={i} className="flex flex-col items-center group">
              <div className="w-24 h-24 relative mb-4">
                <Image 
                  src={client.logo} 
                  alt={client.name} 
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-gray-600 font-medium">{client.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
