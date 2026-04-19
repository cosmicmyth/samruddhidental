import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyPolicyModal({ isOpen, onClose }: PrivacyPolicyModalProps) {
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
                <h3 className="text-2xl font-serif font-bold text-secondary">Privacy Policy</h3>
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
                    At Samruddhi Dental, Skin, Hair & Advanced Laser Center, we respect your privacy and are committed to protecting your information.
                  </p>

                  <h4 className="text-lg font-bold text-secondary mt-8 mb-3">Information Collection</h4>
                  <p className="mb-6">
                    We do not collect personal information directly through this website. However, when you contact us via WhatsApp or phone, you may choose to share your details voluntarily.
                  </p>

                  <h4 className="text-lg font-bold text-secondary mt-8 mb-3">Use of Information</h4>
                  <p className="mb-2">
                    Any information shared by you through WhatsApp or other communication methods is used only to:
                  </p>
                  <ul className="list-disc pl-5 mb-6 space-y-1">
                    <li>Respond to your inquiries</li>
                    <li>Assist with appointments</li>
                    <li>Provide relevant information about our services</li>
                  </ul>
                  <p className="mb-6">
                    We do not sell, trade, or share your personal information with third parties.
                  </p>

                  <h4 className="text-lg font-bold text-secondary mt-8 mb-3">Third-Party Services</h4>
                  <p className="mb-6">
                    This website may include links or integrations such as WhatsApp, Google Maps, and social media platforms. Please note that these services have their own privacy policies, and we are not responsible for their practices.
                  </p>

                  <h4 className="text-lg font-bold text-secondary mt-8 mb-3">Data Security</h4>
                  <p className="mb-6">
                    We take reasonable steps to ensure your information is handled securely.
                  </p>

                  <h4 className="text-lg font-bold text-secondary mt-8 mb-3">Your Consent</h4>
                  <p className="mb-6">
                    By using this website, you agree to this privacy policy.
                  </p>

                  <h4 className="text-lg font-bold text-secondary mt-8 mb-3">Contact Us</h4>
                  <p className="mb-6">
                    If you have any questions, you can contact us using the details provided on the website.
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
