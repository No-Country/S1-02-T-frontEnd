import React from 'react'
import './Registro.scss'



export const Registro = () => {
  return (
    <div>
        <div>
        
        <div className="container">
          <div className="img">
            <img src="" alt="img login" />
          </div>
          <div className="login-content">
            <form action="index.html">
              
              <h2 className="title">Registrate</h2>
              <div className="input-div one">
                <div className="i">
                  <i className="fas fa-user" />
                </div>
                <div className="div">
                  <h5>Nombre</h5>
                  <input type="text" className="input" />
                </div>
              </div>
              <div className="input-div one">
                <div className="i">
                  <i className="fas fa-user" />
                </div>
                <div className="div">
                  <h5>Apellido</h5>
                  <input type="text" className="input" />
                </div>
              </div>
              <div className="input-div one">
                <div className="i">
                  <i className="fas fa-user" />
                </div>
                <div className="div">
                  <h5>Email</h5>
                  <input type="email" className="input" />
                </div>
              </div>
              <div className="input-div pass">
                <div className="i"> 
                  <i className="fas fa-lock" />
                </div>
                <div className="div">
                  <h5>Contraseña</h5>
                  <input type="password" className="input" />
                </div>
              </div>
              <input type="text" className="btn" defaultValue="Login" />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
