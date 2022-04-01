import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.sass";
import Navbar from "../Navbar/Navbar";

import { Error404, Homepage } from "../../Pages";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";

function App() {
	return (
		<div>
			<Navbar />
			<BrowserRouter>
				<Routes>
					<Route path="/" exact element={<Homepage></Homepage>}></Route>
					<Route path="*" element={<Error404></Error404>}></Route>
					<Route path="/login" element={<Login />}></Route>
					
				</Routes>
			</BrowserRouter>
			<Footer></Footer>
		</div>
	);
}

export default App;
