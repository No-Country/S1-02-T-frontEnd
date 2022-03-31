import React from 'react'
import './Login.scss'

const Login = () => {
  return (
    <div>
        <div className="container">
            <div className='row'>
                <div className='col'>
                    <li>
                        <input type='text' name="name" placeholder="Nombre:" />

                    </li>
                    <li>
                        <input type='text' name="lastName" placeholder="Apellido:" />
                    </li>
                    <li>
                        <input type="text" name='birth date' placeholder='Fecha de Nacimiento' />
                    </li>
                    <li>
                        <input type="tel" name="phone number" placeholder="Número de teléfono" />
                    </li>
                    <li>
                        <input type="email" name="mail" placeholder="Email" />
                    </li>
                    <li>
                        <input type="password" name='password' placeholder='Contraseña' />
                    </li>
                    <li>
                    <input type="password" name='password' placeholder='Repetir contraseña' />
                    </li>
                    
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Login