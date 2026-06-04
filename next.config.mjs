import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: projectRoot,
  skipTrailingSlashRedirect: true,
  images: {
    formats: ["image/avif", "image/webp"]
  },
  async redirects() {
    return [
      {
        source: "/about",
        destination: "/",
        permanent: true
      },
      {
        source: "/about/",
        destination: "/",
        permanent: true
      },
      {
        source: "/contact/",
        destination: "/contact",
        permanent: true
      },
      {
        source: "/menu-arabian-restaurant-lucknow",
        destination: "/menu",
        permanent: true
      },
      {
        source: "/menu-arabian-restaurant-lucknow/",
        destination: "/menu",
        permanent: true
      },
      {
        source: "/reservations",
        destination: "/contact",
        permanent: true
      },
      {
        source: "/reservations/",
        destination: "/contact",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
