import React, { useState } from "react";
import "./Register.sass";

import { useNavigate } from "react-router-dom";
import authService from "../../../Services/auth.service";

const Register = () => {
	let navigate = useNavigate();
	const [data, setData] = useState({
		email: "",
		password: "",
		first_name: "",
		last_name: "",
		dni: 0,
		image_url: "",
		country: "",
		province: "",
		city: "",
	});

	// Handle Data:
	const handleData = (e) => {
		const newData = { ...data };
		newData[e.target.id] = e.target.value;
		setData(newData);
	};

	// onSubmit:
	const handleSubmit = (e) => {
		e.preventDefault();
		authService.register(data).then(
			(response) => {
				console.log(response);
			},
			(error) => {
				console.log(error);
			}
		);
	};

	return (
		<section className="section page-sect">
			<div className="section-center">
				<div className="section-title">
					<h2>Register</h2>
				</div>
			</div>
			<div className="form-container">
				<form onSubmit={handleSubmit} className="register-form">
					{/* Email */}
					<div className="single-input">
						<label htmlFor="username">Email</label>
						<input
							type="text"
							name="username"
							placeholder="E-mail"
							id="email"
							value={data.email}
							onChange={(e) => {
								handleData(e);
							}}
						/>
					</div>
					{/* Password */}
					<div className="single-input">
						<label htmlFor="password">Contraseña</label>
						<input
							type="text"
							name="password"
							placeholder="Ingrese su contraseña"
							value={data.password}
							id="password"
							onChange={(e) => {
								handleData(e);
							}}
						/>
					</div>
					{/* First_Name */}
					<div className="single-input">
						<label htmlFor="firstName">Nombre</label>
						<input
							type="text"
							name="first_name"
							placeholder="Ej: Cosme"
							value={data.first_name}
							id="first_name"
							onChange={(e) => {
								handleData(e);
							}}
						/>
					</div>
					{/* Last_Name */}
					<div className="single-input">
						<label htmlFor="last_name">Apellido</label>
						<input
							type="text"
							name="last_name"
							placeholder="Ej: Fulanito"
							value={data.last_name}
							id="last_name"
							onChange={(e) => {
								handleData(e);
							}}
						/>
					</div>
					{/* DNI */}
					<div className="single-input">
						<label htmlFor="dni">DNI</label>
						<input
							type="text"
							name="dni"
							placeholder="Ej: 35000000"
							value={data.dni}
							id="dni"
							onChange={(e) => {
								handleData(e);
							}}
						/>
					</div>
					{/* DNI */}
					<div className="single-input">
						<label htmlFor="country">Pais</label>
						<input
							type="text"
							name="country"
							placeholder="Ej: Argentina"
							value={data.country}
							id="country"
							onChange={(e) => {
								handleData(e);
							}}
						/>
					</div>
					{/* DNI */}
					<div className="single-input">
						<label htmlFor="province">Provincia</label>
						<input
							type="text"
							name="province"
							placeholder="Ej: Buenos Aires"
							value={data.province}
							id="province"
							onChange={(e) => {
								handleData(e);
							}}
						/>
					</div>
					{/* DNI */}
					<div className="single-input">
						<label htmlFor="city">Ciudad</label>
						<input
							type="text"
							name="city"
							placeholder="Ej: Olivos"
							value={data.city}
							id="city"
							onChange={(e) => {
								handleData(e);
							}}
						/>
					</div>
					<button type="submit" className="btn-pastel">
						Registro
					</button>
				</form>
			</div>
		</section>
	);
};

export default Register;
