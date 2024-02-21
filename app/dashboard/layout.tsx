"use client";
import { Aside } from "@/components/dashboard/aside";
import { NavBar } from "@/components/dashboard/navbar";
import { Logo } from "@/components/ui/logo";
import { MenuToggle } from "@/components/ui/menu-toogle";
import { Shadow } from "@/components/ui/shadow";
import { motion, useCycle, AnimatePresence } from "framer-motion";
function Layout({ children }: { children: React.ReactNode }) {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <div className="relative ">
      <div className="absolute z-10  inset-0 h-72 w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-electric-violet-500 to-electric-violet-600  dark:hidden "></div>
      <div className=" p-4 lg:hidden flex justify-between items-center">
        <Logo className="w-auto h-6 z-30 text-electric-violet-50" />
        <motion.div
          initial={false}
          animate={isOpen ? "open" : "closed"}
          className="pt-2 z-30"
        >
          <MenuToggle toggle={() => toggleOpen()} />
        </motion.div>
      </div>
      <Shadow isOpen={isOpen} toggleOpen={toggleOpen} />
      <main className="px-4 lg:p-4 h-full">
        <Aside isOpen={isOpen} toggleOpen={toggleOpen} />
        <div className="relative z-30 lg:pl-72  max-w-[92.5rem]    ">
          <NavBar />
          <div className="mt-5">{children}</div>
        </div>
      </main>
    </div>
  );
}
export default Layout;
