import { useState } from "react";
import "./formInput.css"

export const FormInput = ({input, handleValueChange, type}) => {

  const [focused, setFocused] = useState(false)
  const {label, errorMessage, ...rest} = input;
  const handleFocus = (e) => {  
    setFocused(true)
  }
  return (
    <div className="formInput" key={input.id}>
        <label>{label}</label>
        <input 
            name={label} {...rest} 
            onChange={handleValueChange} 
            required={type==="new" ? true : false}
            onBlur={handleFocus}
            focused={focused.toString()}
        />
        <span>{errorMessage}</span>
    </div>
  )
}