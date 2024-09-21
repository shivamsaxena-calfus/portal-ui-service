"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Avatar,
  Popover,
  Typography,
  IconButton,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import Image from "next/image";

const TopNavbar = () => {
  const pathName = usePathname();
  const router = useRouter();

  const isLoggedIn = false;

  const user = {
    firstName: "John",
    lastName: "Doe",
    company: "Example Corp",
  };

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "History", path: "/History" },
    { label: "ADA Reports", path: "/AdaReport" },
    { label: "About Us", path: "/About" },
  ];

  const filteredNavLinks = isLoggedIn
    ? navLinks
    : [{ label: "Docs", path: "/Docs" }];

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleAvatarClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "user-info-popover" : undefined;

  const handleLogout = () => {
    console.log("Logging out...");
    router.replace("/Login");
  };

  const handleLogin = () => {
    console.log("Navigating to login...");
    router.replace("/login");
  };

  return (
    <AppBar
      position="static"
      sx={{
        background: "linear-gradient(to right, #badfe3, #001f3f)",
      }}
    >
      <Toolbar>
        <Box 
          sx={{ display: "flex", alignItems: "center", marginRight: 2 }} 
          className="hover:cursor-pointer"
          onClick={() => router.replace("/")}
        >
          <Image
            src="/CalfusLogo.png"
            alt="Calfus Logo"
            width={100}
            height={80}
          />
        </Box>

        <Box sx={{ marginLeft: "auto", display: "flex", gap: 2 }}>
          {filteredNavLinks.map((link) => (
            <Button
              key={link.path}
              onClick={() => router.replace(link.path)}
              sx={{ textTransform: "none", color: "white" }}
            >
              {link.label}
            </Button>
          ))}

          {isLoggedIn ? (
            <>
              <Avatar
                sx={{ bgcolor: "primary.main", cursor: "pointer" }}
                onClick={handleAvatarClick}
              >
                {user.firstName.charAt(0)}
              </Avatar>

              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handlePopoverClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
                <Box sx={{ padding: 2, width: 250 }}>
                  <Typography variant="h6">{`${user.firstName} ${user.lastName}`}</Typography>
                  <Typography variant="body1" color="text.secondary">
                    {user.company}
                  </Typography>
                  <Button
                    onClick={handleLogout}
                    sx={{ textTransform: "none", marginTop: 2 }}
                  >
                    Logout
                  </Button>
                </Box>
              </Popover>
            </>
          ) : (
            <IconButton
              color="inherit"
              onClick={handleLogin}
              sx={{ textTransform: "none" }}
            >
              <LoginIcon />
              <Typography sx={{ marginLeft: 1, color: "white" }}>
                Login
              </Typography>
            </IconButton>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopNavbar;
