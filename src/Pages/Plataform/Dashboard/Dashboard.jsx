import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.sass";

import profilePlaceholder from "../../../Assets/profilePlaceholder.jpeg";

import Loading from "../../../Components/Loading/Loading";

import authService from "../../../Services/auth.service";
import userService from "../../../Services/user.service";
import MiTarjeta from "../Perfil/MiTarjeta";

const Dashboard = () => {
	let navigate = useNavigate();
	const [role, setRole] = useState(null);
	const [meData, setMeData] = useState(null);

	useEffect(() => {
		userService.getMeData().then(
			(response) => {
				setMeData(response.data);
				response.data.roles.map((singleRole) => {
					if (singleRole.name === "ROLE_PATIENT") {
						setRole("patient");
					}
					if (singleRole.name === "ROLE_PROFESSIONAL") {
						setRole("professional");
					}
					if (singleRole.name === "ROLE_ADMIN") {
						setRole("admin");
					}
				});
			},
			(error) => {
				console.log(error);
			}
		);
	}, []);

	const handleLogout = () => {
		authService.logout();
		navigate("/");
		window.location.reload();
	};

	// Methods:
	const fullName = (first, last) => {
		return first + " " + last;
	};
	const fullVivienda = (prov, city) => {
		return prov + ", " + city;
	};

	// === PATIENT ===
	if (role === "patient") {
		const {
			username,
			email,
			image_url,
			firt_name,
			last_name,
			date,
			state,
			price,
			dni,
			age,
			country,
			province,
			city,
			id,
		} = meData;
		return (
			<section className="section page-sect">
				<div className="section-center">
					<div className="section-title">
						<span>{fullName(firt_name, last_name)}</span>
						<h2>Mi Perfil </h2>
					</div>
					<div className="main-container">
						{/* Img, Name */}
						<hr />
						<div className="data-container">
							<img src={image_url || profilePlaceholder} alt="Imagen Perfil" />
							<div className="data">
								<h2>{fullName(firt_name, last_name)}</h2>
								<h3>{fullVivienda(province, country)}</h3>
							</div>
						</div>
						<hr />
						{/* Profesionales */}
						<article className="single-block">
							<h2 className="section-title subtitle">Mis Profesionales</h2>
							<div>
								<h2>{fullName(firt_name, last_name)}</h2>
							</div>
							<div>
								<button className="btn-solid">Agendar Cita</button>
							</div>

						</article>
						{/* Facturacion */}
						<article className="single-block">
							<h2 className="section-title subtitle">Mi Facturación</h2>
							<tr>
								<td>{image_url}</td>
								<td>{firt_name}</td>
								<td>{date}</td>
								<td>{state}</td>
								<td>{price}</td>
							</tr>
							
						</article>
						{/* Tarjetas */}
						<article className="single-block">
							<h2 className="section-title subtitle">Mis Tarjetas</h2>
								<MiTarjeta />

						</article>
						{/* Calendar */}
						<article className="single-block">
							<h2 className="section-title subtitle">Calendario</h2>
						</article>
						<button
							type="submit"
							onClick={() => {
								handleLogout();
							}}
							className="btn-pastel"
						>
							Logout
						</button>
					</div>
				</div>
			</section>
		);
	}

	// === PROFESSIONAL ===
	if (role === "professional") {
		const {
			username,
			email,
			image_url,
			firt_name,
			last_name,
			dni,
			age,
			country,
			province,
			city,
			id,
		} = meData;
		return (
			<section className="section page-sect">
				<div className="section-center">
					<div className="section-title">
						<span>{fullName(firt_name, last_name)}</span>
						<h2>Mi Perfil </h2>
					</div>
					<div className="main-container">
						{/* Img, Name */}
						<hr />
						<div className="data-container">
							<img src={image_url || profilePlaceholder} alt="Imagen Perfil" />
							<div className="data">
								<h2>{fullName(firt_name, last_name)}</h2>
								<h3>{fullVivienda(province, country)}</h3>
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
						<hr />
						{/* Turnos */}
						<article className="single-block">
							<h2 className="section-title subtitle">Proximos Turnos</h2>
						</article>
						{/* Calendario */}
						<article className="single-block">
							<h2 className="section-title subtitle">Calendario</h2>
						</article>
						<button type="submit" onClick={handleLogout} className="btn-pastel">
							Logout
						</button>
					</div>
				</div>
			</section>
		);
	}

	// === ADMIN ===
	if (role === "admin") {
		const {
			username,
			email,
			image_url,
			firt_name,
			last_name,
			dni,
			age,
			country,
			province,
			city,
			id,
		} = meData;
		return (
			<section className="section page-sect">
				<div className="section-center">
					<div className="section-title">
						<span>{fullName(firt_name, last_name)}</span>
						<h2>Mi Perfil </h2>
					</div>
					<div className="main-container">
						{/* Img, Name */}
						<hr />
						<div className="data-container">
							<img src={image_url || profilePlaceholder} alt="Imagen Perfil" />
							<div className="data">
								<h2>{fullName(firt_name, last_name)}</h2>
								<h3>{fullVivienda(province, country)}</h3>
							</div>
						</div>
						<hr />
						{/* Usuarios */}
						<article className="single-block">
							<h2 className="section-title subtitle">Lista Usuarios</h2>
						</article>
						{/* Profesionales */}
						<article className="single-block">
							<h2 className="section-title subtitle">Lista Profesionales</h2>
						</article>
						<button type="submit" onClick={handleLogout} className="btn-pastel">
							Logout
						</button>
					</div>
				</div>
			</section>
		);
	} else {
		return <Loading isPage={true}></Loading>;
	}
};

export default Dashboard;
