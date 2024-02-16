import SchoolModel, { School } from '~/server/models/school';

/**
 * This function is an event handler for the GET /api/schools/get endpoint.
 * It retrieves a school based on the provided school ID 
 * @param event - The event object containing the query parameters.
 * @returns If the required parameters are missing, returns an error object with a message indicating the missing parameters.
 *          If the school is found, returns the school object.
 *          If an error occurs during the retrieval process, returns an error object with the error message.
 * @example
 * useFetch('api/schools/get?id=<school-id>')
 */
export default defineEventHandler(async (event) => {
	let params = getQuery(event); // Extract query parameters from the event object
	if (params.id === undefined) return { error: "Missing required parameter: id" }; // Return an error object with a message indicating the missing parameters

	try {
		const school: School | null = await SchoolModel.findById(params.id); // Find the school based on the provided school ID

		// Return the school object if it is found
		return school === null ? { error: "School not found" } : school;
	} catch (error: any) {
		if (error instanceof Error) { // Check if the error is an instance of the mongoose Error class
			return { // Return an error object with the error message
				error: error.message
			};
		}
	}
})