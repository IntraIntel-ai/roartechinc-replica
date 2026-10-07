export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#333333] font-['Montserrat',sans-serif]">
      <header className="w-full max-w-[1200px] mx-auto px-6 py-6 flex justify-between items-center">
        <div className="text-[35px] font-medium text-[#333333]">RoarTech Inc.</div>
        <nav className="hidden md:flex gap-6 text-[15px]">
          <a href="#" className="hover:text-blue-600">Home</a>
        </nav>
      </header>

      <main className="max-w-[1200px] mx-auto px-6 py-12 flex flex-col gap-12">
        <section className="text-center mb-8">
          <h4 className="text-[20px] font-medium text-[#333333] mb-4">
            Founded in 2014, RoarTech is a software development consulting firm specializing in Cloud Migration and Enterprise Governance.
          </h4>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center flex flex-col items-center">
            <h4 className="text-[20px] font-medium mb-6">What we do</h4>
            <p className="text-[18px] text-[#333333] leading-relaxed">
              Roar Tech Inc. is a software development consulting firm specializing in Cloud Migration and Enterprise Governance.
            </p>
          </div>
          <div className="text-center flex flex-col items-center">
            <h4 className="text-[20px] font-medium mb-6">Who we serve</h4>
            <p className="text-[18px] text-[#333333] leading-relaxed">
              RoarTech brings expert advisory to the C-level to help them move to next generation technology. We build roadmaps, hire vendors, help with implementation, Program Management, and Governance, all within an organization’s budget and timeline. We integrate DevSecOps with cloud migration best practices that are tailored based on federal and commercial standards.
            </p>
          </div>
          <div className="text-center flex flex-col items-center">
            <h4 className="text-[20px] font-medium mb-6">Why us</h4>
            <p className="text-[18px] text-[#333333] leading-relaxed">
              Our innovative approach to Cloud Security ensures that DevSecOps and interconnectivity are integrated into your solution from Day One. We exceed our clients’ expectations by focusing on repeatable, sustainable processes that continually come in under-budget and are delivered on-time. Our Promise-to-Deliver is the cornerstone of our customer-centric, value-based approach. We never settle for the status quo!
            </p>
          </div>
        </section>

        <section className="flex flex-col md:flex-row gap-12 mt-16">
          <div className="flex-1">
            <h4 className="text-[20px] font-medium mb-6">Contact us</h4>
          </div>
          <div className="flex-1">
            <h4 className="text-[20px] font-medium mb-6">Send us a message</h4>
            <form className="flex flex-col gap-4">
              <label className="flex flex-col text-[16px]">
                Your name
                <input type="text" className="mt-1 p-3 border border-gray-300 bg-[#FAFAFA]" />
              </label>
              <label className="flex flex-col text-[16px]">
                Your email
                <input type="email" className="mt-1 p-3 border border-gray-300 bg-[#FAFAFA]" />
              </label>
              <label className="flex flex-col text-[16px]">
                Subject
                <input type="text" className="mt-1 p-3 border border-gray-300 bg-[#FAFAFA]" />
              </label>
              <label className="flex flex-col text-[16px]">
                Your message (optional)
                <textarea rows={4} className="mt-1 p-3 border border-gray-300 bg-[#FAFAFA]"></textarea>
              </label>
              <button className="bg-[#333333] text-white px-8 py-3 font-medium mt-4 self-start hover:bg-black rounded-[30px] border-none text-[20px]">
                Submit
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="w-full mt-12 pb-12">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col items-center text-[18px] text-[#333333]">
          <div className="w-full h-px bg-gray-200 mb-8"></div>
          <p>Copyright © 2026 RoarTech Inc.</p>
        </div>
      </footer>
    </div>
  );
}
