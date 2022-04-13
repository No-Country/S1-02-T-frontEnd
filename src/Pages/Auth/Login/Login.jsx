import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../../../Services/auth.service";
import "./Login.sass";

const Login = () => {
	let navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	// Form:
	const onChangeUsername = (e) => {
		const email = e.target.value;
		setEmail(email);
	};
	const onChangePassword = (e) => {
		const password = e.target.value;
		setPassword(password);
	};

	// onSubmit:
	const handleSubmit = (e) => {
		e.preventDefault();
		authService.login(email, password).then(
			() => {
				navigate("/user-dashboard");
				window.location.reload();
			},
			(error) => {
				const myErr = error.response.data;
				console.log(myErr.error);
				console.log(myErr.status);
			}
		);
	};

	return (
		<section className="section page-sect">
			<div className="section-center">
				<div className="section-title">
					<h2>Login</h2>
				</div>
				<div className="form-container">
					<form onSubmit={handleSubmit} className="login-form">
						<input
							type="text"
							name="username"
							value={email}
							onChange={onChangeUsername}
						/>
						<input
							type="text"
							name="password"
							value={password}
							onChange={onChangePassword}
						/>
						<button type="submit"> Enviar</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Login;
