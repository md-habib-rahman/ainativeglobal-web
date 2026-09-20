


import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "res.cloudinary.com",
				pathname: "/**", // Allows all image paths from this specific domain
			}, {
				protocol: "https",
				hostname: "i.pravatar.cc",
				pathname: "/**", // Allows all image paths from this specific domain
			}, {
				protocol: "https",
				hostname: "i.ibb.co.com",
				pathname: "/**", // Allows all image paths from this specific domain
			}, {
				protocol: "https",
				hostname: "images.unsplash.com",
				pathname: "/**", // Allows all image paths from this specific domain
			},
		],
	},
};

export default nextConfig;