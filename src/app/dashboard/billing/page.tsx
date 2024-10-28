// app/dashboard/bills/page.tsx
"use client";

import React from "react";
import { Typography } from "@mui/material";

export default function Bills() {
    return (
        <div>
            <Typography variant="h4" gutterBottom>
                账单
            </Typography>
            <Typography>
                这里是账单页面的内容。
            </Typography>
        </div>
    );
}
