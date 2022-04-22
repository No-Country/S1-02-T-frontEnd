import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Login.scss'
import "./Login.sass"
import logoInicio from "../../img/iconoCiudadanos.png"
import authService from '../../Services/auth.service';



const Login = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const onChangeUsername = (e) => {
		const email = e.target.value;
		setEmail(email);
	};
	const onChangePassword = (e) => {
		const password = e.target.value;
		setPassword(password);
	};
 

  const handleSubmit = (e) => {
		e.preventDefault();
		authService.login(email, password).then(
			() => {
				navigate("/dashboard");
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
    <div>
        <div>
        <img className="icono" src="" alt="logo" />
        <div className="container">
          <div className="img">
            <img src={logoInicio} alt="img login" />
          </div>
			<section className="section page-sect">
					<div className="section-center">
						<div className="section-title">
					<span>Nuestra Plataforma</span>
					<h2>Ingreso</h2>
						</div>
					<div className="form-container">
						<form onSubmit={handleSubmit} className="login-form">
							<div className="single-input">
								<label htmlFor="username">Email</label>
								<input
									type="text"
									name="username"
									placeholder="E-mail"
									value={email}
									onChange={onChangeUsername}
								/>
							</div>
							<div className="single-input">
								<label htmlFor="password">Contraseña</label>
								<input
									type="text"
									name="password"
									placeholder="Ingrese su contraseña"
									value={password}
									onChange={onChangePassword}
								/>
							</div>
							<button type="submit" className="btn-pastel">
								{" "}
								Ingresar
							</button>
						</form>
					</div>
				</div>
			</section>
        </div>
      </div>
    </div>
  )
}

export default Login