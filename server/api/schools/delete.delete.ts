import isAdmin from '~/server/config/isAdmin';
import SchoolModel, { School } from '~/server/models/school';

/**
 * This function is an event handler for the DELETE /api/schools/delete endpoint.
 * It deletes a school document from the database and returns the school object.
 * @param event - The event object from the API Gateway
 * @returns The school object or an error object
 * @example
 * useFetch('/api/schools/delete?id=<school-id>')
 */
export default defineEventHandler(async (event) => {
	let param = getQuery(event); // Extract query parameters from the event object
	let { req } = event.node; // Extract the request object from the event object

    if (param.id === undefined) return { error: "No school ID provided!" }; // Check if the id parameter is provided

	try {
        if (!isAdmin(req.user?._id)) return { error: "Forbidden Request created!" };
        const school: School | null = await SchoolModel.findByIdAndDelete(param.id); // Delete the school document

        return school; // Return the school object
	} catch (e) {
        if (e instanceof Error) { // Check if the error is an instance of the mongoose Error class
            return { // Return an error object with the error message
                error: e.message
            };
        }
	}
})