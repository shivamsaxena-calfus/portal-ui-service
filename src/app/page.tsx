"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { Button, Typography, Box } from "@mui/material";

const Home = () => {
  const router = useRouter();

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      bgcolor="grey.100"
      p={2}
    >
      <Typography
        variant="h1"
        fontWeight="bold"
        color="textPrimary"
        mb={4}
        textAlign="center"
      >
        Get your website WPAC compliant
      </Typography>

      <Button
        variant="contained"
        color="primary"
        onClick={() => router.push("/Onboarding")}
        sx={{
          py: 2,
          px: 4,
          fontSize: "1rem",
          fontWeight: "600",
          borderRadius: "8px",
        }}
      >
        Get Started
      </Button>
    </Box>
  );
};

export default Home;
