/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "www.shutterstock.com",
            "upload.wikimedia.org",
            "images.hdqwalls.com",
            "e1.pxfuel.com",
            "e0.pxfuel.com",
            "cdn.pixabay.com",
            "images.unsplash.com",
        ],
        remotePatterns: [{
            protocol: 'https',
            hostname: 'http://localhost:1337/api/activities',
        }, ],
    },
};

module.exports = nextConfig;