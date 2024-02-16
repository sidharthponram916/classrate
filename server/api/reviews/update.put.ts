import isAdmin from "~/server/config/isAdmin";
import ReviewModel, { Review } from "~/server/models/review";

/** 
 * This function is an event handler for the PUT /api/reviews/update endpoint.
 * It updates a review document in the database and returns the review object.
 * @param event - The event object from the API Gateway
 * @returns The review object or an error object
 * @example
 * useFetch('/api/reviews/update?id=<review-id>', {
 *      method: 'PUT'
 *      body: JSON.stringify(<review-properties>)
 * })
*/
export default defineEventHandler(async (event) => {
	let param = getQuery(event); // Extract query parameters from the event object
	let body = await readBody(event); // Extract the request object from the event object
    let req = event.node.req; // Extract the request object from the event object

    if (param.id === undefined) return { error: "No review ID provided!" }; // Check if the id parameter is provided

	try {
        if (!isAdmin(req.user?._id)) return { error: "Forbidden Request created!" }; // Check if the user is an admin
        const review: Review | null = await ReviewModel.findByIdAndUpdate(param.id, body); // Update the review document

        return review; // Return the review object
	} catch (e) {
        if (e instanceof Error) { // Check if the error is an instance of the mongoose Error class
            return { // Return an error object with the error message
                error: e.message
            };
        }
	}
})