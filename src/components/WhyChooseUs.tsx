import { motion } from 'motion/react';
import { Microscope, HeartHandshake, UserCheck, ShieldCheck, Sparkles } from 'lucide-react';

const reasons = [
  {
    icon: Microscope,
    title: 'Advanced Equipment',
    desc: 'State-of-the-art technology for precise diagnosis and treatment.',
  },
  {
    icon: Sparkles,
    title: 'Painless Procedures',
    desc: 'Modern techniques ensuring maximum comfort during treatments.',
  },
  {
    icon: UserCheck,
    title: 'Experienced Doctor',
    desc: 'Highly qualified specialist dedicated to your care.',
  },
  {
    icon: ShieldCheck,
    title: 'Hygiene & Safety',
    desc: 'Strict sterilization protocols for your complete safety.',
  },
  {
    icon: HeartHandshake,
    title: 'Personalized Care',
    desc: 'Tailored treatment plans designed specifically for you.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-secondary text-white relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full border-[40px] border-primary/30" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full border-[40px] border-primary/30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Why Choose Us</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Setting a new standard in <span className="italic font-normal text-primary">healthcare</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors"
              >
                <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h4 className="text-xl font-serif font-bold mb-3">{reason.title}</h4>
                <p className="text-white/70 font-light leading-relaxed">{reason.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
