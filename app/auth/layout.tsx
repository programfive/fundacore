"use client";
import { WelcomeSection } from "@/components/auth/welcome-section";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.2 },
    });
  }, [controls]);

  return (
    <main className="relative w-full h-full grid grid-cols-1 lg:grid-cols-2 p-4 place-content-center lg:place-content-stretch">
      <motion.div initial={{ opacity: 0, y: 50 }} animate={controls}>
        <WelcomeSection />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
        className="flex justify-center items-center "
      >
        {children}
      </motion.div>
    </main>
  );
};

export default AuthLayout;
