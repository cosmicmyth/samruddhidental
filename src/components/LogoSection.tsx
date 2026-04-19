import { motion } from 'motion/react';

export default function LogoSection() {
  return (
    <section className="py-10 md:py-16 bg-white overflow-hidden flex justify-center items-center w-full">
      <div className="flex justify-center items-center w-full">
        <motion.img
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          src="https://i.ibb.co/kgdCGWX8/logo-samruddhi.jpg"
          alt="Samruddhi Dental Care & Laser Center"
          className="h-[100px] sm:h-[130px] md:h-[180px] lg:h-[220px] w-auto object-contain mix-blend-multiply drop-shadow-sm"
          referrerPolicy="no-referrer"
        />
      </div>
    </section>
  );
}
