import React, { useContext, useEffect, useState } from 'react'
import './Login.scss'
import logoInicio from "../../img/iconoCiudadanos.png"
import { useLoginContext } from '../../Context/login_context'
import { apiBaseUrl } from '../../Utils/constants'

const Login = () => {

  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleMail = (e) => {
      setMail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

 

  const {fetchLoginAttempt} = useLoginContext();



  return (
    <div>
        <div>
        <img className="icono" src="" alt="logo" />
        <div className="container">
          <div className="img">
            <img src={logoInicio} alt="img login" />
          </div>
          <div className="login-content">
            <form onSubmit={() => {
              fetchLoginAttempt(`${apiBaseUrl}/auth/login`, {mail,password})
            }}>
              
              <h2 className="title">Login</h2>
              <div className="input-div one">
                <div className="i">
                  <i className="fas fa-user" />
                </div>
                <div className="div">
                  <h5>Usuario</h5>
                  <input type="email" onChange={(e) => {handleMail(e)}} className="input" />
                </div>
              </div>
              <div className="input-div pass">
                <div className="i"> 
                  <i className="fas fa-lock" />
                </div>
                <div className="div">
                  <h5>Contraseña</h5>
                  <input type="password" onChange={(e) => {handlePassword(e)}} className="input" />
                </div>
              </div>
              <a>Forgot Password?</a>
              <button type="submit" className="btn" defaultValue="Login">Ingresar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login