export const DUMMY_DATA_FOR_ADA_SCAN = [
  {
    URL: "https://example1.com",
    urlAddedDate: "2024-01-10",
    lastStatus: "Success",
  },
  {
    URL: "https://example2.com",
    urlAddedDate: "2024-01-12",
    lastStatus: "In Progress",
  },
  {
    URL: "https://example3.com",
    urlAddedDate: "2024-01-15",
    lastStatus: "Failed",
  },
  {
    URL: "https://example4.com",
    urlAddedDate: "2024-01-20",
    lastStatus: "Success",
  },
  {
    URL: "https://example5.com",
    urlAddedDate: "2024-01-22",
    lastStatus: "In Progress",
  },
];

export const ADA_SCAN_COL_DEF = [
  {
    headerName: "URL",
    field: "URL",
    sortable: true,
    filter: true,
    flex: 1,
  },
  {
    headerName: "URL Added Date",
    field: "urlAddedDate",
    sortable: true,
    filter: true,
    flex: 1,
  },
  {
    headerName: "Last Status",
    field: "lastStatus",
    sortable: true,
    filter: true,
    flex: 1,
  },
];
