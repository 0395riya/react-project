import React, { useState } from 'react'
import "./AppForm.css"
import FormInput from './components/FormInput'

const AppForm = () => {
  const [values, setValues] = useState({
    username:"",
    birthday:"",
    email:"",
    password:"",
    confirmPassword:"",
    error:false ,
     
  })


  const [shPass, setShowPass] = useState(false)
  const inputs = [
  {
    id:"1",
    name:"username", 
    type:"text",
    placeholder:"Username",
    label:"Username :",
    error:"username should be 3-16 characters and shouldn't include any special character!",
    required:true,
    pattern:"^[A-Za-z0-9]{3,16}$"
  },
  {
    id:"2",
    name:"email", 
    type:"email",
    placeholder:"Email",
    label:"Email :",
    error:"Enter valid email",
    required:true,
    // pattern:"^[^\s@]+@[^\s@]+\.[^\s@]+$"

  },
  {
    id:"3",
    name:"birthday", 
    type:"date",
    placeholder:"Birthday",
    label:"Date of Birth :"
  },
  {
    id:"4",
    name:"password", 
    type:"password",
    placeholder:"Password",
    label:"Password :",
    error:"Passowd should be 8-20 characters and include atleast 1 letter, 1 number and 1 special character",
    required:true,
    // view:"",
    pattern:"^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{8,20}$"

  },
  {
    id:"5",
    name:"confirmPassword", 
    type:"password",
    placeholder:"Confirm Password",
    label:"Confirm-Password :",
    error:"Password don't match!",
    required:true,
    pattern:values.password

  }
]

const handleSubmit = (e) => {
  e.preventDefault();
}

const handleChange = (e)=> {
  setValues({...values, [e.target.name]:e.target.value})
}


  return (
     
    <React.Fragment>


    <div className='App'>

      <form onSubmit={handleSubmit}>
      <h1>Register</h1>
      {inputs.map((item)=>(  
           <FormInput key={item.id} {...item} value={values[item.name]} shPass={shPass} onChange={handleChange}/>
      
      ))
}
<button>Submit</button>
      </form>      
    </div>

    <button onClick={()=> setShowPass(!shPass)} >show pass</button>
    </React.Fragment>
  )
}

export default AppForm
