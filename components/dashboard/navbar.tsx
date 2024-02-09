import { FaBell } from "react-icons/fa";
import { UserButton } from "../auth/user-button";
import { ModeToggle } from "../ui/mode-toggle";
import { usePathname } from "next/navigation";

export function NavBar() {
  const pathname = usePathname();
  const currentPathRoute = pathname.split("/")[1];
  const currentPathPage = pathname.split("/")[2];

  return (
    <>
      <header className="flex justify-between text-electric-violet-50">
        <nav>
          <ol className="flex flex-wrap pt-1 bg-transparent rounded-lg sm:mr-16">
            <li className="text-sm leading-normal">
              <a className="opacity-50">Pages</a>
            </li>
            <li className="text-sm pl-2 capitalize leading-normal before:float-left before:pr-2 before:content-['/']">
              {currentPathRoute}
            </li>
          </ol>
          <h6 className="mb-0 text-lg font-bold capitalize">
            {currentPathPage ? currentPathPage : currentPathRoute}
          </h6>
        </nav>

        <section className="flex justify-center items-center gap-1 lg:gap-2">
          <FaBell className="w-5 h-5" />
          <ModeToggle />
          <UserButton />
        </section>
      </header>
    </>
  );
}
