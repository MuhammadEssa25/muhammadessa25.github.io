/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export
  output: 'export',

  // For GitHub Pages — make sure assets are loaded correctly
  basePath: '/muhammadessa25.github.io',
  assetPrefix: '/muhammadessa25.github.io/',

  images: {
    unoptimized: true, // Needed because GitHub Pages doesn't support Image Optimization
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
