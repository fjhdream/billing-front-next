// app/dashboard/layout.tsx
"use client";

import React from "react";
import DashboardLayout from "../../compoents/DashboardLayout.tsx";

export default function DashboardLayoutWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    return <DashboardLayout>{children}</DashboardLayout>;
}
