import React from 'react'
import './Registro.scss'
const Registro = () => {
  return (
    <div className='container mt-3'>
      <div className='row formulario'>
          <div className='col-md-2'>
             <input className='' type='text' name='nombre' placeholder='Nombre' />
             <input type='email' name='email' placeholder='Correo' />
          </div>
          <div className='col-md-10'>
          <input type='text' name='apellido' placeholder='Apellido' />
             <input type='password' name='password' placeholder='Contrasena' />
          </div>
          <button className='btn-registro'>Registrarse</button>
      </div>
      
    </div>
  )
}

export default Registro