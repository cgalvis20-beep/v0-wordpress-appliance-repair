import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { companyInfo, serviceAreas } from "@/lib/data/company-info"

const services = [
  { name: "Refrigerator Repair", href: "/services/refrigerator-repair" },
  { name: "Washer Repair", href: "/services/washer-repair" },
  { name: "Dryer Repair", href: "/services/dryer-repair" },
  { name: "Dishwasher Repair", href: "/services/dishwasher-repair" },
  { name: "Oven Repair", href: "/services/oven-repair" },
  { name: "Stove Repair", href: "/services/stove-repair" },
]

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Our Services", href: "/services" },
  { name: "Service Areas", href: "/locations" },
  { name: "Brands We Service", href: "/brands" },
  { name: "Blog", href: "/blog" },
  { name: "Reviews", href: "/reviews" },
  { name: "Contact Us", href: "/contact" },
  { name: "Book Online", href: "/booking" },
  { name: "FAQ", href: "/faq" },
  { name: "Diagnostic Fee", href: "/diagnostic-fee" },
  { name: "Emergency Repair", href: "/emergency-repair" },
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company info */}
          <div className="space-y-4">
            <Link href="/">
              <Image
                src="/images/myappliancepro-logo.jpg"
                alt={`${companyInfo.name} logo`}
                width={234}
                height={65}
                className="h-16 w-auto bg-white rounded p-1"
              />
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              {companyInfo.description}
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-accent hover:underline text-sm font-medium"
                >
                  View All Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${companyInfo.phoneClean}`}
                  className="flex items-start gap-3 text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  <Phone className="h-4 w-4 mt-0.5 shrink-0" />
                  <span>{companyInfo.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="flex items-start gap-3 text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  <Mail className="h-4 w-4 mt-0.5 shrink-0" />
                  <span>{companyInfo.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/70 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>London, Ontario. N6C 5H5</span>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/70 text-sm">
                <Clock className="h-4 w-4 mt-0.5 shrink-0" />
                <span>
                  Mon-Fri: {companyInfo.hours.weekdays}
                  <br />
                  Sat: {companyInfo.hours.saturday}
                  <br />
                  Sun: {companyInfo.hours.sunday}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Service areas */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <h3 className="font-semibold mb-3">Service Areas</h3>
          <div className="flex flex-wrap gap-2">
            {serviceAreas.map((area) => (
              <Link
                key={area}
                href={`/locations/${area.toLowerCase().replace(/\./g, "").replace(/\s+/g, "-")}`}
                className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
              >
                {area}
                {area !== serviceAreas[serviceAreas.length - 1] && (
                  <span className="ml-2 text-primary-foreground/40">|</span>
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>
              &copy; {new Date().getFullYear()} {companyInfo.name}. All rights
              reserved.
            </p>
            <div className="flex gap-4">
              <Link href="/privacy" className="hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-accent transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
