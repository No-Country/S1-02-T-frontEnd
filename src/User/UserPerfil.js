import React from 'react'
import "./UserPerfil.scss";

const UserPerfil = () => {
  return (
    <div>
         <div className='perfil-container'>
            <div className='perfil-container1'>
                {/* <ul className='lista'>
                    <li className='nav-link'>Mi Perfil</li>
                    <li className='nav-link'>Mis turnos</li>
                    <li className='nav-link'>Mis Doctores</li>
                    <li className='nav-link'>Configuracion</li>
                </ul> */}

                <div className='usuario'>
                    <h2>Nombre Usuario</h2>
                    <p>Ubucación</p>
                    <button>Cambiar foto</button>
                </div>
            </div>
            <div className='perfil-container2'>
                <div>
                    <p>Informacion</p>
                </div>
    
                <div>
                    <button>Cancelar</button>
                    <button>Guardar</button>
                    
                </div>
                
                <form className='single-input'>
                
                    <label>Nombre</label>
                    <br/>
                    <input type="text" name="nombre" id="nombre" />
                    <br/>
                    <label>Apellido</label>
                    <br/>
                    <input type="text" name="apellido" id="apellido" />
                    <br/>
                    <label>Ubicación</label>
                    <br/>
                    <input type="text" name="ubicación" id="locacion"/>
                    <br/>
                    <label>Email</label>
                    <br/>
                    <input type="email" name="email" id="email"/>
                    <br/>
                    <label>Acerca de tí</label>
                    <br/>
                    <textarea className='single-textarea' name='message' id='message' placeholder='Contanos un poco de vos, tus deseos, tus miedos, que te gusta, que te irrita'></textarea>
                </form>
            </div>
        </div>
    </div>
  )
}

export default UserPerfil