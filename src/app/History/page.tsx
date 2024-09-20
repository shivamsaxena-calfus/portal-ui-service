"use client";
import React from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { ColDef } from "ag-grid-community";
import { DUMMY_DATA_FOR_HISTORY, HISTORY_COL_DEF } from "./HistoryColDef";

const rowData = DUMMY_DATA_FOR_HISTORY;
const columnDefs: ColDef[] = [
  { headerName: "URL", field: "URL", sortable: true, filter: true, flex: 1 },
  ...HISTORY_COL_DEF
];

const Page = () => {
  const defaultColDef = {
    sortable: true,
    filter: true,
    resizable: true,
  };

  return (
    <div
      className="flex justify-center items-start h-screen mt-10"
    >
      <div
        className="ag-theme-alpine rounded-lg shadow-md"
        style={{ height: 300, width: "70%" }}
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
  );
};

export default Page;
