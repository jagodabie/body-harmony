"use client";

import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";

import { useAppSelector } from "@/hooks/useAppDispatch";

import { FavoriteForm } from "./FormsTableComponents/FavoriteForm/FavoriteForm";
import FormsTableActions from "./FormsTableComponents/FormsTableActions/FormsTableActions";

const renderFavorite = (params: GridRenderCellParams) => (
  <FavoriteForm isFavorite={params.row.favorite} />
);
const renderActions = (params: GridRenderCellParams) => (
  <FormsTableActions id={params.row.id} />
);

const columns = [
  {
    field: "favorite",
    headerName: "Favorite",
    flex: 1,
    renderCell: renderFavorite,
  },
  {
    field: "formName",
    headerName: "Form Name",
    flex: 3,
    renderCell: (params: GridRenderCellParams) => <div>{params.value}</div>,
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

const paginationModel = { page: 0, pageSize: 10 };

export const FormsTable = () => {
  const { formConfigs, isLoading } = useAppSelector(
    ({ formConfigs }) => formConfigs
  );
  // TODO: Implement favorite form feature

  return (
    <DataGrid
      rows={formConfigs}
      columns={columns}
      loading={isLoading}
      initialState={{ pagination: { paginationModel } }}
      pageSizeOptions={[5, 10]}
      checkboxSelection
      paginationMode="server"
      rowCount={formConfigs.length}
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
