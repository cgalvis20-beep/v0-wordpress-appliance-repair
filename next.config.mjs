/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/locations/woodstock", destination: "/locations", statusCode: 301 },
      { source: "/locations/strathroy", destination: "/locations", statusCode: 301 },
      { source: "/locations/ingersoll", destination: "/locations", statusCode: 301 },
      { source: "/locations/tillsonburg", destination: "/locations", statusCode: 301 },
      { source: "/locations/aylmer", destination: "/locations", statusCode: 301 },
      { source: "/services/dryer-repair/woodstock", destination: "/services/dryer-repair", statusCode: 301 },
      { source: "/services/dishwasher-repair/woodstock", destination: "/services/dishwasher-repair", statusCode: 301 },
      { source: "/services/refrigerator-repair/strathroy", destination: "/services/refrigerator-repair", statusCode: 301 },
      { source: "/services/oven-repair/tillsonburg", destination: "/services/oven-repair", statusCode: 301 },
      // Consolidate the www host onto the canonical apex domain so Google
      // does not treat www + non-www as duplicate content.
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.myappliancepro.ca" }],
        destination: "https://myappliancepro.ca/:path*",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
