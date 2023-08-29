import React from 'react'
function Form() {
  return (
    
    <div>

      <header></header>

      <form action="get" className='form1'>
       <h1>INICIO DE SESION</h1><input maxLength="16" minLength="4" required placeholder='Nombre de usuario' type="text" name="user" id="user"></input> <br></br>
       <input placeholder='Contraseña' maxLength="14" minLength="8" required type="password" name="password" id="pass"></input> <br></br>
       <input value={"Iniciar Sesion"} className='enviar' type="submit"></input>
       <h3>No tenes cuenta? <a href='/register'>Registrate aca</a></h3>
      </form>
    </div>
  )
}



export default Form