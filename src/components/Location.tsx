import { motion } from 'motion/react';
import { MapPin, Phone, Clock } from 'lucide-react';

export default function Location() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Visit Us</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-8">
              Conveniently located in <span className="italic font-normal text-primary">Chhatrapati Sambhajinagar</span>
            </h3>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-highlight rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-secondary mb-1">Clinic Address</h4>
                  <p className="text-secondary/70 leading-relaxed">
                    Samruddhi Dental Care & Advanced Laser Center<br />
                    CIDCO N5, BESIDE NAIK COLLEGE<br />
                    Town Center, Connaught Place<br />
                    Chhatrapati Sambhajinagar, Maharashtra 431003
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-highlight rounded-full flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-secondary mb-1">Contact Details</h4>
                  <p className="text-secondary/70 leading-relaxed">
                    09765799994
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-highlight rounded-full flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-secondary mb-3">Clinic Timings</h4>
                  <div className="space-y-3 w-full max-w-xs">
                    <div className="flex justify-between items-start gap-4 border-b border-gray-100 pb-3">
                      <span className="font-medium text-secondary">Monday – Saturday</span>
                      <div className="text-right text-secondary/70 text-sm space-y-1">
                        <span className="block">10:00 AM – 2:00 PM</span>
                        <span className="block">5:00 PM – 9:00 PM</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center pt-1 gap-4">
                      <span className="font-medium text-secondary shrink-0">Sunday</span>
                      <span className="text-primary font-medium text-sm text-right">Only on Appointment Basis</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="aspect-square md:aspect-video lg:aspect-square rounded-3xl overflow-hidden shadow-lg border border-gray-100"
          >
            <iframe
              src="https://maps.google.com/maps?q=19.8763684,75.3636104&hl=en&z=17&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Clinic Location"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
