"use client";
import React, { useState } from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";

const page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login form submitted", { email, password });
  };

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Box
        sx={{
          flex: 6,
          backgroundColor: "#badfe3",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" sx={{ textAlign: "center", padding: 2 }}>
          Login to check if your website is WPAC compliant
        </Typography>
      </Box>

      <Box
        sx={{
          flex: 4,
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
