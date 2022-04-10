import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

import "./Navbar.sass";
import Logox1 from "../../Assets/Logox1.png";
import Sidebar from "../Sidebar/Sidebar";

import ScrollToTopOnClick from "../../Utils/ScrollToTopOnClick";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const openSidebar = () => {
		setIsOpen(true);
	};
	const closeSidebar = () => {
		setIsOpen(false);
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
					<ul className="nav-right">
						<Link to="/" className="nav-link">
							Nuestros Especialistas
						</Link>
						<Link to="/" className="nav-link">
							Blog
						</Link>
						<Link to="/" className="nav-link">
							Contacto
						</Link>
						<Link to="/" className="nav-link">
							Acceder
						</Link>
						<Link to="/" className="nav-link">
							Registro
						</Link>
					</ul>
				</div>
			</nav>
			{isOpen && <Sidebar closeFunction={closeSidebar}></Sidebar>}
		</React.Fragment>
	);
};

export default Navbar;
