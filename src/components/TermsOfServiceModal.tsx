import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface TermsOfServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TermsOfServiceModal({ isOpen, onClose }: TermsOfServiceModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-secondary/40 backdrop-blur-sm z-[100]"
          />
          
          {/* Modal Container */}
          <div className="fixed inset-0 flex items-center justify-center z-[101] p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl w-full max-w-2xl max-h-[85vh] overflow-hidden flex flex-col shadow-2xl pointer-events-auto"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <h3 className="text-2xl font-serif font-bold text-secondary">Terms of Service</h3>
                <button
                  onClick={onClose}
                  className="p-2 text-secondary/50 hover:text-primary hover:bg-highlight rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Body */}
              <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar">
                <div className="prose prose-sm md:prose-base prose-secondary max-w-none text-secondary/80">
                  <p className="mb-6">
                    By accessing and using this website, you agree to the following terms:
                  </p>

                  <h4 className="text-lg font-bold text-secondary mt-8 mb-3">General Information</h4>
                  <p className="mb-6">
                    The content on this website is provided for general informational purposes only. While we aim to keep the information accurate and up to date, we do not guarantee its completeness or accuracy.
                  </p>

                  <h4 className="text-lg font-bold text-secondary mt-8 mb-3">Medical Disclaimer</h4>
                  <p className="mb-6">
                    The information provided on this website does not replace professional medical advice, diagnosis, or treatment. Always consult a qualified healthcare professional for proper guidance.
                  </p>

                  <h4 className="text-lg font-bold text-secondary mt-8 mb-3">Use of Website</h4>
                  <p className="mb-6">
                    You agree to use this website responsibly and not engage in any activity that may harm, disrupt, or misuse the website.
                  </p>

                  <h4 className="text-lg font-bold text-secondary mt-8 mb-3">Third-Party Services</h4>
                  <p className="mb-6">
                    This website may include links or integrations such as WhatsApp, Google Maps, and social media platforms. These services operate independently, and we are not responsible for their content or privacy practices.
                  </p>

                  <h4 className="text-lg font-bold text-secondary mt-8 mb-3">Limitation of Liability</h4>
                  <p className="mb-6">
                    We are not liable for any direct or indirect damages arising from the use of this website or reliance on its content.
                  </p>

                  <h4 className="text-lg font-bold text-secondary mt-8 mb-3">Changes to Terms</h4>
                  <p className="mb-6">
                    We may update these terms at any time without prior notice.
                  </p>

                  <h4 className="text-lg font-bold text-secondary mt-8 mb-3">Contact</h4>
                  <p className="mb-6">
                    If you have any questions, please contact us using the details provided on the website.
                  </p>
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-gray-100 flex justify-end">
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 bg-gray-100 text-secondary font-medium rounded-full hover:bg-gray-200 transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
