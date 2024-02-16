import SchoolModel, { School } from '~/server/models/school';

/**
 * This function is an event handler for the POST /api/schools/create endpoint.
 * It creates a new review document in the database and returns the review object.
 * @param event - The event object from the API Gateway
 * @returns The review object or an error object
 * @example
 * useFetch('/api/schools/create', {
 * 		method: 'POST',
 * 		body: JSON.stringify(<review-properties>),
 * })
 */
export default defineEventHandler(async (event) => {
	let body = await readBody(event); // Extract the request body from the event object
	try {
		const school: School = await SchoolModel.create(body); // Create a new school document

		return school; // Return the school object
	} catch (e) {
		if (e instanceof Error) { // Check if the error is an instance of the mongoose Error class
			return { // Return an error object with the error message
				error: e.message
			};
		}
	}
})