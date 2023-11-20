import "./new.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useAddUserMutation, useUpdateUserMutation } from "../../features/users/usersApi";
import { useAddItemMutation, useUpdateItemMutation } from "../../features/items/itemsApi";

export const New = ({inputs, name:formName, type}) => {
    const path = useLocation()
    // console.log(path.pathname.split("/")[3])
    const id = path.pathname.split("/")[3]

    // call the hooks
    const [ addUser, {isError: isAddUserError, isLoading: isAddUserLoading, isSuccess: isAddUserSuccess, error: addUserError}] = useAddUserMutation();
    const [ updateUser, {isError: isUpdateUserError, isLoading: isUpdateUserLoading, isSuccess: isUpdateUserSuccess, error: updateUserError}] = useUpdateUserMutation();
    const [ addItem, {isError: isAddItemError, isLoading: isAddItemLoading, isSuccess: isAddItemSuccess, error: addItemError}] = useAddItemMutation();
    const [ updateItem, {isError: isUpdateItemError, isLoading: isUpdateItemLoading, isSuccess: isUpdateItemSuccess, error: updateItemError}] = useUpdateItemMutation();

    const [value, setValue] = useState({})

    const handleFormSubmit = (e) => {  
        e.preventDefault()  
        if (type==="new") {
            if (path.pathname.includes("user")) {
                addUser(value)
                console.log("new user")
            } else {
                addItem(value)
                console.log("new item")
            }
        } else {
            if (path.pathname.includes("user")) {
                updateUser({id, data:value})
                console.log("update user")
            } else {
                updateItem({id, data:value})
                console.log("update item")
            }
        }
    }

    const handleValueChnage = (e) => {  
        console.log(value)


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
            <div className="formInput" key={input.id}>
                <label>{input.label}</label>
                <input name={input.label} type={input.type} placeholder={input.placeholder} onChange={handleValueChnage} />
            </div>
            ))}
            <button className="newButton">Send</button>
        </form>
        </div>
    </div>
  )
}
