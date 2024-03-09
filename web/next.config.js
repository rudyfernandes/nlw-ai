/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: 
            ['avatars.githubusercontent.com', 'localhost']
        // remotePatterns: [
        //     {
        //       protocol: 'https',
        //       hostname: 'avatars.githubusercontent.com',
        //     //   port: '',
        //     //   pathname: '/account123/**',
        //     },
        // ]
    }
};

module.exports = nextConfig;
