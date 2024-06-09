/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_LOCAL_API_BASE_URL: "http://localhost:3001",
    NEXT_PUBLIC_API_BASE_URL: "https://www.bbqr.site",
  },
  rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/api/sitemap.xml",
      },
      // Include other rewrites here if necessary
    ];
  },
};

module.exports = nextConfig;

// Injected content via Sentry wizard below
