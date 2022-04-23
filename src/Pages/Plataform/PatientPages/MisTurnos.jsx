import React from "react";

import "./PatientPages.sass";
import profesional from "../../../img/profesional.png"
import { Link } from "react-router-dom";

const MisTurnos = () => {
	return (
		<section className="section page-sect">
			<div className="section-center">
				<div className="section-title">
					<span>PATIENT</span>
					<h2>Mis Turnos</h2>
				</div>
				<h2>Proximos Turnos</h2>
				<div className='turnos-container'>
				<div>
					<img src={profesional} alt="foto profesional" />
					<h2>Kristen Watson</h2>
					<p>Psicologa</p>
				</div>
				<div>
					<p>jueves 28 de Abril 2022</p>
				</div>
				<div>
					<Link className="btn-pastel" to={`/pat/historial`}>Confirmar turno </Link>
				</div>
					
					
				</div>
					
			</div>
		</section>
	);
};

export default MisTurnos;
