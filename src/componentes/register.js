import React from 'react'
import { useState } from 'react'

function Register() {
    const [user,setUser] = useState("");
    const [email,setEmail] = useState("");
    const [pass,setPass] = useState("");
  return (

    <div>
        <div className='bloqueRegistro'>  
        <header></header>          
            <form className= "registro"> 
            Nombre de usuario:<input value={user} onChange={(e)=> setUser(e.target.value)} required placeholder='Minimo 4 caracteres' type="text" name="user" id="user"></input> <br></br>
            Correo Electronico: <input value={email} onChange={(e)=> setEmail(e.target.value)} type='email' required placeholder='ejemplo@hotmail.com' ></input> <br></br>
            Elija una contraseña<input value={pass} onChange={(e)=> setPass(e.target.value)} placeholder='Minimo 8 caracteres' maxLength="16" minLength="4" required type="password" name="password" id="pass"></input> <br></br>
            <input value={"Registrarme"}  className='enviar' type="submit"></input>
            </form>
        </div>
     
    </div>
  )
}


export default Register