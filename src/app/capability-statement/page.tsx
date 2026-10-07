import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Capability Statement",
  description: "RoarTech's capability statement, past performance brochures, and NAICS codes.",
};

export default function CapabilityStatement() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24 px-6 min-h-screen bg-brand-grayBg">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8 md:p-12">
          
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-brand-dark mb-4">RoarTech’s capability statement</h1>
            <div className="w-16 h-[3px] bg-brand-primary mx-auto mb-16"></div>
          </div>

          <div className="mb-16 text-center">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">Past Performances Brochures</h2>
            <div className="w-16 h-[3px] bg-brand-primary mx-auto mb-8"></div>
            
            <div className="bg-brand-grayBg p-4 rounded-lg flex flex-col items-center">
              <object 
                data="/pdf/RoarTechs-capability-statement.pdf" 
                type="application/pdf" 
                className="w-full h-[600px] mb-6 rounded shadow-sm border border-gray-200"
                aria-label="Embed of RoarTech's capability statement"
              >
                <p>It appears you don't have a PDF plugin for this browser. No biggie... you can <a href="/pdf/RoarTechs-capability-statement.pdf" className="text-brand-primary hover:underline">click here to download the PDF file.</a></p>
              </object>
              
              <a 
                href="/pdf/RoarTechs-capability-statement.pdf" 
                download
                className="inline-block px-8 py-3 bg-brand-primary text-white font-semibold rounded-full hover:bg-brand-secondary transition-colors"
              >
                Download Brochure
              </a>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">NAICS codes</h2>
            <div className="w-16 h-[3px] bg-brand-primary mx-auto mb-8"></div>
            
            <div className="text-lg text-gray-700 leading-relaxed font-medium space-y-2">
              <p>541330</p>
              <p>541511</p>
              <p>541512</p>
              <p>541513</p>
              <p>541519</p>
              <p>541611</p>
              <p>541618</p>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
