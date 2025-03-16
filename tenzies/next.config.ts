import type {NextConfig} from "next";


const isProd = process.env.NODE_ENV === 'production';
const nextConfig: NextConfig = {
    reactStrictMode: true,
    output: "export",   // Enables static export
    assetPrefix: isProd ? '/reactPlayGround/' : '',
    basePath: isProd ? '/reactPlayGround' : '',
    images: {
        unoptimized: true, // Fixes issues with Next.js images on static export
    },
};

export default nextConfig;
