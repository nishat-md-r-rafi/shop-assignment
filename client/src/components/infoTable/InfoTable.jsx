import "./infotable.css"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { DataGrid } from '@mui/x-data-grid';
import { Link, useLocation } from "react-router-dom";
import { Loading } from "../loading/Loading";
import { useDeleteItemMutation } from "../../features/items/itemsApi";
import { useDeleteUserMutation } from "../../features/users/usersApi";
import { useState } from "react";





export  function InfoTable({columns, rows, isLoading, isSuccess}) {

  const [deleteItem, {isError, isLoading: isDeleteItemLoading, isSuccess: isDeleteItemSuccess, error}] = useDeleteItemMutation()
  const [deleteUser, {isError: isDeleteUserError, isLoading: isDeleteUserLoading, isSuccess: isDeleteUserSuccess, error:deleteUserError}] = useDeleteUserMutation()

  const location = useLocation();

  const [query, setQuery] = useState("")

  const handleToast = (result, type, action) => {  
    if ("error" in result){
        toast.error(result?.error?.data, {
            position: "top-center",
            autoClose: 200,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }else{
        toast.success(`${type} ${action} successfully!`, {
            position: "top-center",
            autoClose: 200,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });

            setTimeout(() => {
                navigate(`/${type}`);
            }, 500);
    }
}

let result = null;



  const handleDelete = async (id) => {  
    if (location.pathname.includes("item")) {
      result = await deleteItem(id)
      handleToast(result, "item", "delete")

    } else {
      result = await deleteUser(id)
      handleToast(result, "user", "delete")
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

  const itemKeys = ["name", "created_by"]
  const userKeys = ["name", "email", "created_by"]

  const search = (data) => {  
    return data.filter((item) => {  
      if (location.pathname.includes("item")) {
        return itemKeys.some((key) => item[key].toLowerCase().includes(query.toLocaleLowerCase()))
      } else {
        return userKeys.some((key) => item[key].toLowerCase().includes(query.toLocaleLowerCase()))
      }
    })
  }

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
                                rows={search(rows)}
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
  
  return (
    <div>
          <div className="inputWrap">
              <input
              className="searchInput"
              placeholder="Search..."
              onChange={(e) => setQuery(e.target.value.toLowerCase())}
            />
          </div>
          {content};
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
        />
    </div>
  )
  
}