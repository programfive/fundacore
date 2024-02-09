import Image from "next/image";
import { roboto } from "@/fonts";
import { cn } from "@/lib/utils";


export function WelcomeSection() {
  return (
    <section className="hidden px-6 h-full lg:flex flex-col items-center justify-center gap-y-5 bg-gradient-to-l from-electric-violet-600  to-electric-violet-700 shadow-2xl rounded-2xl">
      <div className="relative w-96 h-96">
        <Image src="/auth/wallpaper.svg" alt="Wallpaper" fill />
      </div>
      <div className=" text-electric-violet-300 text-start text-lg">
        <h3
          className={cn(
            "text-electric-violet-50 text-4xl xl:text-5xl font-bold mb-5 tracking-wide",
            roboto.className
          )}
        >
          Welcome <br /> to our administration hub!
        </h3>
        <p>
          Join today and discover the ease of smart management without the
          hassle. Simplify your administrative experience with us!
        </p>
      </div>
    </section>
  );
}
