import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PatientDashboard.sass";
import authService from "../../../Services/auth.service";

const PatientDashboard = () => {
	let navigate = useNavigate();
	const [email, setEmail] = useState(null);
	const [role, setRole] = useState(null);

	useEffect(() => {
		const myUser = authService.getCurrentUser();
		setEmail(myUser.email);
		setRole(myUser.roleName[0].authority);
	}, []);

	const handleLogout = () => {
		navigate("/");
		authService.logout();
	};

	return (
		<section className="section page-sect">
			<div className="section-center">
				<div className="section-title">
					<span>{email}</span>
					<h2>Patient Dashboard</h2>
				</div>
				<h2>{role}</h2>
			</div>

			<button type="submit" onClick={handleLogout}>
				Logout
			</button>
		</section>
	);
};

export default PatientDashboard;
