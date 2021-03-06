const axios = require("axios");

async function get(req, res, next) {
	return await axios
		.get(
			`http://5ba1adacee710f0014dd767e.mockapi.io/tags/${req.params.id || ""}`
		)
		.then(function(response) {
			return res.json(response.data);
		})
		.catch(function(error) {
			return error;
		});
}
async function create(req, res) {
	const params = req.body;
	return await axios
		.post(`http://5ba1adacee710f0014dd767e.mockapi.io/tags/`, params, {
			headers: {
				"Content-Type": "application/json"
			}
		})
		.then(function(response) {
			return res.json(response.data);
		})
		.catch(function(error) {
			return error;
		});
}

async function delet(req, res, next) {
	return await axios
		.delete(`http://5ba1adacee710f0014dd767e.mockapi.io/tags/${req.params.id}`)
		.then(function(response) {
			return res.json(response.data);
		})
		.catch(function(error) {
			return error;
		});
}
module.exports = { get, create, delet };
