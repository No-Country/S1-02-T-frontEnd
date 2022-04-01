import React from "react";
import "./Homepage.sass";
import { BsArrowRight } from "react-icons/bs";

import { bannerImageUrl } from "../../Utils/constants";

const Homepage = () => {
	return (
		<section className="homepage">
			<div className="homepage-center">
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
		</section>
	);
};

export default Homepage;
