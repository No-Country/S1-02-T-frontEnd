import React from "react";
import perfil from "../../../img/perfil.png"
import profesional from "../../../img/profesional.png"
import QR from "../../../img/qr.png"
import "./PatientPages.sass";

const HistorialClinico = () => {
	return (
		<section className="section page-sect">
			<div className="section-center">
				<div className="section-title">
					<span>PATIENT</span>
					<h2>Historial Clinico</h2>
				</div>
				<div className="historial-container">
					<div>
						<img className="persona" src={perfil} alt="imagen paciente"/>
						<h3>Lucas Albertengo</h3>
						<p>Buenos Aires</p>
					</div>
					<div>
						<img src={QR} alt=""/>
					</div>
				</div>
				<div className="contenedorHistoria2">
					<div>
						<h2>Proximos turnos</h2>
						<img src={profesional} alt="" />
						<p>Kristen Watson</p>
						<p>15:30hs</p>
					</div>
					<div>
						<h4>jueves 28 de Abril 2022</h4>
					</div>
					<div>
						<button className="btn-pastel">Confirmado</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HistorialClinico;
