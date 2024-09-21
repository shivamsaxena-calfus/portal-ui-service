"use client";
import React, { useState } from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";

const page = () => {
  // State to hold form values
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login form submitted", { email, password });
    // Add your login logic here
  };

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      {/* Left Side Empty Space (60% width) */}
      <Box
        sx={{
          flex: 6, // This gives 60% width (6 parts out of 10)
          backgroundColor: "#badfe3", // You can customize the color or add an image here
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" sx={{ textAlign: "center", padding: 2 }}>
          Login to check if your website is WPAC compliant
        </Typography>
      </Box>

      {/* Right Side (Login Form, 40% width) */}
      <Box
        sx={{
          flex: 4, // This gives 40% width (4 parts out of 10)
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 4,
          backgroundColor: "white",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            width: "100%",
            maxWidth: 400,
            textAlign: "center",
          }}
        >
          <Typography className="text-2xl" gutterBottom>
            Login
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              margin="normal"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <TextField
              fullWidth
              label="Password"
              variant="outlined"
              margin="normal"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ marginTop: 2 }}
            >
              Login
            </Button>
          </form>
        </Paper>
      </Box>
    </Box>
  );
};

export default page;
