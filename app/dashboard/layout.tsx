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
    <div className="relative p-4 md:p-6 lg:px-12  overflow-x-hidden ">
      <div className="absolute z-10 inset-0 h-72 w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-electric-violet-500 to-electric-violet-600  dark:hidden "></div>
      <div className=" lg:hidden flex justify-between items-center">
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
      <Aside isOpen={isOpen} toggleOpen={toggleOpen} />
      <main className=" lg:ml-72 ">
        <div className="relative z-30">
          <NavBar />
          <div className="mt-5">{children}</div>
        </div>
      </main>
    </div>
  );
}
export default Layout;
