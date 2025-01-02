import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Users, Calendar } from "lucide-react";

export function JobPage() {
    return (
        <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20 lg:py-24">
            {/* Header Section */}
            <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 lg:mb-16">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">Join Our Family</h1>
                <p className="text-base sm:text-lg text-muted-foreground">
                    We're hiring passionate and innovative individuals to help us shape the future of AI. <br className="hidden sm:block" />
                    Check out our open positions below!
                </p>
            </div>

            {/* Jobs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                {/* Software Engineer */}
                <Card className="group transition-all duration-300 hover:shadow-lg">
                    <CardContent className="p-4 sm:p-6">
                        <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                            <Briefcase className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                            <h3 className="text-lg sm:text-xl font-semibold group-hover:text-primary transition-colors">
                                Software Engineer
                            </h3>
                        </div>
                        <p className="text-sm sm:text-base text-muted-foreground mb-4">
                            We're looking for a Software Engineer with experience in AI technologies. Join us and help build innovative AI solutions!
                        </p>
                        <div className="space-y-2">
                            <div className="flex items-center gap-3">
                                <Users className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
                                <span className="text-sm sm:text-base text-muted-foreground">Engineering Team</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
                                <span className="text-sm sm:text-base text-muted-foreground">Contract</span>
                            </div>
                        </div>
                        <p className="mt-4 text-sm sm:text-base text-muted-foreground line-through">
                            Apply Now
                        </p>
                    </CardContent>
                </Card>

                {/* Product Manager */}
                <Card className="group transition-all duration-300 hover:shadow-lg">
                    <CardContent className="p-4 sm:p-6">
                        <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                            <Briefcase className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                            <h3 className="text-lg sm:text-xl font-semibold group-hover:text-primary transition-colors">
                                Product Manager
                            </h3>
                        </div>
                        <p className="text-sm sm:text-base text-muted-foreground mb-4">
                            We need a Product Manager to lead our AI product development. If you have a strong understanding of AI and product strategy, we'd love to meet you.
                        </p>
                        <div className="space-y-2">
                            <div className="flex items-center gap-3">
                                <Users className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
                                <span className="text-sm sm:text-base text-muted-foreground">Product Team</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
                                <span className="text-sm sm:text-base text-muted-foreground">Part-Time</span>
                            </div>
                        </div>
                        <p className="mt-4 text-sm sm:text-base text-muted-foreground line-through">
                            Apply Now
                        </p>
                    </CardContent>
                </Card>

                {/* Marketing Specialist */}
                <Card className="group transition-all duration-300 hover:shadow-lg">
                    <CardContent className="p-4 sm:p-6">
                        <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                            <Briefcase className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                            <h3 className="text-lg sm:text-xl font-semibold group-hover:text-primary transition-colors">
                                Marketing Specialist
                            </h3>
                        </div>
                        <p className="text-sm sm:text-base text-muted-foreground mb-4">
                            We're looking for a Marketing Specialist to drive growth for AIVOLVE. Help us take our innovative AI solutions to the next level.
                        </p>
                        <div className="space-y-2">
                            <div className="flex items-center gap-3">
                                <Users className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
                                <span className="text-sm sm:text-base text-muted-foreground">Marketing Team</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
                                <span className="text-sm sm:text-base text-muted-foreground">Volunteer</span>
                            </div>
                        </div>
                        <p className="mt-4 text-sm sm:text-base text-muted-foreground line-through">
                            Apply Now
                        </p>
                    </CardContent>
                </Card>

                {/* Platform Architect */}
                <Card className="group transition-all duration-300 hover:shadow-lg">
                    <CardContent className="p-4 sm:p-6">
                        <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                            <Briefcase className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                            <h3 className="text-lg sm:text-xl font-semibold group-hover:text-primary transition-colors">
                                Platform Architect
                            </h3>
                        </div>
                        <p className="text-sm sm:text-base text-muted-foreground mb-4">
                            We need a Platform Architect to lead our AI product architecture development. If you have a strong understanding of AI architecture, we'd love to meet you.
                        </p>
                        <div className="space-y-2">
                            <div className="flex items-center gap-3">
                                <Users className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
                                <span className="text-sm sm:text-base text-muted-foreground">Architecture & Backend Team</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
                                <span className="text-sm sm:text-base text-muted-foreground">Volunteer</span>
                            </div>
                        </div>
                        <p className="mt-4 text-sm sm:text-base text-muted-foreground line-through">
                            Apply Now
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}