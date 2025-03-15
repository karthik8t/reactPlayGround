import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    output: "export",   // Enables static export
    basePath: "/reactPlayGround/tenzies", // Sets the correct subpath
    assetPrefix: "/reactPlayGround/tenzies/", // Ensures assets load correctly
    images: {
        unoptimized: true, // Fixes issues with Next.js images on static export
    },
  /* config options here */
    serverRuntimeConfig: {
        PROJECT_ROOT: __dirname
    }
};

export default nextConfig;
