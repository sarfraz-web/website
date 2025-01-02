import { Instagram, Linkedin, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container px-4 py-6 sm:py-8 md:py-12 mx-auto">
        {/* Main footer content */}
        <div className="flex flex-row md:grid md:grid-cols-4 gap-6 md:gap-8 overflow-x-auto pb-4 md:pb-0">
          {/* Logo and Social Links */}
          <div className="flex-shrink-0 min-w-[200px] flex flex-col items-center md:items-start space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">AIVOLVE</h2>
            <div className="flex space-x-4">
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
          <div className="flex-shrink-0 min-w-[150px] flex flex-col items-center md:items-start">
            <h3 className="font-semibold mb-3 sm:mb-4 text-white text-base sm:text-lg">Products</h3>
            <ul className="space-y-2 sm:space-y-3 text-center md:text-left">
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
          <div className="flex-shrink-0 min-w-[150px] flex flex-col items-center md:items-start">
            <h3 className="font-semibold mb-3 sm:mb-4 text-white text-base sm:text-lg">Company</h3>
            <ul className="space-y-2 sm:space-y-3 text-center md:text-left">
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
          <div className="flex-shrink-0 min-w-[150px] flex flex-col items-center md:items-start">
            <h3 className="font-semibold mb-3 sm:mb-4 text-white text-base sm:text-lg">Legal</h3>
            <ul className="space-y-2 sm:space-y-3 text-center md:text-left">
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
      <div className="border-t mt-6 sm:mt-8 pt-4 sm:pt-8 text-center">
        <p className="text-xs sm:text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} AIVOLVE. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
