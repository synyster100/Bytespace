/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      oneOf: [
        {
          resourceQuery: /react/,
          use: [{ loader: "@svgr/webpack", options: { exportType: "named" } }],
        },
        {
          type: "asset",
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;
