// middleware.ts
import { withAuth } from "@auth0/nextjs-auth0/edge";
import { NextResponse } from "next/server";

export default withAuth(
    function middleware(req) {
        return NextResponse.next();
    },
    {
        callbacks: {
            authorized: (req) => {
                // 允许访问的路径
                const url = req.nextUrl.clone();
                const path = req.nextUrl.pathname;
                // 不需要保护的路径
                if (path.startsWith("/api/auth") || path === "/") {
                    return true;
                }
                // 保护 /dashboard 路径
                if (path.startsWith("/dashboard")) {
                    return !!req.nextUrl.searchParams.get("user"); // 简单示例，实际应检查会话
                }
                return true;
            },
        },
    },
);

export const config = {
    matcher: ["/dashboard/:path*"],
};
