import { Facebook, Instagram, Youtube } from 'lucide-react';
import { useState } from 'react';
import PrivacyPolicyModal from './PrivacyPolicyModal';
import TermsOfServiceModal from './TermsOfServiceModal';

export default function Footer() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  return (
    <footer className="bg-white pt-20 pb-10 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center mb-6 group">
              <img 
                src="https://i.ibb.co/cXTdDSrT/logo-samruddhi.jpg" 
                alt="Samruddhi Dental Care & Laser Center" 
                className="h-[100px] sm:h-[130px] md:h-[170px] lg:h-[220px] w-auto object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
            </a>
            <p className="text-secondary/70 font-light leading-relaxed max-w-sm mb-4">
              Providing advanced dental and aesthetic treatments with a focus on patient comfort, safety, and exceptional results.
            </p>
            <div className="text-secondary/70 text-sm mb-8 leading-relaxed">
              Samruddhi Dental Care & Advanced Laser Center<br />
              CIDCO N5, BESIDE NAIK COLLEGE<br />
              Town Center, Connaught Place<br />
              Chhatrapati Sambhajinagar, Maharashtra 431003<br />
              <a href="https://www.google.com/maps/place/Samruddhi+Dental/@19.8763734,75.3610355,17z/data=!4m16!1m9!3m8!1s0x3bdba2c07f5c5937:0x78f1566997e9c086!2sSamruddhi+Dental!8m2!3d19.8763684!4d75.3636104!9m1!1b1!16s%2Fg%2F11fjmbz9m8!3m5!1s0x3bdba2c07f5c5937:0x78f1566997e9c086!8m2!3d19.8763684!4d75.3636104!16s%2Fg%2F11fjmbz9m8?entry=ttu" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline mt-2 inline-block font-medium">View on Google Maps</a>
            </div>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/SamruddhiDentalCare/reels/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-secondary hover:bg-primary hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/samruddhidentalandlasercenter?igsh=ZjVpNnNybDBpbzc5" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-secondary hover:bg-primary hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/@drsamruddhishinde6741" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-secondary hover:bg-primary hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-secondary mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-secondary/70 hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="text-secondary/70 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#services" className="text-secondary/70 hover:text-primary transition-colors">Services</a></li>
              <li><a href="#gallery" className="text-secondary/70 hover:text-primary transition-colors">Gallery</a></li>
              <li><a href="#contact" className="text-secondary/70 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-secondary mb-6 uppercase tracking-wider text-sm">Services</h4>
            <ul className="space-y-4">
              <li className="text-secondary/70">Dental Implants</li>
              <li className="text-secondary/70">Root Canal Treatment</li>
              <li className="text-secondary/70">Laser Hair Removal</li>
              <li className="text-secondary/70">Hydra Facial</li>
              <li className="text-secondary/70">Skin Rejuvenation</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-secondary/50 text-sm">
            © {new Date().getFullYear()} SAMRUDDHI Dental Care & Advanced Laser Center. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-secondary/50">
            <button onClick={() => setIsPrivacyOpen(true)} className="hover:text-primary transition-colors text-left">Privacy Policy</button>
            <button onClick={() => setIsTermsOpen(true)} className="hover:text-primary transition-colors text-left">Terms of Service</button>
          </div>
        </div>
      </div>
      <PrivacyPolicyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
      <TermsOfServiceModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
    </footer>
  );
}
