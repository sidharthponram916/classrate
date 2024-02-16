import ReviewModel, { type Review } from '~/server/models/review';

/**
 * Retrieves a review based on the provided review ID.
 * @param event - The event object containing the query parameters.
 * @returns If the required parameters are missing, returns an error object with a message indicating the missing parameters.
 *          If the review is found, returns the review object.
 *          If an error occurs during the retrieval process, returns an error object with the error message.
 * @example
 * useFetch('api/reviews/get?id=<review-id>')
 */
export default defineEventHandler(async (event) => {
	let params = getQuery(event); // Extract query parameters from the event object
	if (!params.id) {
		return { // Return an error object with a message indicating the missing parameters
			error: "Missing required parameter: id"
		};
	}

	try {
		const review: Review | null = await ReviewModel.findById(params.id); // Find the review based on the provided review ID

		// Return the review object if it is found
		return review === null ? { error: "Course not found" } : review;
	} catch (error: any) {
		if (error instanceof Error) { // Check if the error is an instance of the mongoose Error class
			return { // Return an error object with the error message
				error: error.message
			};
		}
	}
})