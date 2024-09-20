"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { TextField, Button, Typography, Box, Grid, Paper } from "@mui/material";

const formFields = [
  {
    id: "first-name",
    name: "first-name",
    label: "First name",
    type: "text",
    autoComplete: "given-name",
  },
  {
    id: "last-name",
    name: "last-name",
    label: "Last name",
    type: "text",
    autoComplete: "family-name",
  },
  {
    id: "company-name",
    name: "company-name",
    label: "Company Name",
    type: "text",
    autoComplete: "organization",
  },
  {
    id: "url",
    name: "url",
    label: "URL",
    type: "url",
    autoComplete: "url",
  },
  {
    id: "email",
    name: "email",
    label: "Email address",
    type: "email",
    autoComplete: "email",
  },
];

const OnboardingForm = () => {
  const [formData, setFormData] = useState({});
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    router.push("/History");
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="grey.100"
    >
      <Paper elevation={3} sx={{ p: 4, width: "400px", borderRadius: "8px" }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Onboarding
        </Typography>
        <Typography variant="body2" color="textSecondary" mb={4}>
          Company information
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            {formFields.map((field) => (
              <Grid item xs={12} key={field.id}>
                <TextField
                  fullWidth
                  id={field.id}
                  name={field.name}
                  label={field.label}
                  type={field.type}
                  autoComplete={field.autoComplete}
                  onChange={handleChange}
                  variant="outlined"
                />
              </Grid>
            ))}
          </Grid>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mt: 3,
              py: 1.5,
              fontWeight: "bold",
              bgcolor: "primary.main",
              "&:hover": { bgcolor: "primary.dark" },
            }}
          >
            Submit
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default OnboardingForm;
