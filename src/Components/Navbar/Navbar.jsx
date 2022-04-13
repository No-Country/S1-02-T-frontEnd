import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import "./Navbar.sass";
import Logox1 from "../../Assets/Logox1.png";
import Sidebar from "../Sidebar/Sidebar";

import authService from "../../Services/auth.service";
import { ScrollToTopOnClick, ScrollToView } from "../../Utils";

const Navbar = () => {
	let navigate = useNavigate();
	const scrollIDs = ["esp", "prof", "cont"];
	const [isOpen, setIsOpen] = useState(false);
	const [showPatientBoard, setShowPatientBoard] = useState(false);
	const [showProfessionalBoard, setShowProfessionalBoard] = useState(false);
	const [showAdminBoard, setShowAdminBoard] = useState(false);
	const [currentUser, setCurrentUser] = useState(undefined);

	useEffect(() => {
		const user = authService.getCurrentUser();
		if (user) {
			setCurrentUser(user);
			if (user.roleName[0].authority === "ROLE_USER") {
				setShowPatientBoard(true);
			}
			if (user.roleName[0].authority === "ROLE_PROFESSIONAL") {
				setShowProfessionalBoard(true);
			}
			if (user.roleName[0].authority === "ROLE_ADMIN") {
				setShowAdminBoard(true);
			}
		}
	}, []);

	const openSidebar = () => {
		setIsOpen(true);
	};

	const closeSidebar = () => {
		setIsOpen(false);
	};

	const handleLogout = () => {
		authService.logout();
		navigate("/");
		window.location.reload();
	};

	return (
		<React.Fragment>
			<nav className="navbar-container">
				<div className="nav-center">
					<Link
						to="/"
						className="nav-left"
						onClick={() => {
							ScrollToTopOnClick();
						}}
					>
						<img src={Logox1} alt="TeleMed" />
					</Link>
					<div
						className="nav-ham"
						onClick={() => {
							openSidebar();
						}}
					>
						<AiOutlineMenu></AiOutlineMenu>
					</div>
					{/* PUBLIC Bar */}
					{!currentUser && (
						<ul className="nav-right">
							<li
								onClick={() => {
									ScrollToView(scrollIDs[0]);
								}}
								className="nav-link"
							>
								Nuestros Especialistas
							</li>
							<li className="nav-link">
								<Link
									to="/"
									onClick={() => {
										ScrollToTopOnClick();
									}}
								>
									Blog
								</Link>
							</li>
							<li
								onClick={() => {
									ScrollToView(scrollIDs[2]);
								}}
								className="nav-link"
							>
								Contacto
							</li>
							<li className="nav-link">
								<Link
									to="/ingreso"
									onClick={() => {
										ScrollToTopOnClick();
									}}
								>
									Acceder
								</Link>
							</li>
							<li className="nav-link">
								<Link
									to="/registro"
									onClick={() => {
										ScrollToTopOnClick();
									}}
								>
									Registro
								</Link>
							</li>
						</ul>
					)}
					{/* PATIENT Bar */}
					{showPatientBoard && (
						<ul className="nav-right">
							<li onClick={() => {}} className="nav-link">
								Mi Perfil
							</li>
							<li className="nav-link">
								<Link to="/" onClick={() => {}}>
									Mis Turnos
								</Link>
							</li>
							<li onClick={() => {}} className="nav-link">
								Mis Doctores
							</li>
							<li className="nav-link">
								<Link to="/ingreso" onClick={() => {}}>
									Historial Clinico
								</Link>
							</li>
							<li className="nav-link" onClick={handleLogout}>
								Salir
							</li>
						</ul>
					)}
					{/* PROFESSIONAL Bar */}
					{showProfessionalBoard && (
						<ul className="nav-right">
							<li onClick={() => {}} className="nav-link">
								Mi Perfil
							</li>
							<li className="nav-link">
								<Link to="/" onClick={() => {}}>
									Mi Agenda
								</Link>
							</li>
							<li onClick={() => {}} className="nav-link">
								Mis Pacientes
							</li>
							<li className="nav-link">
								<Link to="/ingreso" onClick={() => {}}>
									QR Historial Clinico
								</Link>
							</li>
							<li className="nav-link" onClick={handleLogout}>
								Salir
							</li>
						</ul>
					)}
					{/* ADMIN Bar */}
					{showAdminBoard && (
						<ul className="nav-right">
							<li onClick={() => {}} className="nav-link">
								Usuarios
							</li>
							<li className="nav-link">
								<Link to="/" onClick={() => {}}>
									Profesionales
								</Link>
							</li>
							<li className="nav-link" onClick={handleLogout}>
								Salir
							</li>
						</ul>
					)}
				</div>
			</nav>
			{isOpen && (
				<Sidebar
					closeFunction={closeSidebar}
					scrollList={scrollIDs}
					isLogged={currentUser}
					showPatientBoard={showPatientBoard}
					showAdminBoard={showAdminBoard}
					showProfessionalBoard={showProfessionalBoard}
				></Sidebar>
			)}
		</React.Fragment>
	);
};

export default Navbar;
