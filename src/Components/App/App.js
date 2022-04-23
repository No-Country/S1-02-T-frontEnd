import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import authService from "../../Services/auth.service";

import "./App.sass";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Homepage from "../../Pages/LandingPage/Homepage/Homepage";
import Error404 from "../../Pages/Error404/Error404";
import Dashboard from "../../Pages/Plataform/Dashboard/Dashboard";
import MisPacientes from "../../Pages/Plataform/ProfessionalPages/MisPacientes";
import MiAgenda from "../../Pages/Plataform/ProfessionalPages/MiAgenda";
import HistorialClinico from "../../Pages/Plataform/PatientPages/HistorialClinico";
import MisTurnos from "../../Pages/Plataform/PatientPages/MisTurnos";
import MisDoctores from "../../Pages/Plataform/PatientPages/MisDoctores";
import VerHistoriales from "../../Pages/Plataform/ProfessionalPages/VerHistoriales";
import UsuariosPage from "../../Pages/Plataform/AdminPages/UsuariosPage";
import ProfesionalesPage from "../../Pages/Plataform/AdminPages/ProfesionalesPage";
import Blog from "../Blog/Blog";
import BlogArticle from "../Blog/BlogArticle";
import MiTarjeta from "../../Pages/Plataform/Perfil/MiTarjeta";
import Login from "../../Pages/Auth/Login/Login";
import Register from "../../Pages/Auth/Register/Register";
import Calendario from "../../Pages/Plataform/Perfil/Calendario";
import MisProfesionales from "../../Pages/Plataform/Perfil/MisProfesionales";
import MiFacturacion from "../../Pages/Plataform/Perfil/MiFacturacion";

function App() {
	const [isLogged, setIsLogged] = useState(false);
	useEffect(() => {
		let user = authService.getCurrentUser();
		if (user) {
			setIsLogged(true);
		}
	}, []);
	return (
		<div>
			<BrowserRouter>
				<Navbar />
				<Routes>
					{!isLogged ? (
						<Route path="/" exact element={<Homepage> </Homepage>}></Route>
					) : (
						<React.Fragment>
							<Route
								path="/dashboard"
								exact
								element={<Dashboard> </Dashboard>}
							></Route>
							{/* Patient */}
							<Route
								path="/pat/mis-doctores"
								element={<MisDoctores></MisDoctores>}
							></Route>
							<Route
								path="/pat/mis-turnos"
								element={<MisTurnos></MisTurnos>}
							></Route>
							<Route
								path="/pat/historial"
								element={<HistorialClinico></HistorialClinico>}
							></Route>

							{/* Profesional */}
							<Route
								path="	"
								element={<MiAgenda></MiAgenda>}
							></Route>
							<Route
								path="/prof/mis-pacientes"
								element={<MisPacientes></MisPacientes>}
							></Route>
							<Route
								path="/prof/ver-historiales"
								element={<VerHistoriales></VerHistoriales>}
							></Route>

							{/* Admin */}
							<Route
								path="/adm/usuarios-list"
								element={<UsuariosPage></UsuariosPage>}
							></Route>
							<Route
								path="/adm/profesionales-list"
								element={<ProfesionalesPage></ProfesionalesPage>}
							></Route>
						</React.Fragment>
					)}
					<Route path="/" exact element={<Homepage> </Homepage>}></Route>
					<Route path="/ingreso" element={<Login> </Login>}></Route>
					<Route path="/registro" element={<Register></Register>}></Route>
					<Route path="/dashboard" element={<Dashboard> </Dashboard>}></Route>
					<Route path="/blog" element={<Blog />} />
					<Route path="/article" element={<BlogArticle />} />
					<Route path="/factura" element={<MiFacturacion />} />
					<Route path="*" element={<Error404></Error404>}></Route>
				</Routes>
				<Footer></Footer>
			</BrowserRouter>
		</div>
	);
}

export default App;
