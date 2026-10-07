import { MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-brand-primary text-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        
        {/* Left Side - Contact Info */}
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold mb-2">Contact us</h2>
          <p className="text-[15px] leading-relaxed text-white/90 max-w-sm mb-4">
            Roar Tech Inc. is a software development consulting firm specializing in Cloud Migration and Enterprise Governance.
          </p>
          
          <div className="flex flex-col gap-4 text-[15px] text-white/90">
            <div className="flex items-center gap-3">
              <MapPin size={18} />
              <span>Washington DC</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={18} />
              <a href="mailto:info@roartechinc.com" className="hover:text-brand-accent transition-colors">info@roartechinc.com</a>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={18} />
              <a href="tel:7039849981" className="hover:text-brand-accent transition-colors">(703) 984-9981</a>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold mb-2">Send us a message</h2>
          <form className="flex flex-col gap-4">
            <input 
              type="text" 
              placeholder="Your name" 
              className="w-full bg-[#004a69] text-white placeholder-white/80 px-4 py-3 rounded-md focus:outline-none focus:ring-1 focus:ring-brand-accent transition-all"
            />
            <input 
              type="email" 
              placeholder="Your email" 
              className="w-full bg-[#004a69] text-white placeholder-white/80 px-4 py-3 rounded-md focus:outline-none focus:ring-1 focus:ring-brand-accent transition-all"
            />
            <textarea 
              placeholder="Your message" 
              rows={4}
              className="w-full bg-[#004a69] text-white placeholder-white/80 px-4 py-3 rounded-md focus:outline-none focus:ring-1 focus:ring-brand-accent transition-all resize-none"
            ></textarea>
            <button 
              type="submit" 
              className="self-start mt-2 bg-brand-accent hover:bg-brand-accentHover text-white font-semibold py-3 px-8 rounded-full transition-colors"
            >
              Send
            </button>
          </form>
        </div>

      </div>
    </footer>
  );
}
