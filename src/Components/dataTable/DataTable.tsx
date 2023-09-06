import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { GridColDef } from "@mui/x-data-grid";
import "./DataTable.scss";
import { Link } from "react-router-dom";

type Props = {
    columns: GridColDef[],
    rows: Object[],
    slug: string
}

function handleClick(){
    console.log('deleted')
}
function DataTable(props: Props) {
    const action: GridColDef = {
        field: "actions",
        headerName: "Actions",
        width: 200,
        renderCell: (params) => {
          return <div className="action">
            <Link to={`/${props.slug}/${params.row.id}`}>
                <img src="/view.svg" alt="" />
            </Link>
            <img src="/delete.svg" alt="" onClick={handleClick}/>
          </div>
        },
      }
  return (
    <div className="dataTable">
      <DataGrid
        className="dataGrid"
        rows={props.rows}
        columns={[...props.columns, action]}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </div>
  );
}

export default DataTable;
