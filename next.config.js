/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  poweredByHeader: false,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/u,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
