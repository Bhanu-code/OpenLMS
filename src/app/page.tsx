import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center justify-center w-full min-h-[calc(100vh-64px)]">
        <div className="px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              {/* add this component from magic ui (install shadcn ui first) */}
              <AnimatedGradientText>
                🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
                <span
                  className={cn(
                    `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
                  )}
                >
                  Introducing OpenLMS
                </span>
                <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </AnimatedGradientText>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none  bg-gradient-to-b from-[#000000]  to-[#474747] bg-clip-text text-transparent">
                Welcome to OpenSMP
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 text-sm">
                The mordern open-source learning management system that empowers educational institutions to streamline their operations and enhance student experiences.
              </p>
            </div>
            <div className="space-x-4">
              <Button>Get Started</Button>
              <Button variant="outline">Learn More</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
