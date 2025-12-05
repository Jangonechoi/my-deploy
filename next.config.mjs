/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    // output: 'export', => 동적페이지(ex, [boardId], SSR 등) 배포시 정적 out폴더 export 불가
};

export default nextConfig;
