import React from 'react'
import { Link } from 'react-router-dom'
function Page() {
  return (  
    
    <div>
        <header className='pageHeader'>
            <h1 className='Bienvenida'>Bienvenido <a>Usuario</a> a la pagina del grupo 5!</h1>
        </header>
        <div className='NavDiv'>
            <nav>
                <ul>
                    <li><Link to="/"/>Home</li>
                    <li> <a href="/Actividades" >Actividades</a> </li>
                    <li> <a href="/Test" >Test</a> </li>
                    <li> <a href="/us" >Quienes somos?</a> </li>
                    <li> <a href="/signOut" >Cerrar sesion</a> </li>
                </ul>
            </nav>
        </div>
    </div>
  )
}


export default Page