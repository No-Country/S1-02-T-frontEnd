import React from "react";
import { Link } from 'react-router-dom';
import "./Navbar.scss";

const Navbar = () => {
	return (
		<nav className="navbar-container">
			<div className="nav-center">
				<h2 className="nav-left">Logo</h2>
				<ul className="nav-right">
					<li className="nav-link">Nuestros Especialistas</li>
					<li className="nav-link">Contacto</li>
					<li className="nav-link">Blog</li>
					<Link to='/Login' className="nav-link">Acceder</Link>
					<Link to='/registro' className="nav-link">Registrarse</Link>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
