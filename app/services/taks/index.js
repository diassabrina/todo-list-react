import axios from "axios";

export function get(id) {
	return axios
		.get(`http://localhost:3000/tasks${id || ""}`)
		.then(function(response) {
			return res.json(response.data);
		})
		.catch(function(error) {
			return error;
		});
}
export async function edit(id, params) {
	return await axios
		.post(
			`http://localhost:3000/tasks/edit/${id || ""}`,
			{ ...params },
			{ headers: { "Content-Type": "application/json" } }
		)
		.then(function(response) {
			return res.json(response.data);
		})
		.catch(function(error) {
			return error;
		});
}

export async function create(id, params) {
	return await axios
		.post(
			`http://localhost:3000/tasks/create`,
			{ ...params },
			{ headers: { "Content-Type": "application/json" } }
		)
		.then(function(response) {
			return res.json(response.data);
		})
		.catch(function(error) {
			return error;
		});
}

export async function delet(id) {
	return await axios
		.post(`http://localhost:3000/tasks/delete/${id || ""}`)
		.then(function(response) {
			return res.json(response.data);
		})
		.catch(function(error) {
			return error;
		});
}
