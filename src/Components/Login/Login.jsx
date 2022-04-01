import React from 'react'
import './Login.scss'

const Login = () => {
  return (
    <div>
        <div>
          <div className='row'>
            <form className='logForm'>
              <input type='email' name='email' placeholder='Email' /><br/>
              <input type="password" name='password' placeholder='Contraseña' /><br/>
              <button>Ingresa</button><br/>
              <button>Registrate</button>
             </form>
          </div>
        </div>
       
    </div>
  )
}

export default Login