import { motion } from 'motion/react';
import { Shield, Activity, Sparkles, Smile, Layers, Droplets, Target, Sun, Waves, Zap, Star, Heart, Image as ImageIcon, ScanFace, Camera } from 'lucide-react';

const dentalServices = [
  { title: 'Dental Implants', desc: 'Permanent, natural-looking replacements for missing teeth to restore your smile.', icon: Shield, image: 'https://i.ibb.co/390Vtp3r/dental-implant.jpg' },
  { title: 'Root Canal Treatment', desc: 'Painless procedure to save infected teeth and relieve severe dental pain.', icon: Activity, image: 'https://i.ibb.co/8gyrfmx0/root-canal-again.jpg' },
  { title: 'Teeth Whitening', desc: 'Professional whitening treatments for a brighter, more confident, and radiant smile.', icon: Sparkles, image: 'https://i.ibb.co/Kj5SJm25/teeth-whitening.webp' },
  { title: 'Clear Aligners & Braces', desc: 'Straighten misaligned teeth with modern, comfortable, and effective orthodontic solutions.', icon: Smile, image: 'https://i.ibb.co/mFqxngvB/braces-and-clear-aligners.jpg' },
  { title: 'Crowns & Bridges', desc: 'Precision-crafted crowns and bridges for strong, natural-looking tooth restoration.', icon: Layers, image: 'https://i.ibb.co/h17RCQYG/bridges-mm.jpg' },
  { title: 'Scaling & Polishing', desc: 'Deep cleaning to prevent gum disease and maintain optimal oral hygiene.', icon: Droplets, image: 'https://i.ibb.co/LdMFwNpW/scaling-and-polishing-new.jpg' },
  { title: 'AI Dental Checkup (ScanO Air)', desc: 'Fast, contactless AI-powered dental checkups for early detection of oral issues.', icon: ScanFace, image: 'https://i.ibb.co/dsHxfBPM/scan-o-final-44.png' },
  { title: 'Full Mouth X-ray', desc: 'Comprehensive full mouth X-rays for accurate diagnosis and treatment planning.', icon: Camera, image: 'https://i.ibb.co/kVqM9psB/Whats-App-Image-2026-04-11-at-11-56-59-PM.jpg' },
  { title: 'Advanced Dental Laser Technology', desc: 'Versatile laser technology for gum care, whitening, and precise dental procedures.', icon: Zap, image: 'https://i.ibb.co/2Y64g7cM/dental-laser-imgg.png' },
];

const skinServices = [
  { title: 'Acne Treatment', desc: 'Targeted therapies to clear acne, reduce breakouts, and prevent future scarring.', icon: Target, image: 'https://i.ibb.co/rfkM3182/acne.jpg' },
  { title: 'Skin Rejuvenation', desc: 'Revitalize dull skin for a youthful, glowing, and refreshed appearance.', icon: Sun, image: 'https://i.ibb.co/PsWY6kbK/skin-rejuvination.jpg' },
  { title: 'Hydra Facial', desc: 'Deep cleansing and hydration for instantly smoother, more radiant skin.', icon: Waves, image: 'https://i.ibb.co/GvKnr04s/hydra-facial.jpg' },
  { title: 'Laser Hair Removal', desc: 'Safe, effective, and long-lasting hair reduction using advanced laser technology.', icon: Zap, image: 'https://i.ibb.co/pr1d1Bck/laser-hair-removal.jpg' },
  { title: 'Pigmentation Treatment', desc: 'Even out skin tone by reducing dark spots and hyperpigmentation effectively.', icon: Star, image: 'https://i.ibb.co/h1rwdVxm/pigmentation-skin.jpg' },
  { title: 'Anti-aging Treatments', desc: 'Reduce fine lines and wrinkles to restore your skin\'s natural youthfulness.', icon: Heart, image: 'https://i.ibb.co/RkVPFm7N/anti-aging.jpg' },
  { title: 'Tattoo Removal', desc: 'Laser treatment for safe and gradual tattoo removal.', icon: Zap, image: 'https://i.ibb.co/HM3VQ1K/tattoo-removal-finalll.png' },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dental Services Category */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Dental Services</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-secondary">
              Complete Dental Care
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {dentalServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 border border-gray-50 flex flex-col h-full"
                >
                  <div className="w-12 h-12 bg-highlight rounded-xl flex items-center justify-center mb-6 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-primary group-hover:text-emerald-500 transition-colors duration-300" />
                  </div>
                  <h4 className="text-xl font-bold text-secondary mb-3">{service.title}</h4>
                  <p className="text-secondary/70 leading-relaxed text-sm flex-grow mb-6">
                    {service.desc}
                  </p>
                  {service.image ? (
                    <div className="w-full aspect-[4/3] rounded-xl overflow-hidden mt-auto relative group-hover:shadow-md transition-shadow bg-gray-50">
                      <img src={service.image} alt={service.title} className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
                    </div>
                  ) : (
                    <div className="w-full aspect-[4/3] bg-gray-100 rounded-xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center text-gray-400 mt-auto">
                      <ImageIcon className="w-6 h-6 mb-1 opacity-50" />
                      <span className="text-xs font-medium">Image Placeholder</span>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Skin & Aesthetic Services Category */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Skin & Aesthetic</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-secondary">
              Advanced Skin & Aesthetic Treatments
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {skinServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 border border-gray-50 flex flex-col h-full"
                >
                  <div className="w-12 h-12 bg-highlight rounded-xl flex items-center justify-center mb-6 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-primary group-hover:text-emerald-500 transition-colors duration-300" />
                  </div>
                  <h4 className="text-xl font-bold text-secondary mb-3">{service.title}</h4>
                  <p className="text-secondary/70 leading-relaxed text-sm flex-grow mb-6">
                    {service.desc}
                  </p>
                  {service.image ? (
                    <div className="w-full aspect-[4/3] rounded-xl overflow-hidden mt-auto relative group-hover:shadow-md transition-shadow bg-gray-50">
                      <img src={service.image} alt={service.title} className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
                    </div>
                  ) : (
                    <div className="w-full aspect-[4/3] bg-gray-100 rounded-xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center text-gray-400 mt-auto">
                      <ImageIcon className="w-6 h-6 mb-1 opacity-50" />
                      <span className="text-xs font-medium">Image Placeholder</span>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg font-medium text-secondary/80 italic">
            + Many more advanced treatments available
          </p>
        </div>

      </div>
    </section>
  );
}
