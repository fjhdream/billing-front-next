// app/layout.tsx
"use client";

import "../styles/globals.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  // 自定义主题
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh">
      <body>
        <UserProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </UserProvider>
      </body>
    </html>
  );
}
