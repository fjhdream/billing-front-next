// app/page.tsx
"use client";

import React from "react";
import { Button, Typography } from "@mui/material";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/navigation";

export default function Home() {
  const { user, error, isLoading } = useUser();
  const router = useRouter();

  if (isLoading) return <Typography>加载中...</Typography>;
  if (error) {
    return <Typography color="error">错误: {error.message}</Typography>;
  }

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md text-center">
        <Typography variant="h5" gutterBottom>
          欢迎来到我的应用
        </Typography>
        {user
          ? (
            <>
              <Typography variant="body1" gutterBottom>
                您已登录，欢迎 {user.name}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                className="w-full mt-4"
                onClick={() => router.push("/dashboard")}
              >
                前往仪表盘
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                className="w-full mt-2"
                href="/api/auth/logout"
              >
                登出
              </Button>
            </>
          )
          : (
            <Button
              variant="contained"
              color="primary"
              className="w-full"
              href="/api/auth/login"
            >
              登录
            </Button>
          )}
      </div>
    </div>
  );
}
