import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.sass";
import Navbar from "../Navbar/Navbar";

import { Error404, Homepage } from "../../Pages";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Registro from "../Registro/Registro";

function App() {
	return (
		<div>
				<BrowserRouter>
			<Navbar />
				<Routes>
					<Route path="/" exact element={<Homepage></Homepage>}></Route>
					<Route path="*" element={<Error404></Error404>}></Route>
					<Route path="/login" element={<Login />}></Route>
					<Route path="/registro" element={<Registro />}></Route>
					
				</Routes>
			</BrowserRouter>
			<Footer></Footer>
		</div>
	);
}

export default App;
