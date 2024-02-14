/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_LOCAL_API_BASE_URL: "http://localhost:3002",
    NEXT_PUBLIC_API_BASE_URL: "https://bbqrki.vercel.app",
  },
};

module.exports = nextConfig;
