import axios from "axios";
// import { useAuthStore } from "../store/authStore";

export const Api_Post = async (endpoint, payload, requiresAuth = false) => {
	try {
		const token = "test";

		const headers = {
			"Content-Type": "application/json",
			...(requiresAuth && token && { Authorization: `Bearer ${token}` }),
		};

		const response = await axios.post(
			`${process.env.API_URL}${endpoint}`,
			payload,
			{ headers }
		);

		return response.data;
	} catch (error) {
		// console.error(error.response.data);
		return error.response.data;
	}
};

// // Example usage functions
// export const loginUser = (payload) => {
// 	return makePostRequest("/Login/Login", payload, false); // Login doesn't need auth
// };

// export const updateProfile = (payload) => {
// 	return makePostRequest("/User/UpdateProfile", payload); // Uses auth by default
// };
