import type { MetadataRoute } from "next"
import { services } from "@/lib/data/services"
import { cities } from "@/lib/data/cities"
import { brands } from "@/lib/data/brands"
import { blogPosts } from "@/lib/data/blog-posts"
import { serviceCityPages } from "@/lib/data/service-city-pages"
import { brandIssuePages } from "@/lib/data/brand-issue-pages"

const baseUrl = "https://myappliancepro.ca"

// Real last-edit dates for pages that don't have per-entry content data.
// Update the relevant date below when you actually edit that page's content —
// don't replace this with new Date(), which stamps every page as "modified
// today" on every single build regardless of whether anything changed.
const STATIC_PAGE_DATES = {
  home: "2026-08-07",
  services: "2026-08-07",
  locations: "2026-08-07",
  brands: "2026-05-11",
  booking: "2026-08-07",
  contact: "2026-08-07",
  about: "2026-08-07",
  faq: "2026-08-09",
  privacy: "2026-08-07",
  terms: "2026-08-09",
  diagnosticFee: "2026-08-09",
  emergencyRepair: "2026-08-09",
  reviews: "2026-08-09",
}

// Fallback last-edit dates for the dynamic collections. Individual entries can
// override these by setting their own `lastUpdated` field in the data files.
const COLLECTION_DEFAULT_DATES = {
  services: "2026-08-07",
  locations: "2026-08-07",
  brands: "2026-05-11",
}

export default function sitemap(): MetadataRoute.Sitemap {
  // Freshest blog post date drives the /blog hub's lastModified signal.
  const latestBlogDate = blogPosts.reduce((latest, post) => {
    const postDate = new Date(post.publishedDate)
    return postDate > latest ? postDate : latest
  }, new Date(0))

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(STATIC_PAGE_DATES.home),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(STATIC_PAGE_DATES.services),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/locations`,
      lastModified: new Date(STATIC_PAGE_DATES.locations),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/brands`,
      lastModified: new Date(STATIC_PAGE_DATES.brands),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/booking`,
      lastModified: new Date(STATIC_PAGE_DATES.booking),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(STATIC_PAGE_DATES.contact),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(STATIC_PAGE_DATES.about),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(STATIC_PAGE_DATES.faq),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/diagnostic-fee`,
      lastModified: new Date(STATIC_PAGE_DATES.diagnosticFee),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/emergency-repair`,
      lastModified: new Date(STATIC_PAGE_DATES.emergencyRepair),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/reviews`,
      lastModified: new Date(STATIC_PAGE_DATES.reviews),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: latestBlogDate,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(STATIC_PAGE_DATES.privacy),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(STATIC_PAGE_DATES.terms),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ]

  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(service.lastUpdated ?? COLLECTION_DEFAULT_DATES.services),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  const locationPages: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${baseUrl}/locations/${city.slug}`,
    lastModified: new Date(city.lastUpdated ?? COLLECTION_DEFAULT_DATES.locations),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  const brandPages: MetadataRoute.Sitemap = brands.map((brand) => ({
    url: `${baseUrl}/brands/${brand.slug}`,
    lastModified: new Date(brand.lastUpdated ?? COLLECTION_DEFAULT_DATES.brands),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedDate),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  const serviceCityPagesSitemap: MetadataRoute.Sitemap = serviceCityPages.map(
    (p) => ({
      url: `${baseUrl}/services/${p.serviceSlug}/${p.citySlug}`,
      lastModified: new Date(p.lastUpdated),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })
  )

  const brandIssuePagesSitemap: MetadataRoute.Sitemap = brandIssuePages.map(
    (p) => ({
      url: `${baseUrl}/brands/${p.brandSlug}/${p.issueSlug}`,
      lastModified: new Date(p.lastUpdated),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })
  )

  return [
    ...staticPages,
    ...servicePages,
    ...locationPages,
    ...serviceCityPagesSitemap,
    ...brandPages,
    ...brandIssuePagesSitemap,
    ...blogPages,
  ]
}
