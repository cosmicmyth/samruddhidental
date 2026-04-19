import { motion } from 'motion/react';
import { ArrowRight, Phone, Star, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-extrabold text-secondary leading-[1.15] mb-6">
              Samruddhi Dental Care & <br className="hidden md:block" />
              <span className="text-primary italic font-normal">Advanced Laser Center.</span><br />
              <span className="text-3xl md:text-4xl lg:text-5xl mt-2 block">in Chhatrapati Sambhajinagar</span>
            </h1>
            
            <p className="text-lg md:text-xl text-secondary/60 mb-8 max-w-lg leading-relaxed font-light">
              Complete care with modern technology and personalized treatment in Chhatrapati Sambhajinagar.
            </p>

            <div className="grid grid-cols-2 gap-y-4 gap-x-4 mb-10">
              {[
                '10+ Years Experience',
                'Advanced Equipment',
                'Painless Treatment'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm font-medium text-secondary/80">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="https://wa.me/919765799994?text=Hi,%20I%20would%20like%20to%20book%20an%20appointment"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-full text-base font-medium hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/20"
              >
                Book Appointment
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:+919765799994"
                className="inline-flex items-center justify-center gap-2 bg-white text-secondary border-2 border-gray-100 px-8 py-4 rounded-full text-base font-medium hover:bg-gray-50 transition-all hover:scale-105 shadow-sm"
              >
                <Phone className="w-5 h-5 text-primary" />
                Call Now
              </a>
            </div>

            <a 
              href="https://www.google.com/maps/place/Samruddhi+Dental/@19.8763734,75.3610355,17z/data=!4m16!1m9!3m8!1s0x3bdba2c07f5c5937:0x78f1566997e9c086!2sSamruddhi+Dental!8m2!3d19.8763684!4d75.3636104!9m1!1b1!16s%2Fg%2F11fjmbz9m8!3m5!1s0x3bdba2c07f5c5937:0x78f1566997e9c086!8m2!3d19.8763684!4d75.3636104!16s%2Fg%2F11fjmbz9m8?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 pt-6 border-t border-gray-100 hover:opacity-80 transition-opacity inline-flex"
            >
              <div className="flex gap-1 text-yellow-400">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
              <div>
                <div className="text-base font-bold text-secondary">4.9/5 Rating</div>
                <div className="text-sm text-secondary/60">Based on 450+ Happy Patients</div>
              </div>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative">
              <img
                src="https://i.ibb.co/S45SZDLZ/Whats-App-Image-2026-04-11-at-11-57-02-PM-1.jpg"
                alt="Samruddhi Clinic"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                fetchPriority="high"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 via-transparent to-transparent mix-blend-multiply" />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[2rem]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
