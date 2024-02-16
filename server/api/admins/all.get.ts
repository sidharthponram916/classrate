import AdminModel, { type Admin } from "../../models/admin";
import { Error } from "mongoose";

/**
 * This is function is an event handler for the GET /api/admins/all endpoint.
 * It gets all admins
 * @param event - Event data
 * @returns - Admins
 * @example
 * useFetch('api/admins/all')
 */
export default defineEventHandler(async (event) => {
	try {
		let admins: Admin[] = await AdminModel.find(); // Get all admins
		return admins; // Return admins
	} catch (err) {
		if (err instanceof Error) {
			return {error: err.message} // Return error message
		}
	}
})