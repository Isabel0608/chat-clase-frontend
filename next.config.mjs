/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        API_URL: "https://chat-clase-frontend-seven.vercel.app/api/chat/ "
    },
    images:{ 
        remotePatterns: {
            protocol: "https",
            hostname: "hat-clase-frontend-seven.vercel.app",
            pathname: "/media/profile_pictures/**"
        }
    }
};

export default nextConfig;
