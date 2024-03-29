import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

import { bannerImageUrl } from "../../../Utils/constants";
import "./Banner.sass";

const Banner = () => {
	return (
		<div className="home-container">
			<div className="home-center">
				<div className="banner-img-container">
					<div className="img-overlay"></div>
					<img src={bannerImageUrl} alt="TeleMed" />
				</div>
				<div className="home-left">
					<h2 className="home-text">
						<span>Quiero</span> que alguien me guíe!
					</h2>
					<button className="btn-pastel">
						únete
						<Link id="btnArrow" to={`/registro`}></Link>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Banner;
