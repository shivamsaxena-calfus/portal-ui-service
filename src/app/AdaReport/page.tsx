"use client";
import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { ColDef } from "ag-grid-community";
import {
  DUMMY_DATA_FOR_HISTORY,
  HISTORY_COL_DEF,
} from "../History/HistoryColDef";
import {
  Button,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { ADA_SCAN_COL_DEF, DUMMY_DATA_FOR_ADA_SCAN } from "./AdaData";
import { ActionCellRenderer } from "./ActionCellRenderer";

const rowData = DUMMY_DATA_FOR_ADA_SCAN;
const columnDefs: ColDef[] = [
  ...ADA_SCAN_COL_DEF,
  {
    headerName: "Action",
    cellRenderer: ActionCellRenderer,
    // flex: 1,
  },
];

// Sample JSON data with URLs
const urls = [
  { Id: 1, Url: "www.calfus.com/home" },
  { Id: 2, Url: "www.example.com/about" },
  { Id: 3, Url: "www.somesite.com/contact" },
];

const Page = () => {
  const [selectedUrl, setSelectedUrl] = useState(""); // State to track selected URL
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal open state

  // Handle opening the modal
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // Handle closing the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Handle scan logic
  const handleScanClick = () => {
    console.log("Scanning URL:", selectedUrl);
    // Add your scan logic here
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
          {/* Button to Open Modal */}
          <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleOpenModal}
            >
              Initiate Scan
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

      {/* Modal Dialog */}
      <Dialog
        open={isModalOpen}
        onClose={handleCloseModal}
        maxWidth="sm" // You can change the size (sm, md, lg)
        fullWidth
        PaperProps={{
          sx: { width: "600px", height: "300px" }, // Adjust width and height here
        }}
      >
        {/* Modal Header */}
        <DialogTitle>Initiate New Scan</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please select the URL you want to scan.
          </DialogContentText>

          {/* URL Dropdown */}
          <FormControl fullWidth variant="outlined" margin="dense">
            <InputLabel id="url-label">Select URL</InputLabel>
            <Select
              labelId="url-label"
              value={selectedUrl}
              onChange={(e) => setSelectedUrl(e.target.value as string)}
              label="Select URL"
            >
              {urls.map((url) => (
                <MenuItem key={url.Id} value={url.Url}>
                  {url.Url}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleCloseModal} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleScanClick} color="primary">
            Start Scan
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Page;
