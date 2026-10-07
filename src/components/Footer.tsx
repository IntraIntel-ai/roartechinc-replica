import { MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#1A1A1A] text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 mb-16">
        <div>
          <h3 className="text-2xl font-bold mb-6">Contact us</h3>
          <p className="text-gray-400 mb-10 text-lg">
            Roar Tech Inc. is a software development consulting firm specializing in Cloud Migration and Enterprise Governance.
          </p>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4 text-gray-300">
              <MapPin className="w-6 h-6 text-gray-400" />
              <span className="text-lg">Washington DC</span>
            </div>
            <div className="flex items-center gap-4 text-gray-300">
              <Mail className="w-6 h-6 text-gray-400" />
              <span className="text-lg">info@roartechinc.com</span>
            </div>
            <div className="flex items-center gap-4 text-gray-300">
              <Phone className="w-6 h-6 text-gray-400" />
              <span className="text-lg">(703) 984-9981</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-8">Send us a message</h3>
          <form className="flex flex-col gap-4">
            <input 
              type="text" 
              placeholder="Your name" 
              className="w-full px-4 py-3 bg-white text-brand-dark rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input 
              type="email" 
              placeholder="Your email" 
              className="w-full px-4 py-3 bg-white text-brand-dark rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea 
              rows={5} 
              placeholder="Your message" 
              className="w-full px-4 py-3 bg-white text-brand-dark rounded focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            ></textarea>
            <button 
              type="button" 
              className="self-start px-8 py-3 bg-gray-600 text-white font-semibold rounded hover:bg-gray-700 transition-colors"
            >
              Send
            </button>
          </form>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-gray-800 text-center text-gray-500">
        <p>Copyright © 2026 RoarTech Inc.</p>
      </div>
    </footer>
  );
}
