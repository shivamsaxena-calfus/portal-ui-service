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

const rowData = DUMMY_DATA_FOR_HISTORY;
const columnDefs: ColDef[] = [
  ...HISTORY_COL_DEF,
  {
    headerName: "Action",
    cellRenderer: ActionCellRenderer,
  },
];

const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newUrl, setNewUrl] = useState(""); 

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setNewUrl(""); 
  };

  const handleSaveUrl = () => {
    console.log("New URL added:", newUrl);
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
          <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleOpenModal}
            >
              Add New URL
            </Button>
          </Box>

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

      <Dialog
        open={isModalOpen}
        onClose={handleCloseModal}
        maxWidth="sm" 
        fullWidth 
        PaperProps={{
          sx: { width: "600px", height: "200px" }, 
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
