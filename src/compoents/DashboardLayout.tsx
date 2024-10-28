// components/DashboardLayout.tsx
"use client";

import React from "react";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import {
    AppBar,
    Box,
    CssBaseline,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography,
} from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";

const drawerWidth = 240;

interface Props {
    children: React.ReactNode;
}

const DashboardLayout: React.FC<Props> = ({ children }) => {
    const { user, error, isLoading } = useUser();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <List>
                {[
                    {
                        text: "账单",
                        icon: <DescriptionIcon />,
                        href: "/dashboard/billing",
                    },
                    {
                        text: "车辆",
                        icon: <DirectionsCarIcon />,
                        href: "/dashboard/car",
                    },
                    {
                        text: "司机",
                        icon: <PersonIcon />,
                        href: "/dashboard/driver",
                    },
                ].map((item) => (
                    <Link href={item.href} key={item.text} passHref>
                        <ListItem button component="a">
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    </Link>
                ))}
            </List>
        </div>
    );

    if (isLoading) return <div>加载中...</div>;
    if (error) return <div>错误: {error.message}</div>;

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            {/* 顶部导航栏 */}
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: "none" } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        Dashboard
                    </Typography>
                    <Typography variant="body1">{user?.name}</Typography>
                </Toolbar>
            </AppBar>

            {/* 左侧导航栏 */}
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* 移动设备上的 Drawer */}
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // 为了更好的性能
                    }}
                    sx={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
                {/* 桌面设备上的 Drawer */}
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: "none", sm: "block" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>

            {/* 主内容区域 */}
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                }}
            >
                <Toolbar />
                {children}
            </Box>
        </Box>
    );
};

export default DashboardLayout;
