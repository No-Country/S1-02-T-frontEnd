import React from 'react'
import './Registro.scss'
import logoInicio from "../../img/iconoCiudadanos.png"
import { apiBaseUrl } from '../../Utils/constants'



export const Registro = () => {


  return (
    <div>
        <div>
        
        <div className="container">
          <div className="img">
            <img src={logoInicio}alt="img login" />
          </div>
          <div className="login-content">
            <form action="index.html">
              
              <h2 className="title">Registrate</h2>
              <div className="input-div one">
                <div className="i">
                  <i className="fas fa-user" />
                </div>
                <div className="div">
                  
                  <input type="text" className="input" placeholder="Nombre" />
                </div>
              </div>
              <div className="input-div one">
                <div className="i">
                  <i className="fas fa-user" />
                </div>
                <div className="div">
                  
                  <input type="text" className="input" placeholder="Apellido" />
                </div>
              </div>
              <div className="input-div one">
                <div className="i">
                  <i className="fas fa-user" />
                </div>
                <div className="div">
                  
                  <input type="email" className="input" placeholder="Correo" />
                </div>
              </div>
              <div className="input-div pass">
                <div className="i"> 
                  <i className="fas fa-lock" />
                </div>
                <div className="div">
                  
                  <input type="password" className="input" placeholder="contrasena" />
                </div>
              </div>
              <button type="text" className="btn" defaultValue="Login">Enviar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
