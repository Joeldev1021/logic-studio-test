import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

export const carDatePost = async (data) => {
	return axios.post(`${BASE_URL}/`, data, {
		headers: { "Content-Type": "application/json" },
	});
};

export const getCardDate = async () => {
	return axios.get(`${BASE_URL}/`);
};
