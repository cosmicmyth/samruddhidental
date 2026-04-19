import { motion } from 'motion/react';
import { Image as ImageIcon } from 'lucide-react';

const results = [
  { image: 'https://i.ibb.co/CK7BB8vX/dental-shit-4.png' },
  { image: 'https://i.ibb.co/nNqrN0Lm/dental-shit-5.png' },
  { image: 'https://i.ibb.co/RTtwnNmM/dental-shit-6.png' },
  { image: 'https://i.ibb.co/XTPhtLS/edited-photo.png' },
  { image: 'https://i.ibb.co/20MMdtLF/new-dental-samples-1.png' },
  { image: 'https://i.ibb.co/x8Y3bbQ2/new-dental-samples-2-1.png' },
  { image: 'https://i.ibb.co/gLwG2rV7/Screenshot-2026-04-15-161821.png' },
  { image: 'https://i.ibb.co/1YvK1vwt/Screenshot-2026-04-15-162004.png' },
  { image: 'https://i.ibb.co/1GyR2Vnv/Screenshot-2026-04-15-162149.png' },
];

export default function Results() {
  return (
    <section id="results" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Real Patient Results</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-secondary">
            Smile & Skin <span className="italic font-normal text-primary">Transformations</span>
          </h3>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {results.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer break-inside-avoid"
            >
              <div className="rounded-[1rem] overflow-hidden bg-[#E5E7EB] relative">
                {result.image ? (
                  <img src={result.image} alt="Patient Result" className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
                ) : (
                  <div className="aspect-[3/4] w-full flex flex-col items-center justify-center text-gray-400 transition-transform duration-500 group-hover:scale-105">
                    <ImageIcon className="w-10 h-10 mb-2 opacity-50" />
                    <span className="text-sm font-medium">Merged Result Image</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
