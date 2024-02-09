"use client";
import { Logo } from "../ui/logo";
import { motion } from "framer-motion";
import { AsideContent } from "./AsideContent";

interface AsideProps {
  isOpen: boolean;
  toggleOpen: any;
}

export function Aside({ isOpen, toggleOpen }: AsideProps) {
  return (
    <>
      <aside className="fixed top-0 left-0 z-40   p-4 h-screen ">
        <motion.div
          variants={{
            open: {
              x: "var(--x-open)",

              transition: {
                type: "Tween",
                stiffness: 80,
                restDelta: 0.01,
              },
            },
            closed: {
              x: "var(--x-closed)",

              transition: {
                delay: 0.5,
                type: "Tween",
                stiffness: 400,
                damping: 40,
              },
            },
          }}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          className="fixed max-w-[calc(100%-3rem)] w-64 shadow-xl lg:max-w-none  inset-0 bg-background  h-full   lg:static 
          [--opacity-closed:0%] lg:[--opacity-closed:100%] [--opacity-open:100%] 
          [--x-open:0%] [--x-closed:-100%] lg:[--x-closed:0%]  px-3 py-4 overflow-y-auto border-r lg:border border-border flex flex-col gap-6 rounded-[.75rem]"
        >
          <Logo className="w-auto h-6 text-gray-600 dark:text-white" />
          <AsideContent toggleOpen={toggleOpen} />
        </motion.div>
      </aside>
    </>
  );
}
