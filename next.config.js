/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
  async redirects() {
    return [
      {
        source: "/canceled",
        destination: "/store",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
