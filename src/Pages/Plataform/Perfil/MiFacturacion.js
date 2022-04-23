import React from 'react'
import profesional from "../../../img/profesional.png"

const MiFacturacion = () => {
  return (
    <div className='tabla'>
      <table class="table table-borderless">
        <thead>
          <tr>
            <th scope='col'>Foto</th>
            <th scope='col'>Nombre Profesional</th>
            <th scope='col'>Fecha</th>
            <th scope='col'>Estado</th>
            <th scope='col'>Precio</th>
            <th scope='col'>Más info</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img src={profesional} alt="imagen de perfil"/>
            </td>
            <td>Kristen Watson</td>
            <td>10 de abril , 2022</td>
            <td>
              Pagado
            </td>
            <td>$3500</td>
            <td>
              <button className='btn-light'>Detalle</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default MiFacturacion