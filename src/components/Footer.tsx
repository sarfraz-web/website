import { Instagram, Linkedin, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container px-4 py-6 sm:py-8 md:py-12 mx-auto">
        <div className="grid grid-cols-3 md:grid-cols-4 gap-6 md:gap-8">
          {/* Logo and Social Links - Hidden on mobile */}
          <div className="hidden md:flex flex-col items-left space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">AIVOLVE</h2>
            <div className="flex item-start ">
              <a
                href="https://instagram.com/aivolve"
                className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-muted/10"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a
                href="https://linkedin.com/company/aievolve"
                className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-muted/10"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a
                href="https://github.com/TECH-AIVOLVE"
                className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-muted/10"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div className="flex flex-col items-start">
            <h3 className="font-semibold mb-3 sm:mb-4 text-white text-base sm:text-lg">Products</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a
                  href="https://backdrop-ai-one.vercel.app/"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Backrop AI
                </a>
              </li>
              <li>
                <a
                  href="https://sear-frontend.vercel.app/"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  S.E.A.R
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  AI Agents
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="flex flex-col items-start">
            <h3 className="font-semibold mb-3 sm:mb-4 text-white text-base sm:text-lg">Company</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a
                  href="/blog"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/aievolve/jobs/"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="/jobs"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Jobs
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="flex flex-col items-start">
            <h3 className="font-semibold mb-3 sm:mb-4 text-white text-base sm:text-lg">Legal</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a
                  href="/about"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright with Border */}
      <div className="border-t border-gray-400 opacity-75 sm:border-opacity-100 sm:border-gray-300 mt-6 sm:mt-8 pt-4 sm:pt-4 text-center">
        <p className="text-xs sm:text-sm text-muted-foreground mb-2 sm:mb">
          &copy; {new Date().getFullYear()} AIVOLVE. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;