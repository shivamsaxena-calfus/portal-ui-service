"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { AppBar, Toolbar, Button, Box } from "@mui/material";

const TopNavbar = () => {
  const pathName = usePathname();
  const router = useRouter();

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Docs", path: "/Docs" },
    { label: "History", path: "/History" },
    { label: "ADA Reports", path: "/AdaReport" },
  ];

  return (
    <AppBar position="static" color="transparent">
      <Toolbar>
        {/* Navigation links aligned to the right */}
        <Box sx={{ marginLeft: "auto", display: "flex", gap: 2 }}>
          {navLinks.map((link) => (
            <Button
              key={link.path}
              onClick={() => router.replace(link.path)}
              sx={{ textTransform: "none" }}
            >
              {link.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopNavbar;
