import React from 'react'
import './Login.scss'

const Login = () => {
  return (
    <div>
        <div className="container">
            <div className='row'>
                <div className='col'>
                    <form className='formulario'>
                        <li>
                            <input type="email" name="mail" placeholder="Email" />
                        </li>
                        <li>
                            <input type="password" name='password' placeholder='Contraseña' />
                        </li>
                        <button className='login-button'>ingresar</button>
                        <button className='login-button'>registrarse</button>
                    </form>
                    
                    
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Login