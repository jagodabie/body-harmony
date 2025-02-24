"use client";

import { DataGrid } from "@mui/x-data-grid";
import "./index.css";
import { FavoriteForm } from "./FormsTableComponents/FavoriteForm/FavoriteForm";
import FormsTableActions from "./FormsTableComponents/FormsTableActions/FormsTableActions";

const renderFavorite = (params: any) => (
  <FavoriteForm isFavorite={params.row.favorite} />
);
const renderActions = (params: any) => <FormsTableActions id={params.row.id} />;

const columns = [
  {
    field: "favorite",
    headerName: "Favorite",
    flex: 1,
    renderCell: renderFavorite, // Teraz `renderCell` nie jest funkcją inline
  },
  {
    field: "formName",
    headerName: "Form Name",
    flex: 3,
    renderCell: (params: any) => <div>{params.value}</div>,
    editable: true,
  },
  {
    field: "actions",
    headerName: "Actions",
    flex: 1,
    renderCell: renderActions,
    sort: false,
  },
];

// TODO: for now hardcoded data
const rows = [
  { id: 1, favorite: false, formName: "Form 1" },
  { id: 2, favorite: true, formName: "Form 2" },
  { id: 3, favorite: false, formName: "Form 3" },
  { id: 4, favorite: true, formName: "Form 4" },
  { id: 5, favorite: false, formName: "Form 5" },
];

const paginationModel = { page: 0, pageSize: 10 };

export const FormsTable = () => {
  return (
    <DataGrid
      rows={rows}
      columns={columns}
      initialState={{ pagination: { paginationModel } }}
      pageSizeOptions={[5, 10]}
      checkboxSelection
      paginationMode="server"
      rowCount={rows.length}
      sx={{
        margin: "1rem 0",
        border: "1px solid #ddd",
        "& .MuiDataGrid-cell": {
          transform: "none",
        },
        "& .MuiDataGrid-columnHeader": {
          backgroundColor: "var(--background-paper)",
        },
        "& .MuiDataGrid-columnHeaderTitle": {
          fontWeight: "var(--font-weight-600)",
        },

        "& .MuiDataGrid-row:hover": {
          backgroundColor: "rgba(0, 0, 0, 0.04)",
          cursor: "pointer",
        },
        "& .MuiDataGrid-cell:focus": {
          outline: "none",
        },
      }}
    />
  );
};
