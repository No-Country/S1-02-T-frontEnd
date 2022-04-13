import axios from "axios";
import { apiBaseUrl } from "../Utils/constants";

class AuthService {
	// === Register ===
	register(form) {
		const {
			email,
			password,
			first_name,
			last_name,
			dni,
			image_url,
			country,
			province,
			city,
		} = form;
		return axios.post(apiBaseUrl + "/auth/register", {
			email,
			password,
			first_name,
			last_name,
			dni,
			image_url,
			country,
			province,
			city,
		});
	}

	// === Login ===
	login(email, password) {
		return axios
			.post(apiBaseUrl + "/auth/login", { email, password })
			.then((response) => {
				if (response.data.token) {
					localStorage.setItem("user", JSON.stringify(response.data));
				}
			});
	}

	// === Logout ===
	logout() {
		localStorage.removeItem("user");
	}

	// === GetCurrentUser ===
	getCurrentUser() {
		return JSON.parse(localStorage.getItem("user"));
	}
}

export default new AuthService();
