import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Users, Microscope, Bot } from "lucide-react";

export function AnnouncementPage() {
  return (
    <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20 lg:py-24">
      {/* Header Section */}
      <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 lg:mb-16">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-white mt-10">
          Latest Announcements
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground">
          Stay updated with the latest developments, news, and milestones from AIVOLVE.
        </p>
      </div>

      {/* Announcement Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16">
        {/* BackDrop AI Card */}
        <Card className="transition-all duration-300 hover:shadow-lg">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
              <Microscope className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              <h3 className="text-lg sm:text-xl font-semibold">Introducing: BackDrop AI</h3>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground mb-3">
              Backdrop AI is a generative AI tool that effortlessly embeds customizable text into an image's background, ensuring seamless integration with advanced editing technology.
            </p>
            <a href="#" className="text-primary font-semibold hover:underline">Beta Access</a>
          </CardContent>
        </Card>

        {/* Crypto Wallet Card */}
        <Card className="transition-all duration-300 hover:shadow-lg">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
              <Microscope className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              <h3 className="text-lg sm:text-xl font-semibold">New Product Launch: AI-Powered Crypto Wallet</h3>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground mb-3">
              We're excited to announce the launch of our new crypto wallet for Web3 applications. It allows users to securely store and manage their crypto assets with advanced AI security features.
            </p>
            <a href="#" className="text-primary font-semibold hover:underline">Learn More</a>
          </CardContent>
        </Card>

        {/* AI Arsenal Card */}
        <Card className="transition-all duration-300 hover:shadow-lg">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
              <Bot className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              <h3 className="text-lg sm:text-xl font-semibold">Introducing: AI Arsenal</h3>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground">
              AI Arsenal is a versatile suite of AI tools featuring a chatbot, voice bot, and mail bot, crafted to streamline communication and automate workflows seamlessly.
            </p>
          </CardContent>
        </Card>

        {/* New Features Card */}
        <Card className="transition-all duration-300 hover:shadow-lg">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
              <Calendar className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              <h3 className="text-lg sm:text-xl font-semibold">New AI Features Unveiled</h3>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground mb-3">
              We're excited to announce the release of several new AI-driven features in our product! With enhanced functionality and smarter integrations, our latest updates take user experience to the next level.
            </p>
            <a href="#" className="text-primary font-semibold hover:underline">Explore New Features</a>
          </CardContent>
        </Card>

        {/* Hiring Card */}
        <Card className="transition-all duration-300 hover:shadow-lg">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
              <Users className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              <h3 className="text-lg sm:text-xl font-semibold">We're Hiring: Join Our Team!</h3>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground mb-3">
              AIVOLVE is growing, and we're looking for passionate individuals to join our journey in shaping the future of AI. If you're driven by innovation and thrive in dynamic environments, explore our open positions.
            </p>
            <a href="/jobs" className="text-primary font-semibold hover:underline">Apply Now</a>
          </CardContent>
        </Card>

        {/* Research Papers Card */}
        <Card className="transition-all duration-300 hover:shadow-lg">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
              <Calendar className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              <h3 className="text-lg sm:text-xl font-semibold">Research Papers Reviews</h3>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground mb-3">
              We're excited to announce the release of several new AI-driven features in our product! With enhanced functionality and smarter integrations, our latest updates take user experience to the next level.
            </p>
            <a href="https://www.linkedin.com/company/aievolve/posts/?feedView=all&viewAsMember=true" className="text-primary font-semibold hover:underline">Read Now..!</a>
          </CardContent>
        </Card>
      </div>

      {/* Previous Announcements Section */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-6 sm:mb-8 text-white">
          Previous Announcements
        </h2>
        <div className="space-y-4 sm:space-y-6">
          <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8">
            <div className="w-full space-y-4 sm:space-y-6">
              {/* Policy Update */}
              <div className="flex items-start gap-3 sm:gap-4">
                <Users className="h-5 w-5 sm:h-6 sm:w-6 text-primary mt-1" />
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">Policy Updates</h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-2">
                    Our Privacy Policy has been updated. Make sure to go through it.
                  </p>
                  <a href="/privacy" className="text-primary font-semibold hover:underline text-white">Read Privacy Policy</a>
                </div>
              </div>

              {/* Terms Update */}
              <div className="flex items-start gap-3 sm:gap-4">
                <Users className="h-5 w-5 sm:h-6 sm:w-6 text-primary mt-1" />
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">Terms of Service Update</h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-2">
                    Our Terms of Service has been updated. Make sure to go through it.
                  </p>
                  <a href="/terms" className="text-primary font-semibold hover:underline text-white">Read Terms of Service</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="max-w-3xl mx-auto mt-8 sm:mt-12 lg:mt-16 text-center">
        <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-white">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-sm sm:text-lg text-muted-foreground mb-4">
          Be the first to know about our latest updates and news. Sign up for our newsletter now!
        </p>
        <form className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-0">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-auto p-2 border rounded-md sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button className="w-full sm:w-auto bg-primary text-white px-4 py-2 rounded-md sm:rounded-l-none hover:bg-primary/90 transition-colors">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}