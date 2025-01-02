import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from "date-fns";

const posts = [
  {
    id: 1,
    title: "Introducing Our Next-Gen AI Platform",
    excerpt: "Today, we're excited to announce the launch of our next-generation AI platform, bringing unprecedented capabilities to businesses worldwide.",
    date: new Date("2024-03-01"),
    author: "Sarah Johnson",
    category: "Product Updates",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60"  // Using placeholder image as per requirements
  },
  {
    id: 2,
    title: "The Future of AI in Enterprise",
    excerpt: "Explore how artificial intelligence is transforming enterprise operations and what the future holds for businesses adopting AI technologies.",
    date: new Date("2024-02-28"),
    author: "Michael Chen",
    category: "Industry Insights",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 3,
    title: "Best Practices for AI Model Training",
    excerpt: "Learn the essential best practices for training AI models that deliver accurate and reliable results for your specific use case.",
    date: new Date("2024-02-25"),
    author: "Dr. Emily Roberts",
    category: "Technical Guides",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60"
  }
];

export function Blog() {
  return (
    <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">Blog</h1>
          <p className="text-base sm:text-lg text-muted-foreground">
            Insights, updates, and guides from our team of AI experts
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid gap-6 sm:gap-8">
          {posts.map((post) => (
            <Card 
              key={post.id} 
              className="overflow-hidden group hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-video relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                  <span className="px-2 sm:px-3 py-1 bg-primary/90 text-primary-foreground rounded-full text-xs sm:text-sm">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <CardHeader className="p-4 sm:p-6">
                <div className="space-y-1 sm:space-y-2">
                  <CardTitle className="text-xl sm:text-2xl group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    By {post.author} • {format(post.date, 'MMMM d, yyyy')}
                  </p>
                </div>
              </CardHeader>

              <CardContent className="p-4 sm:p-6 pt-0 sm:pt-0">
                <p className="text-sm sm:text-base text-muted-foreground">
                  {post.excerpt}
                </p>
                <button className="mt-3 sm:mt-4 text-primary font-semibold hover:text-primary/80 transition-colors text-sm sm:text-base">
                  Read More →
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}