import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.sass";

const Navbar = () => {
	return (
		<nav className="navbar-container">
			<div className="nav-center">
				<Link to="/" className="nav-left">
					Logo
				</Link>
				<ul className="nav-right">
					<li className="nav-link">Nuestros Especialistas</li>
					<li className="nav-link">Contacto</li>
					<li className="nav-link">Blog</li>
					<li className="nav-link">Acceder</li>
					<li className="nav-link">Registrarse</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
