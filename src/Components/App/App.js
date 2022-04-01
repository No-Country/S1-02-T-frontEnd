import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.sass";
import Navbar from "../Navbar/Navbar";

import { ErrorPage, Homepage } from "../../Pages";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import { Registro } from "../Registro/Registro";

function App() {
	return (
		<div>
			<Navbar />
			<BrowserRouter>
				<Routes>
					<Route path="/" exact element={<Homepage></Homepage>}></Route>
					<Route path="*" element={<ErrorPage></ErrorPage>}></Route>
					<Route path="/Login" element={<Login />} />
					<Route path="/Registro" element={<Registro />} />
					
				</Routes>
			</BrowserRouter>
			<Footer></Footer>
		</div>
	);
}

export default App;
