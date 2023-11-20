import "./infotable.css"
import { DataGrid } from '@mui/x-data-grid';
import { Link, useLocation } from "react-router-dom";
import { Loading } from "../loading/Loading";
import { useDeleteItemMutation } from "../../features/items/itemsApi";
import { useDeleteUserMutation } from "../../features/users/usersApi";





export  function InfoTable({columns, rows, isLoading, isSuccess}) {

  const [deleteItem, {isError, isLoading: isDeleteItemLoading, isSuccess: isDeleteItemSuccess, error}] = useDeleteItemMutation()
  const [deleteUser, {isError: isDeleteUserError, isLoading: isDeleteUserLoading, isSuccess: isDeleteUserSuccess, error:deleteUserError}] =useDeleteUserMutation()

  const location = useLocation();


  const handleDelete = (id) => {  
    console.log("delete",id, location.pathname)
    if (location.pathname.includes("item")) {
      deleteItem(id)
    } else {
      deleteUser(id)
      console.log(deleteUserError)
    }
  }

  const actionColumns = [
    {
      field: "action", headerName: "Actions", width: 200, renderCell: (params) => {
        return (
          <div className='cellActions'>
            <Link to={`/update${location.pathname}/${params.row._id}`} className='updateButton'>Update</Link>
            <div className='deleteButton' onClick={() => handleDelete(params.row._id)}>Delete</div>
          </div>
        )
      }
    }
  ]

  let content = null;
  if (isLoading) content = <Loading/>; 
  if (isSuccess) content = <div style={{ height: 400, width: '100%' }} className="dataTable">
                              <div className="datatableTitle">
                                Add New 
                                <Link to={`/new${location.pathname}`} className="link">
                                  Add New
                                </Link>
                              </div>
                              <DataGrid
                                getRowId={(rows) => rows._id}
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
  
  return content;
}