import "./infotable.css"
import { DataGrid } from '@mui/x-data-grid';
import { Link, useLocation } from "react-router-dom";


const rows = [
  { id: 1, name: 'Snow', email: 'Jon', created_at: 35, created_by: "rafi" },
  { id: 2, name: 'Lannister', email: 'Cersei', created_at: 42 , created_by: "rafi"},
  { id: 3, name: 'Lannister', email: 'Jaime', created_at: 45, created_by: "rafi" },
  { id: 4, name: 'Stark', email: 'Arya', created_at: 16 , created_by: "rafi"},
  { id: 5, name: 'Targaryen', email: 'Daenerys', created_at: null , created_by: "rafi"},
  { id: 6, name: 'Melisandre', email: null, created_at: 150, created_by: "rafi" },
  { id: 7, name: 'Clifford', email: 'Ferrara', created_at: 44, created_by: "rafi" },
  { id: 8, name: 'Frances', email: 'Rossini', created_at: 36, created_by: "rafi" },
  { id: 9, name: 'Roxie', email: 'Harvey', created_at: 65 , created_by: "rafi"},
];

const handleDelete = (id) => {  
  console.log("delete",id)
}

export  function InfoTable({columns}) {
  const location = useLocation();
  console.log(location.pathname)
  const actionColumns = [
    {
      field: "action", headerName: "Actions", width: 200, renderCell: (params) => {
        return (
          <div className='cellActions'>
            <Link to={`/update${location.pathname}/${params.row.id}`} className='updateButton'>Update</Link>
            <div className='deleteButton' onClick={() => handleDelete(params.row.id)}>Delete</div>
          </div>
        )
      }
    }
  ]
  
  return (
    <div style={{ height: 400, width: '100%' }} className="dataTable">
      <div className="datatableTitle">
        Add New 
        <Link to={`/new${location.pathname}`} className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        rows={rows}
        columns={columns.concat(actionColumns)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}