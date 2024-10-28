// app/dashboard/vehicles/page.tsx
"use client";

import React from "react";
import { Typography } from "@mui/material";

export default function Vehicles() {
    return (
        <div>
            <Typography variant="h4" gutterBottom>
                车辆
            </Typography>
            <Typography>
                这里是车辆页面的内容。
            </Typography>
        </div>
    );
}
