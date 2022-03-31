import React from 'react'
import './Navbar.scss'

const Navbar = () => {
  return (
    <div>
        <div className='container-fluid'>
            <div className='row'>
                <div>
                    <ul className='lista'>
                        <div>
                            <h2 className='logo'>Logo</h2>
                        </div>
                        <div>
                            <li className='nav-link'>Nuestros Especialistas</li>
                            <li className='nav-link'>Contacto</li>
                            <li className='nav-link'>Blog</li>
                            <li className='nav-link'>Acceder</li>
                            <li className='nav-link'>Registrarse</li>
                        </div>
                    </ul>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Navbar