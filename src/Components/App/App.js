import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.sass";
import Navbar from '../Navbar/Navbar'


import { ErrorPage, Homepage } from "../../Pages";

function App() {
	return (
		<div>
			<Navbar/>
			<BrowserRouter>
				<Routes>
					<Route path="/" exact element={<Homepage></Homepage>}></Route>
					<Route path="*" element={<ErrorPage></ErrorPage>}></Route>
					
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
