import isAdmin from "~/server/config/isAdmin";
import SchoolModel, { School } from "~/server/models/school";

/** 
 * This function is an event handler for the PUT /api/schools/update endpoint.
 * It updates a school document in the database and returns the school object.
 * @param event - The event object from the API Gateway
 * @returns The school object or an error object
 * @example
 * useFetch('/api/schools/update?id=<school-id>', {
 *      method: 'PUT'
 *      body: JSON.stringify(<school-properties>)
 * })
*/
export default defineEventHandler(async (event) => {
	let param = getQuery(event); // Extract query parameters from the event object
	let body = await readBody(event); // Extract the request object from the event object
    let req = event.node.req; // Extract the request object from the event object

    if (param.id === undefined) return { error: "No school ID provided!" }; // Check if the id parameter is provided

	try {
        if (!isAdmin(req.user?._id)) return { error: "Forbidden Request created!" }; // Check if the user is an admin
        const school: School | null = await SchoolModel.findByIdAndUpdate(param.id, body); // Update the school document

        return school; // Return the school object
	} catch (e) {
        if (e instanceof Error) { // Check if the error is an instance of the mongoose Error class
            return { // Return an error object with the error message
                error: e.message
            };
        }
	}
})