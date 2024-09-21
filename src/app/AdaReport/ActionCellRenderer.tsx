import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import IconButton from "@mui/material/IconButton";

export const ActionCellRenderer = (props: any) => {
  const handleDelete = () => {
    console.log("Delete clicked for:", props.data);
  };

  const handleView = () => {
    console.log("View clicked for:", props.data);
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
