import { motion,AnimatePresence } from "framer-motion";
interface ShadowProps {
  isOpen: boolean;
  toggleOpen: any;
}
export function Shadow({ isOpen, toggleOpen }: ShadowProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="overlay"
          onClick={() => toggleOpen()}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
          className="fixed lg:hidden outline-none inset-0 bg-black/80 z-40"
        />
      )}
    </AnimatePresence>
  );
}
