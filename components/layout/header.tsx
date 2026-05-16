"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Phone, Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { companyInfo } from "@/lib/data/company-info"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "Services",
    href: "/services",
    children: [
      { name: "Refrigerator Repair", href: "/services/refrigerator-repair" },
      { name: "Washer Repair", href: "/services/washer-repair" },
      { name: "Dryer Repair", href: "/services/dryer-repair" },
      { name: "Dishwasher Repair", href: "/services/dishwasher-repair" },
      { name: "Oven Repair", href: "/services/oven-repair" },
      { name: "Stove Repair", href: "/services/stove-repair" },
      { name: "View All Services", href: "/services" },
    ],
  },
  {
    name: "Locations",
    href: "/locations",
    children: [
      { name: "London", href: "/locations/london" },
      { name: "St. Thomas", href: "/locations/st-thomas" },
      { name: "Woodstock", href: "/locations/woodstock" },
      { name: "Strathroy", href: "/locations/strathroy" },
      { name: "View All Locations", href: "/locations" },
    ],
  },
  { name: "Brands", href: "/brands" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      {/* Top bar with phone */}
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-10 items-center justify-between text-sm">
            <p className="hidden sm:block">
              Serving London &amp; Surrounding Areas
            </p>
            <a
              href={`tel:${companyInfo.phoneClean}`}
              className="flex items-center gap-2 font-semibold hover:underline"
            >
              <Phone className="h-4 w-4" />
              {companyInfo.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.jpg"
              alt={companyInfo.name}
              width={234}
              height={65}
              className="h-16 w-auto"
              priority
            />
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() =>
                  item.children && setOpenDropdown(item.name)
                }
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted"
                  )}
                >
                  {item.name}
                  {item.children && <ChevronDown className="h-4 w-4" />}
                </Link>

                {/* Dropdown */}
                {item.children && openDropdown === item.name && (
                  <div className="absolute left-0 top-full z-50 mt-1 w-56 rounded-lg bg-popover p-2 shadow-lg border border-border">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex lg:items-center lg:gap-3">
            <Button variant="outline" asChild>
              <a href={`tel:${companyInfo.phoneClean}`}>
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </a>
            </Button>
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/booking">Book Online</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 text-muted-foreground hover:text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Toggle menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border py-4">
            <div className="space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.children && (
                    <div className="ml-4 space-y-1">
                      {item.children.slice(0, -1).map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-md"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-4 flex flex-col gap-2 px-3">
              <Button variant="outline" asChild className="w-full">
                <a href={`tel:${companyInfo.phoneClean}`}>
                  <Phone className="h-4 w-4 mr-2" />
                  Call {companyInfo.phone}
                </a>
              </Button>
              <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/booking" onClick={() => setMobileMenuOpen(false)}>
                  Book Online
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
