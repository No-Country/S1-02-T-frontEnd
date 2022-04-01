import React from 'react'
import './Registro.scss'

export const Registro = () => {
  return (
    <div>
        <div className='registro'>
            <div className='row'>
                <form className='Formulario'>
                    <div className='col'>
                        <input  type='text' name='Nombre' placeholder='Nombre' />
                        <input type='text' name='Apellido' placeholder='Apellido' />
                        
                        

                    </div>
                    <div className='col'>
                        
                        <input type='text' name="fecha_nacimiento" placeholder="Fecha de Nacimiento"/>
                        <input type='tel' name="telefono" placeholder="Teléfono"/>
                        
                    </div>
                    <div className='col'>
                        <input type='email' name='email' placeholder='Email' />
                        <input  type='password' name='password' placeholder='Contraseña' />
                    </div>
                   <button className='registro_buton'>Registrarse</button>
                    
                </form>
            </div>
        </div>
    </div>
  )
}
