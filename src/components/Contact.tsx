import { MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-secondary text-white relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Book Appointment</h2>
        <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6">
          Ready for a <span className="italic font-normal text-primary">transformation?</span>
        </h3>
        <p className="text-white/70 font-light text-lg mb-10 max-w-2xl mx-auto">
          Book your consultation easily through WhatsApp. Our team will get back to you promptly to confirm your appointment details.
        </p>

        <a 
          href="https://wa.me/919765799994?text=Hi,%20I%20would%20like%20to%20book%20an%20appointment"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white px-10 py-5 rounded-2xl text-xl font-medium hover:bg-[#20bd5a] transition-all hover:scale-105 shadow-xl shadow-[#25D366]/20 mb-16"
        >
          <MessageCircle className="w-6 h-6" />
          Book via WhatsApp
        </a>

        <div className="text-white/80 text-sm leading-relaxed border-t border-white/10 pt-10">
          <p className="font-medium text-lg text-white mb-2">Samruddhi Dental Care & Advanced Laser Center</p>
          CIDCO N5, BESIDE NAIK COLLEGE<br />
          Town Center, Connaught Place<br />
          Chhatrapati Sambhajinagar, Maharashtra 431003
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
            <a href="https://www.google.com/maps/place/Samruddhi+Dental/@19.8763734,75.3610355,17z/data=!4m16!1m9!3m8!1s0x3bdba2c07f5c5937:0x78f1566997e9c086!2sSamruddhi+Dental!8m2!3d19.8763684!4d75.3636104!9m1!1b1!16s%2Fg%2F11fjmbz9m8!3m5!1s0x3bdba2c07f5c5937:0x78f1566997e9c086!8m2!3d19.8763684!4d75.3636104!16s%2Fg%2F11fjmbz9m8?entry=ttu" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors text-sm font-medium">
              View on Google Maps
            </a>
            <span className="hidden sm:inline text-white/30">•</span>
            <a href="https://www.facebook.com/SamruddhiDentalCare/reels/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors text-sm font-medium">
              Follow us on Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
