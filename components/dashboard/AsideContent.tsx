import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { HiHome } from "react-icons/hi2";
import { FaChildren, FaUsers } from "react-icons/fa6";
const links = [
  {
    name: "dashboard",
    href: "/dashboard",
    icon: <HiHome className="w-6 h-6 " />,
  },
  {
    name: "Users",
    href: "/dashboard/users",
    icon: <FaUsers className="w-6 h-6 " />,
  },
  {
    name: "Children",
    href: "/dashboard/children",
    icon: <FaChildren className="w-6 h-6 " />,
  },
];
export function AsideContent({ toggleOpen }: any) {
  const pathname = usePathname();
  return (
    <motion.div
      variants={{
        open: {
          transition: {
            staggerChildren: 0.16,
            delayChildren: 0.2,
          },
        },
        closed: {
          transition: {
            staggerChildren: 0.1,
            staggerDirection: -1,
          },
        },
      }}
      className=" flex flex-col gap-4 border-t border-border pt-6 "
    >
      {links.map((link, index) => (
        <Link
          key={index}
          className="w-full outline-none "
          onClick={() => toggleOpen()}
          href={link.href}
        >
          <motion.li
            variants={{
              open: {
                y: 0,
                opacity: 1,
                transition: {
                  y: {
                    stiffness: 1000,
                    velocity: -100,
                  },
                },
              },
              closed: {
                y: "var(--y-closed)",
                opacity: "var(--opacity-closed)",
                transition: {
                  y: { stiffness: 3000 },
                },
              },
            }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            key={index}
            className={cn(
              "flex gap-3 [--y-closed:50%] text-gray-600 dark:text-electric-violet-50 hover:text-electric-violet-50 [--opacity-closed:0%] lg:[--opacity-closed:100%] lg:[--y-closed:0%] px-2 items-center rounded py-2.5  hover:bg-primary",
              pathname === link.href
                ? "bg-primary text-electric-violet-50"
                : null
            )}
          >
            <span>{link.icon}</span>
            <span> {link.name}</span>
          </motion.li>
        </Link>
      ))}
    </motion.div>
  );
}
