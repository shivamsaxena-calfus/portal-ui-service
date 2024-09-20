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
import { Button, TextField, Box } from "@mui/material";
import router from "next/router";

const rowData = DUMMY_DATA_FOR_HISTORY;
const columnDefs: ColDef[] = [
  { headerName: "URL", field: "URL", sortable: true, filter: true, flex: 1 },
  ...HISTORY_COL_DEF,
];

const Page = () => {
  const [url, setUrl] = useState("");

  const handleScanClick = () => {
    console.log("Scanning URL:", url);
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
          {/* Button and Input field */}
          <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
            <TextField
              label="Enter URL"
              variant="outlined"
              size="small"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              sx={{ mr: 2 }}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleScanClick}
            >
              Scan
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
    </>
  );
};

export default Page;
