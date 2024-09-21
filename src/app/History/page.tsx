"use client";
import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { ColDef } from "ag-grid-community";
import { DUMMY_DATA_FOR_HISTORY, HISTORY_COL_DEF } from "./HistoryColDef";
import {
  Button,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { ActionCellRenderer } from "./ActionCellRenderer";

// Dummy data for rowData and columnDefs
const rowData = DUMMY_DATA_FOR_HISTORY;
const columnDefs: ColDef[] = [
  ...HISTORY_COL_DEF,
  {
    headerName: "Action",
    cellRenderer: ActionCellRenderer,
    // flex: 1,
  },
];

const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const [newUrl, setNewUrl] = useState(""); // State for the new URL

  // Open Modal
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // Close Modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setNewUrl(""); // Clear the URL input on modal close
  };

  // Handle saving new URL
  const handleSaveUrl = () => {
    console.log("New URL added:", newUrl);
    // Here you can implement the logic to add the new URL to the rowData or send it to the backend
    handleCloseModal();
  };

  const defaultColDef = {
    sortable: true,
    filter: true,
    resizable: true,
  };

  return (
    <>
      <div className="flex justify-center items-start h-screen mt-10">
        <div className="w-4/5">
          {/* Button to Add New URL */}
          <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleOpenModal}
            >
              Add New URL
            </Button>
          </Box>

          {/* Ag-Grid */}
          <div
            className="ag-theme-alpine rounded-lg shadow-md"
            style={{ height: 300, width: "100%" }}
          >
            <AgGridReact
              rowData={rowData}
              columnDefs={columnDefs}
              defaultColDef={defaultColDef}
              pagination={true}
              paginationPageSize={20}
            />
          </div>
        </div>
      </div>

      {/* Modal for Adding New URL with increased size */}
      <Dialog
        open={isModalOpen}
        onClose={handleCloseModal}
        maxWidth="sm" // Set the max width of the modal (you can also use other sizes like 'md' or 'lg')
        fullWidth // Makes the modal take up full width based on the maxWidth
        PaperProps={{
          sx: { width: "600px", height: "200px" }, // Custom width and height
        }}
      >
        <DialogTitle>Add New URL</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Enter URL"
            type="url"
            fullWidth
            value={newUrl}
            onChange={(e) => setNewUrl(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSaveUrl} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Page;
