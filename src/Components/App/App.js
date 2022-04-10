import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.sass";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Homepage from "../../Pages/LandingPage/Homepage/Homepage";
import Login from "../../Pages/Auth/Login/Login";
import Register from "../../Pages/Auth/Register/Register";
import { Error404 } from "../../Pages";

function App() {
	
		return (
			<div>
				<BrowserRouter>
					<Navbar />
					<Routes>
						<Route path="/" exact element={<Homepage> </Homepage>}></Route>
						<Route path="/ingreso" element={<Login> </Login>}></Route>
						<Route path="/registro" element={<Register> </Register>}></Route>
						<Route path="*" element={<Error404></Error404>}></Route>
					</Routes>
					<Footer></Footer>
				</BrowserRouter>
			</div>
		);
}

export default App;
