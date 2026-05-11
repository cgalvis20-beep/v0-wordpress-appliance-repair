import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { blogPosts } from "@/lib/data/blog-posts"
import { companyInfo } from "@/lib/data/company-info"
import { Breadcrumbs } from "@/components/shared/breadcrumbs"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Calendar,
  User,
  ArrowLeft,
  ArrowRight,
  Phone,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react"

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: post.title,
    description: post.metaDescription,
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.publishedDate,
      authors: [post.author],
    },
  }
}

// Simple markdown-like content renderer
function renderContent(content: string) {
  const lines = content.split("\n")
  const elements: React.ReactNode[] = []
  let currentList: string[] = []
  let key = 0

  const flushList = () => {
    if (currentList.length > 0) {
      elements.push(
        <ul key={key++} className="my-4 space-y-2 list-none">
          {currentList.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-muted-foreground">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
              <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>') }} />
            </li>
          ))}
        </ul>
      )
      currentList = []
    }
  }

  for (const line of lines) {
    const trimmedLine = line.trim()
    
    if (trimmedLine === "") {
      flushList()
      continue
    }

    // H2 heading
    if (trimmedLine.startsWith("## ")) {
      flushList()
      elements.push(
        <h2 key={key++} className="mt-8 mb-4 text-2xl font-bold text-foreground">
          {trimmedLine.slice(3)}
        </h2>
      )
      continue
    }

    // Bullet point
    if (trimmedLine.startsWith("- ")) {
      currentList.push(trimmedLine.slice(2))
      continue
    }

    // Regular paragraph
    flushList()
    elements.push(
      <p 
        key={key++} 
        className="my-4 text-muted-foreground leading-relaxed"
        dangerouslySetInnerHTML={{ 
          __html: trimmedLine.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>') 
        }}
      />
    )
  }

  flushList()
  return elements
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  // Get related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.slug !== slug)
    .slice(0, 3)

  // Get previous and next posts
  const currentIndex = blogPosts.findIndex((p) => p.slug === slug)
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: "Blog", href: "/blog" },
              { label: post.title },
            ]}
            className="mb-6 text-primary-foreground/80"
          />
          <div className="mx-auto max-w-3xl">
            <Badge className="mb-4 bg-accent text-accent-foreground">
              {post.category}
            </Badge>
            <h1 className="mb-6 text-3xl font-bold tracking-tight text-primary-foreground lg:text-4xl xl:text-5xl text-balance">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-primary-foreground/80">
              <span className="flex items-center gap-2">
                <User className="h-4 w-4" />
                {post.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {post.publishedDate}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            {/* Featured Image */}
            {post.image && (
              <div className="mb-8 overflow-hidden rounded-xl">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={800}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            )}
            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              {renderContent(post.content)}
            </div>

            {/* CTA Box */}
            <div className="my-12 rounded-xl bg-primary p-8 text-center">
              <h3 className="mb-3 text-2xl font-bold text-primary-foreground">
                Need Professional Help?
              </h3>
              <p className="mb-6 text-primary-foreground/90">
                If you&apos;re experiencing appliance issues, our certified technicians are here to help.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  <Link href="/booking">Book a Repair</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-foreground/30 bg-background text-foreground hover:bg-background/90"
                >
                  <a href={`tel:${companyInfo.phoneClean}`}>
                    <Phone className="mr-2 h-4 w-4" />
                    {companyInfo.phone}
                  </a>
                </Button>
              </div>
            </div>

            {/* Share Buttons */}
            <div className="mb-12 flex items-center gap-4">
              <span className="flex items-center gap-2 font-semibold text-foreground">
                <Share2 className="h-4 w-4" />
                Share this article:
              </span>
              <div className="flex gap-2">
                <Button size="icon" variant="outline" asChild>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://myappliancepro.ca/blog/${post.slug}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on Facebook"
                  >
                    <Facebook className="h-4 w-4" />
                  </a>
                </Button>
                <Button size="icon" variant="outline" asChild>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(`https://myappliancepro.ca/blog/${post.slug}`)}&text=${encodeURIComponent(post.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on Twitter"
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                </Button>
                <Button size="icon" variant="outline" asChild>
                  <a
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(`https://myappliancepro.ca/blog/${post.slug}`)}&title=${encodeURIComponent(post.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on LinkedIn"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Post Navigation */}
            <div className="flex flex-col gap-4 border-t border-b border-border py-8 sm:flex-row sm:justify-between">
              {prevPost ? (
                <Link
                  href={`/blog/${prevPost.slug}`}
                  className="group flex items-center gap-2 text-muted-foreground hover:text-primary"
                >
                  <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                  <div>
                    <p className="text-xs uppercase tracking-wide">Previous</p>
                    <p className="font-medium line-clamp-1">{prevPost.title}</p>
                  </div>
                </Link>
              ) : (
                <div />
              )}
              {nextPost ? (
                <Link
                  href={`/blog/${nextPost.slug}`}
                  className="group flex items-center gap-2 text-right text-muted-foreground hover:text-primary"
                >
                  <div>
                    <p className="text-xs uppercase tracking-wide">Next</p>
                    <p className="font-medium line-clamp-1">{nextPost.title}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-secondary py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-2xl font-bold text-foreground">
              Related Articles
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`}>
                  <Card className="group h-full transition-all hover:shadow-lg hover:border-primary/50">
                    <CardContent className="p-6">
                      <Badge variant="secondary" className="mb-3">
                        {relatedPost.category}
                      </Badge>
                      <h3 className="mb-3 text-lg font-semibold text-foreground group-hover:text-primary line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="mb-4 text-sm text-muted-foreground line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.metaDescription,
            author: {
              "@type": "Person",
              name: post.author,
            },
            publisher: {
              "@type": "Organization",
              name: companyInfo.name,
            },
            datePublished: post.publishedDate,
            dateModified: post.publishedDate,
          }),
        }}
      />
    </div>
  )
}
