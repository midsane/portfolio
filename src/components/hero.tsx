import { Button } from "@/components/ui/button";
import isagiClean from "/isagiclean.jpg"
import { useState } from "react";
export const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 md:px-6 relative text-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-70" />
      <div className="flex gap-5 justify-center items-end" >
        <div className="w-20 dark:border dark:border-chart-4">
          <img src={isagiClean} alt="midsane" className={`${loaded ? "blur-0" : "blur-sm animate-pulse"}`} onLoad={() => setLoaded(true)} />
        </div>
        <p>midsane</p>
      </div>
      <br />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Main Heading */}
        <h1 className="text-3xl  tracking-tighter sm:text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-10 sm:mb-12 text-foreground">
          I Create AI Websites<br />
          End To End<br />
          Full Stack + GenAI
        </h1>


        {/* CTA Button */}
        <Button
          variant="outline"
          onClick={() => window.scrollTo({ top: document.getElementById("projects")?.offsetTop || 0, behavior: "smooth" })}
          className=" transition-all cursor-pointer duration-300 px-6 py-2 sm:px-8 sm:py-3 rounded-full text-xs sm:text-sm font-medium"
        >
          View my work
        </Button>
      </div>

      {/* Bottom text */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2">
        <p className="text-muted-foreground text-xs sm:text-sm">@no_more_mid</p>
      </div>
    </section>

  );
};
