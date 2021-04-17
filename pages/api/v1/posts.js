export default async (request, response) => {
	if (request.method === 'POST') {
		const postData = JSON.parse(request.body);
		// console.log(postData);

		return response.json({
			status: 'Saving Post to DB!',
			...postData,
		});
	} else {
		const data = await fetch('https://jsonplaceholder.typicode.com/posts')
			.then((response) => response.json())
			.then((data) => data.slice(0, 20));
		return response.status(200).json({ data });
	}
};
/*
import axios from 'axios';

export default async (req, res) => {
	if (req.method === 'POST') {
		const postData = JSON.parse(req.body);
		console.log(postData);

		return res.json({
			status: 'Saving Post to DB!',
			...postData,
		});
	} else {
		const response = await axios.get(
			'https://jsonplaceholder.typicode.com/posts'
		);
		const posts = response.data;

		return res.json({ data: posts.slice(0, 20) });
	}
};
*/
