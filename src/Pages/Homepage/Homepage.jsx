import React, { Fragment } from "react";
import "./Homepage.sass";

import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import Professions from "../Professions/Professions";

import { ProfessionsProvider } from "../../Context/professions_context";

const Homepage = () => {
	return (
		<Fragment>
			<Banner></Banner>
			<Services></Services>
			<ProfessionsProvider>
				<Professions></Professions>
			</ProfessionsProvider>
		</Fragment>
	);
};

export default Homepage;
