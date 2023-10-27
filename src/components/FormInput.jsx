import React, { useState } from 'react'
import "./FormInput.css"

const FormInput = (props) => {

const [focused, setFocused] = useState(false)

const {label,error,view, onChange, id , shPass ,  ...inputProps  } = props

const handlefocused = (e) => {
    setFocused(true)
}

  return (
    <div className='formInput'>
      <label>{label}</label>
      <input 
       
      {...inputProps}
       
       type={(!shPass)?props.type:"text" }  
        
       
       
        onChange={onChange}
       onBlur={handlefocused}
        focused={focused.toString()}    
            onFocus={() => inputProps.name === "confirmPassword" && setFocused(true)}
        />
        <i className="far fa-eye" id="togglePassword"></i>
      <span>{error}</span>
    </div>
  )
}

export default FormInput
