import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    output: "export",
    basePath: "/tenzies",
  /* config options here */
    serverRuntimeConfig: {
        PROJECT_ROOT: __dirname
    }
};

export default nextConfig;
