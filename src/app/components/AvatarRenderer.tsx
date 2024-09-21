"use client";
import React, { useState } from "react";
import { Avatar, Popover, Typography, Box } from "@mui/material";

interface User {
  firstName: string;
  lastName: string;
  company: string;
}

const AvatarRenderer = ({ user }: { user: User }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  // Open the popover when avatar is clicked
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  // Close the popover
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "user-info-popover" : undefined;

  return (
    <div>
      {/* Avatar with the first letter of the first name */}
      <Avatar
        sx={{ bgcolor: "primary.main", cursor: "pointer" }}
        onClick={handleClick}
      >
        {user.firstName.charAt(0)}
      </Avatar>

      {/* Popover showing user details */}
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Box sx={{ padding: 2 }}>
          <Typography variant="h6">{`${user.firstName} ${user.lastName}`}</Typography>
          <Typography variant="body1" color="text.secondary">
            {user.company}
          </Typography>
        </Box>
      </Popover>
    </div>
  );
};

export default AvatarRenderer;
