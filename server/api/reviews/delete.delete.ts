import isAdmin from '~/server/config/isAdmin';
import ReviewModel, { Review } from '~/server/models/review';

/**
 * This function is an event handler for the DELETE /api/reviews/delete endpoint.
 * It deletes a review document from the database and returns the review object.
 * @param event - The event object from the API Gateway
 * @returns The review object or an error object
 * @example
 * useFetch('/api/reviews/delete?id=<review-id>')
 */
export default defineEventHandler(async (event) => {
	let param = getQuery(event); // Extract query parameters from the event object
	let { req } = event.node; // Extract the request object from the event object

    if (param.id === undefined) return { error: "No review ID provided!" }; // Check if the id parameter is provided

	try {
        if (!isAdmin(req.user?._id)) return { error: "Forbidden Request created!" };
        const review: Review | null = await ReviewModel.findByIdAndDelete(param.id); // Delete the review document

        return review; // Return the review object
	} catch (e) {
        if (e instanceof Error) { // Check if the error is an instance of the mongoose Error class
            return { // Return an error object with the error message
                error: e.message
            };
        }
	}
})