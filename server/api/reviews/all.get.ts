import ReviewModel, { Review } from '~/server/models/review';

/**
 * This function is a event handler for the GET /api/reviews/all endpoint.
 * It retrieves all reviews from the database.
 * @param _event - The event object.
 * @returns A promise that resolves to an array of Review objects if successful, or an error object if there was an error.
 * @example
 * useFetch('api/reviews/all')
 */
export default defineEventHandler(async (_event) => {
	try {
		const reviews: Review[] = await ReviewModel.find(); // Find all reviews in the database

		return reviews; // Return the array of reviews
	} catch (e: any) {
		return { // Return an error object with the error message
			error: e.toString()
		}
	}
})