import ReviewModel, { Review } from '~/server/models/review';

/**
 * This function is an event handler for the POST /api/reviews/create endpoint.
 * It creates a new review document in the database and returns the review object.
 * @param event - The event object from the API Gateway
 * @returns The review object or an error object
 * @example
 * useFetch('/api/reviews/create', {
 * 		method: 'POST',
 * 		body: JSON.stringify(<review-properties>),
 * })
 */
export default defineEventHandler(async (event) => {
	let body = await readBody(event); // Extract the request body from the event object
	try {
		const review: Review = await ReviewModel.create(body); // Create a new review document

		return review; // Return the review object
	} catch (e) {
		if (e instanceof Error) { // Check if the error is an instance of the mongoose Error class
			return { // Return an error object with the error message
				error: e.message
			};
		}
	}
})