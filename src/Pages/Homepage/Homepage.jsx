import React, { Fragment } from "react";
import "./Homepage.sass";
import { BsArrowRight } from "react-icons/bs";

import Services from "../Services/Services";

import { bannerImageUrl } from "../../Utils/constants";
import Professions from "../Professions/Professions";

const Homepage = () => {
	return (
		<Fragment>
			<div className="home-container">
				<div className="home-left">
					<h2 className="home-text">
						<span>Quiero</span> que alguien me guíe!
					</h2>
					<button className="btn-pastel">
						Probar
						<BsArrowRight id="btnArrow"></BsArrowRight>
					</button>
				</div>
				<div className="home-right">
					<img src={bannerImageUrl} alt="HomepageBanner" />
				</div>
			</div>
			<Services></Services>
			<Professions></Professions>
		</Fragment>
	);
};

export default Homepage;
