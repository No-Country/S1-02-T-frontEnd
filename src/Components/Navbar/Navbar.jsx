import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

import "./Navbar.sass";
import Logox1 from "../../Assets/Logox1.png";
import Sidebar from "../Sidebar/Sidebar";

import { ScrollToTopOnClick, ScrollToView } from "../../Utils";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const scrollIDs = ["esp", "prof", "cont"];

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
				</div>
			</nav>
			{isOpen && (
				<Sidebar closeFunction={closeSidebar} scrollList={scrollIDs}></Sidebar>
			)}
		</React.Fragment>
	);
};

export default Navbar;
