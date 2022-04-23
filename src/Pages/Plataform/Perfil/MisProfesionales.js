import React from 'react'
import "./MisProfesionales.sass"
import profesional from "../../../img/profesional.png"


const MisProfesionales = () => {

  return (
    <div>
        <div className='profesionales-container'>
          <div>
            <img src={profesional} alt="foto profesional" />
            <h2>Kristen Watson</h2>
            <p>Psicologa</p>
          </div>
          <div>
            <button className='btn-pastel'>Agendar cita</button>
          </div>
            
            
        </div>
    </div>
  )
}

export default MisProfesionales