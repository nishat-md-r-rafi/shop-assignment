import "./new.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAddUserMutation, useUpdateUserMutation } from "../../features/users/usersApi";
import { useAddItemMutation, useUpdateItemMutation } from "../../features/items/itemsApi";
import { FormInput } from "../../components/formInput/FormInput";
import { useSelector } from "react-redux";

export const New = ({inputs, name:formName, type}) => {


    const path = useLocation()
    const id = path.pathname.split("/")[3]
    const user = useSelector(state=> state.auth.user)
    const navigate = useNavigate()


    // call the hooks
    const [ addUser, {isError: isAddUserError, isLoading: isAddUserLoading, isSuccess: isAddUserSuccess, error: addUserError}] = useAddUserMutation();
    const [ updateUser, {isError: isUpdateUserError, isLoading: isUpdateUserLoading, isSuccess: isUpdateUserSuccess, error: updateUserError}] = useUpdateUserMutation();
    const [ addItem, {isError: isAddItemError, isLoading: isAddItemLoading, isSuccess: isAddItemSuccess, error: addItemError}] = useAddItemMutation();
    const [ updateItem, {isError: isUpdateItemError, isLoading: isUpdateItemLoading, isSuccess: isUpdateItemSuccess, error: updateItemError}] = useUpdateItemMutation();

    const [value, setValue] = useState({})
    let result = null;

    const handleToast = (result, type, action) => {  
        if ("error" in result){
            toast.error(result?.error?.data, {
                position: "top-center",
                autoClose: 500,
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
                autoClose: 500,
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


    const handleFormSubmit = async (e) => {  
        e.preventDefault()  
        if (type==="new") {
            if (path.pathname.includes("user")) {
                result = await addUser({...value, created_by: user.name})  
                handleToast(result,"user", "create") 
            } else {
                result = await addItem({...value, created_by: user.name})
                handleToast(result,"item", "create") 
            }
        } else {
            if (path.pathname.includes("user")) {
               result = await updateUser({id, data:value})
               handleToast(result,"user", "update") 
            } else {
                result = await updateItem({id, data:value})
                handleToast(result,"item", "update") 
            }
        }
    }

    const handleValueChange = (e) => {  
        setValue((prev) => {  
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }

    
    


  return (
    <div className='new'>
        <div className="top">
            <h1>{type} {formName} Form</h1>
        </div>
        <div className="bottom">

            <form onSubmit={handleFormSubmit}>
                {inputs.map((input) => (
                    <FormInput input={input} handleValueChange={handleValueChange} type={type} key={input.id}/>
                ))}
            <button className="newButton">Send</button>
            </form>
        </div>

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
    