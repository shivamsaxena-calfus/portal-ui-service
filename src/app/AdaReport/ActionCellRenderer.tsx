import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import IconButton from "@mui/material/IconButton";

// Cell renderer for Action column
export const ActionCellRenderer = (props: any) => {
  const handleDelete = () => {
    console.log("Delete clicked for:", props.data);
    // Implement delete logic here
  };

  const handleView = () => {
    console.log("View clicked for:", props.data);
    // Implement view logic here
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <IconButton onClick={handleView} color="primary">
        <VisibilityIcon />
      </IconButton>
      <IconButton onClick={handleDelete} color="secondary">
        <DeleteIcon />
      </IconButton>
    </div>
  );
};
