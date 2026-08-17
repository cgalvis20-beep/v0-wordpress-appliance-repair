/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
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
