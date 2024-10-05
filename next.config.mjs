/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    loader: "akamai",
    path: "https://wenjebs.github.io/personal-website/",
  },
};

export default nextConfig;
