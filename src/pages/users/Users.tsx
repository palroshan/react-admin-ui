import { useState } from "react";
import DataTable from "../../Components/dataTable/DataTable";
import { userRows } from "../../data";
import "./Users.scss";
import { GridColDef } from "@mui/x-data-grid";
import Add from "../../Components/add/Add";

type columns = {};

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90, type: "string" },
  {
    field: "img",
    headerName: "Img",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} />;
    },
  },

  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
    type:"string"

    
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
    type:"string"

  },
  {
    field: "email",
    headerName: "Email",
    width: 150,
    type:"string"

  },
  {
    field: "phone",
    headerName: "Phone",
    width: 150,
    type:"number"

  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 150,
    type:"string"
  },

  { field: "verified", headerName: "Verified", width: 90, type: "boolean" },
];

function Users() {
  const [open, setOpen] = useState(false)
  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button onClick={()=>setOpen(true)}>Add New User</button>
      </div>
      <DataTable slug="user" columns={columns} rows={userRows} />
      {open && <Add slug="user" columns= {columns} setOpen={setOpen}/>}
    </div>
  );
}

export default Users;
