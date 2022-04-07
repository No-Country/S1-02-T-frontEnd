import React from 'react'
import './Login.scss'

const Login = () => {
  return (
    <div>
        <div>
        <img className="icono" src="" />
        <div className="container">
          <div className="img">
            <img src="" alt="img login" />
          </div>
          <div className="login-content">
            <form action="index.html">
              
              <h2 className="title">Login</h2>
              <div className="input-div one">
                <div className="i">
                  <i className="fas fa-user" />
                </div>
                <div className="div">
                  <h5>Usuario</h5>
                  <input type="text" className="input" />
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
              <a>Forgot Password?</a>
              <button type="text" className="btn" defaultValue="Login">Ingresar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login