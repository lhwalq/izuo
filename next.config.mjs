/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/zh",
        destination: "/",
        permanent: true, // 设为 true 表示这是一个永久重定向，设为 false 表示临时重定向
      },
    ];
  },
};

export default nextConfig;
