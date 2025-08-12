/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/**",
      },
    ],
  },
  webpack: (config, { isServer }) => {
    // Handle Sanity Studio vendor chunks and exclude native modules
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        path: false,
        crypto: false,
      };

      // Exclude native modules from client bundle
      config.externals = config.externals || [];
      config.externals.push("argon2", "@mapbox/node-pre-gyp");
    }

    // Optimize Sanity chunks
    config.optimization = {
      ...config.optimization,
      splitChunks: {
        ...config.optimization.splitChunks,
        cacheGroups: {
          ...config.optimization.splitChunks?.cacheGroups,
          sanity: {
            test: /[\\/]node_modules[\\/](@sanity|sanity)[\\/]/,
            name: "sanity",
            chunks: "all",
            priority: 10,
          },
        },
      },
    };

    return config;
  },
};

export default nextConfig;
