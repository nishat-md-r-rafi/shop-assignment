import "./new.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useAddUserMutation, useUpdateUserMutation } from "../../features/users/usersApi";
import { useAddItemMutation, useUpdateItemMutation } from "../../features/items/itemsApi";

export const New = ({inputs, name:formName, type}) => {


    const path = useLocation()
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
            } else {
                addItem(value)
            }
        } else {
            if (path.pathname.includes("user")) {
                updateUser({id, data:value})
            } else {
                updateItem({id, data:value})
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
            {inputs.map((input) => {
                const {label, errorMessage, ...rest} = input;
                return (
                    <div className="formInput" key={input.id}>
                        <label>{label}</label>
                        <input 
                            name={label} {...rest} 
                            onChange={handleValueChnage} 
                            required={type==="new" ? true : false}
                        />
                        <span>{errorMessage}</span>
                    </div>
                )
            })}
            <button className="newButton">Send</button>
        </form>
        </div>
    </div>
  )
}
