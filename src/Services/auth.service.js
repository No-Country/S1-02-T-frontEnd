import axios from "axios";
import { apiBaseUrl } from "../Utils/constants";

class AuthService {
	// === Register ===
	register(form) {
		delete form.user["image"];
		var userFormData = new FormData();
		userFormData.append(
			"user",
			new Blob([JSON.stringify(form.user)], { type: "application/json" })
		);
		userFormData.append("image", form.image);
		return axios
			.post(apiBaseUrl + "/auth/register", userFormData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			})
			.then((response) => {
				if (response.data.token) {
					localStorage.setItem("user", JSON.stringify(response.data));
				}
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
