import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { blogPosts } from "@/lib/data/blog-posts"
import { companyInfo } from "@/lib/data/company-info"
import { Breadcrumbs } from "@/components/shared/breadcrumbs"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight, User } from "lucide-react"

export const metadata: Metadata = {
  title: "Appliance Repair Tips & Guides",
  description: `Expert appliance repair tips, maintenance guides, and troubleshooting advice from ${companyInfo.name}. Learn how to extend the life of your appliances.`,
  alternates: {
    canonical: '/blog',
  },
}

export default function BlogPage() {
  const featuredPost = blogPosts[0]
  const recentPosts = blogPosts.slice(1)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[{ label: "Blog" }]}
            className="mb-6 text-primary-foreground/80"
          />
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-primary-foreground lg:text-5xl">
              Appliance Repair Tips & Guides
            </h1>
            <p className="text-lg text-primary-foreground/90 lg:text-xl">
              Expert advice to help you maintain your appliances and know when to call a professional.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-2xl font-bold text-foreground">Featured Article</h2>
          <Link href={`/blog/${featuredPost.slug}`}>
            <Card className="group overflow-hidden transition-all hover:shadow-lg">
              <div className="grid lg:grid-cols-2">
                <div className="aspect-video bg-secondary lg:aspect-auto relative overflow-hidden">
                  {featuredPost.image ? (
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.imageAlt || featuredPost.title}
                      fill
                      className="object-cover"
                      priority
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <span className="text-6xl text-muted-foreground/30">
                        {featuredPost.category === "Maintenance" ? "🔧" : "💡"}
                      </span>
                    </div>
                  )}
                </div>
                <CardContent className="flex flex-col justify-center p-8">
                  <Badge className="mb-4 w-fit">{featuredPost.category}</Badge>
                  <h3 className="mb-4 text-2xl font-bold text-foreground group-hover:text-primary lg:text-3xl">
                    {featuredPost.title}
                  </h3>
                  <p className="mb-6 text-muted-foreground line-clamp-3">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {featuredPost.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {featuredPost.publishedDate}
                    </span>
                    
                  </div>
                </CardContent>
              </div>
            </Card>
          </Link>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-2xl font-bold text-foreground">Recent Articles</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {recentPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card className="group h-full overflow-hidden transition-all hover:shadow-lg hover:border-primary/50">
                  <div className="aspect-video bg-muted relative overflow-hidden">
                    {post.image ? (
                      <Image
                        src={post.image}
                        alt={post.imageAlt || post.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center">
                        <span className="text-4xl text-muted-foreground/30">
                          {post.category === "Maintenance" ? "🔧" : post.category === "Troubleshooting" ? "🔍" : "💡"}
                        </span>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <Badge variant="secondary" className="mb-3">
                      {post.category}
                    </Badge>
                    <h3 className="mb-3 text-xl font-semibold text-foreground group-hover:text-primary line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="mb-4 text-sm text-muted-foreground line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {post.publishedDate}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-2xl font-bold text-foreground">Browse by Category</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {["Maintenance Tips", "Tips & Advice", "Repair Guides"].map((category) => {
              const count = blogPosts.filter((p) => p.category === category).length
              return (
                <Card
                  key={category}
                  className="group cursor-pointer transition-all hover:shadow-md hover:border-primary/50"
                >
                  <CardContent className="flex items-center justify-between p-6">
                    <div>
                      <h3 className="font-semibold text-foreground group-hover:text-primary">
                        {category}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {count} {count === 1 ? "article" : "articles"}
                      </p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-primary py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-primary-foreground">
            Get Appliance Tips in Your Inbox
          </h2>
          <p className="mb-8 text-lg text-primary-foreground/90">
            Subscribe for maintenance tips, troubleshooting guides, and exclusive offers.
          </p>
          <form className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-lg border-0 bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button
              type="submit"
              className="rounded-lg bg-accent px-6 py-3 font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
