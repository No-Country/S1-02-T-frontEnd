import axios from "axios";
import { apiBaseUrl } from "../Utils/constants";

class AuthService {
	// === Register ===
	register(form) {
		delete form.user["image"];

		console.log(form.user);
		console.log(form.image);

		var userFormData = new FormData();

		userFormData.append(
			"user",
			new Blob([form.user], { type: "application/json" })
		);
		if (form.image) {
			userFormData.append("image", form.image, form.image.name);
		} else {
			userFormData.append("image", null);
		}
		// Display the key/value pairs
		new Response(userFormData).text().then(console.log); // To see the entire raw body

		return axios.post(apiBaseUrl + "/auth/register", userFormData, {
			headers: {
				"Content-Type": "multipart/form-data",
			},
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
