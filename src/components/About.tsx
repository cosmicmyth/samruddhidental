import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  const points = [
    'Over 10+ years of clinical experience',
    'Patient-focused, pain-free approach',
    'State-of-the-art modern equipment',
    'Comprehensive dental care using advanced technology',
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden relative shadow-xl">
              <img
                src="https://s13.gifyu.com/images/bqIQb.jpg"
                alt="Dr. Samruddhi Chaudhary-Shinde"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 border-2 border-primary/20 rounded-3xl m-4 pointer-events-none" />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs hidden md:block">
              <p className="font-serif text-4xl text-primary mb-2">10+</p>
              <p className="text-sm text-secondary/70 font-medium">Years of creating beautiful smiles</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">About The Clinic</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-6 leading-tight">
              Expert care with a <span className="italic font-normal text-primary">human touch</span>
            </h3>

            <div className="flex items-center gap-4 sm:gap-6 mb-8 pb-8 border-b border-gray-100 justify-between sm:justify-start">
              <div>
                <p className="font-serif font-bold text-secondary text-xl">Dr. Samruddhi Chaudhary-Shinde</p>
                <p className="text-sm text-primary font-medium">Chief Dental Surgeon (BDS, MDS)</p>
              </div>
              <div className="h-10 w-px bg-gray-200 hidden sm:block"></div>
              <img 
                src="https://i.ibb.co/XZqM7YTq/samruddhi-just-logo.png" 
                alt="Samruddhi Logo" 
                className="h-[45px] md:h-[55px] w-auto object-contain mix-blend-multiply opacity-90"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
            </div>

            <p className="text-lg text-secondary/70 mb-8 font-light leading-relaxed">
              At SAMRUDDHI Dental Care & Advanced Laser Center, we believe that healthcare should be personal, comfortable, and effective. Our clinic combines advanced medical technology with a warm, welcoming environment to ensure you receive the best possible care.
            </p>

            <ul className="space-y-4 mb-6">
              {points.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                  <span className="text-secondary/80">{point}</span>
                </li>
              ))}
            </ul>
            
            <p className="text-sm text-secondary/60 italic mb-10">
              * Skin & Aesthetic treatments are handled by trained professionals in a dedicated department.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
