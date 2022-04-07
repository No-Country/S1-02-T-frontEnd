import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.sass";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Login from "../Login/Login"
import { Registro } from "../Registro/Registro";
import Homepage from "../../Pages/LandingPage/Homepage/Homepage";
import Error404 from "../../Pages/Error404/Error404";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" exact element={<Homepage></Homepage>}></Route>
					<Route path="/Login" element={<Login />} />
					<Route path="/Registro" element={<Registro />} />
					
					<Route path="*" element={<Error404></Error404>}></Route>
				</Routes>
				<Footer></Footer>
			</BrowserRouter>
		</div>
	);
}

export default App;
