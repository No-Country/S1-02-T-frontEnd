import React from "react";

import Loading from "../../Components/Loading/Loading";
import Error from "../../Components/Error/Error";

import { useProfessionsContext } from "../../Context/professions_context";

const Professions = () => {
	// *** GET ***
	const {
		professions_loading: isLoading,
		professions_error: error,
		professions,
	} = useProfessionsContext();

	if (isLoading) {
		return <Loading></Loading>;
	}
	if (error) {
		return <Error></Error>;
	}
	return (
		<section className="section">
			<div className="section-center">
				<div className="section-title">
					<span>Servicios</span>
					<h2>Nuestras Profesiones</h2>
				</div>
				<div className="professions-container">
					{professions.map((singleProfession) => {
						return <h2 key={singleProfession.id}>{singleProfession.title}</h2>;
					})}
				</div>
			</div>
		</section>
	);
};

export default Professions;
