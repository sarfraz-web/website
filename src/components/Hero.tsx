import { Button } from "@/components/ui/button";
import { BrainCircuit, Network } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// import { TrustedByBanner } from "./TrustedByBanner";

export function Hero() {
  return (
    <div className="relative isolate pt-14">
      {/* Background gradient - Made responsive */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36rem] -translate-x-1/6 rotate-[40deg] bg-gradient-to-tr from-[#FF4D9E] to-[#A349E5] opacity-77 sm:left-[calc(50%-35rem)] sm:w-[80rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      {/* Main content container - Adjusted padding for different screens */}
      <div className="py-12 sm:py-20 lg:py-32 mt-5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            {/* Announcement banner - Made responsive */}
            <div className="mb-6 sm:mb-8 flex justify-center px-2">
              <div className="relative rounded-full px-2 py-1 text-xs sm:text-sm leading-6 text-muted-foreground ring-1 ring-gray-900/50 hover:ring-gray-900/5 bg-white/300 backdrop-blur-md shadow-lg overflow-hidden text-white">
                <span className="hidden sm:inline">Announcing our next-gen AI platform.</span>
                <span className="inline sm:hidden">New AI platform announced!</span>{" "}
                <a href="/announcement" className="font-semibold text-primary relative inline-flex items-center">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Read more <span aria-hidden="true" className="ml-1">&rarr;</span>
                  <div className="shine absolute inset-0 bg-gradient-to-r from-transparent to-white opacity-30 transform -rotate-45 animate-shine"></div>
                </a>
              </div>
            </div>

            {/* Main heading section - Responsive typography and spacing */}
            <div className="flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, scale: 1.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="w-full px-4 sm:px-0"
              >
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-center text-white">
                  Unlock The Power of AI For{" "}
                  <br className="hidden sm:block" />
                  <TypeAnimation
                    sequence={[
                      "BUSINESS",
                      1500,
                      "DEVELOPERS",
                      1000,
                      "END-USER",
                      1000,
                      "EVERYONE",
                      1500,
                    ]}
                    wrapper="span"
                    speed={45}
                    repeat={Infinity}
                  />
                </h1>
              </motion.div>
            </div>

            {/* Description text - Responsive sizing */}
            <p className="mt-6 text-base sm:text-lg leading-8 text-muted-foreground px-4 sm:px-0">
              Transform the way you work with cutting-edge AI solutions designed to streamline operations, enhance decision-making, and drive growth.
            </p>

            {/* Action buttons - Responsive layout */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6 px-4">
              <Link to="https://sear-frontend.vercel.app/" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto gap-2 bg-primary hover:bg-primary/10 glow-transition">
                  <BrainCircuit className="h-5 w-5" />
                  S.E.A.R
                </Button>
              </Link>
              <Link to="https://maintanencepage.vercel.app/" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-secondary hover:bg-secondary/10 text-white">
                  <Network className="h-5 w-5 mr-3" />
                  Demo
                </Button>
              </Link>
            </div>
          </div>

          {/* Trusted by banner and screenshot - Responsive spacing */}
          {/* <div className="mt-16 sm:mt-24">
            <TrustedByBanner />
          </div> */}
          
          {/* Screenshot container - Responsive sizing and padding */}
          {/* <div className="mt-8 sm:mt-16 flex justify-center">
            <div className="relative w-full max-w-[996px] rounded-xl bg-gradient-to-r from-secondary/5 to-primary/5 p-2 sm:p-4 ring-1 ring-inset ring-gray-900/10">
              <img
                src="/products/chat.png"
                alt="App screenshot"
                className="rounded-md shadow-2xl ring-1 ring-gray-900/10 w-full h-auto object-contain"
              />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}