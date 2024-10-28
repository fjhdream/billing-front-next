// app/dashboard/page.tsx
"use client";

import React from "react";
import { Typography } from "@mui/material";

export default function DashboardHome() {
    return (
        <div>
            <Typography variant="h4" gutterBottom>
                仪表盘首页
            </Typography>
            <Typography>
                欢迎来到您的仪表盘。请选择左侧的一个栏目查看详细信息。
            </Typography>
        </div>
    );
}
