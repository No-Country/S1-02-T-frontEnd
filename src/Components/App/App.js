import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.sass";

import { ErrorPage, Homepage } from "../../Pages";
import Footer from "../Footer/Footer";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" exact element={<Homepage></Homepage>}></Route>
					<Route path="*" element={<ErrorPage></ErrorPage>}></Route>
				</Routes>
			</BrowserRouter>
			<Footer></Footer>
		</div>
	);
}

export default App;
