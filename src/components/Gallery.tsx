import { motion } from 'motion/react';
import { Image as ImageIcon } from 'lucide-react';

const interiorImages = [
  "https://i.ibb.co/gL8Mjc67/Whats-App-Image-2026-04-11-at-11-57-09-PM-1.jpg",
  "https://i.ibb.co/NgG8wZc7/Whats-App-Image-2026-04-11-at-11-57-09-PM-2.jpg",
  "https://i.ibb.co/MW3kLJK/Whats-App-Image-2026-04-11-at-11-57-09-PM.jpg",
  "https://i.ibb.co/sp9psKFJ/Whats-App-Image-2026-04-11-at-11-57-10-PM.jpg",
  "https://i.ibb.co/TqRyzdDw/Whats-App-Image-2026-04-11-at-11-57-01-PM-1.jpg"
];

const equipmentImages = [
  "https://i.ibb.co/VcknKd19/Whats-App-Image-2026-04-11-at-11-56-58-PM.jpg",
  "https://i.ibb.co/rRP8Jpb6/Whats-App-Image-2026-04-11-at-11-57-02-PM-2.jpg",
  "https://i.ibb.co/0jdh9FmZ/Whats-App-Image-2026-04-11-at-11-57-03-PM-1.jpg",
  "https://i.ibb.co/B5j29NFp/Whats-App-Image-2026-04-11-at-11-57-06-PM.jpg",
  "https://i.ibb.co/Jw3L8Dqy/Whats-App-Image-2026-04-11-at-11-57-07-PM-2.jpg",
  "https://i.ibb.co/ns0nC4QX/Whats-App-Image-2026-04-11-at-11-57-09-PM-3.jpg"
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Our Clinic</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-secondary">
              Take a tour of our <span className="italic font-normal text-primary">facility</span>
            </h3>
          </div>
          <p className="text-secondary/60 max-w-sm">
            Designed for your comfort and equipped with the latest medical technology.
          </p>
        </div>

        <div className="mb-16">
          <h4 className="text-2xl font-serif font-bold text-secondary mb-8 border-b border-gray-100 pb-4">Clinic Interior</h4>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-6">
            {interiorImages.map((img, index) => {
              const isFirstRow = index < 3;
              return (
                <motion.div
                  key={`interior-${index}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`rounded-[1rem] bg-[#E5E7EB] group cursor-pointer overflow-hidden relative ${
                    isFirstRow ? 'md:col-span-2 h-[250px] md:h-[320px]' : 'md:col-span-3 h-[350px] md:h-[480px]'
                  }`}
                >
                  <img src={img} alt={`Clinic Interior ${index + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
                  <div className="absolute inset-0 bg-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              );
            })}
          </div>
        </div>

        <div>
          <h4 className="text-2xl font-serif font-bold text-secondary mb-8 border-b border-gray-100 pb-4">Equipment & Technology</h4>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6">
            {equipmentImages.map((img, index) => (
              <motion.div
                key={`equipment-${index}`}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-[1rem] bg-[#E5E7EB] group cursor-pointer overflow-hidden relative break-inside-avoid"
              >
                <img src={img} alt={`Equipment ${index + 1}`} className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
                <div className="absolute inset-0 bg-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
