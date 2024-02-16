import AdminModel, { type Admin } from "../../models/admin";
import { Error } from "mongoose";

/**
 * Get all admins
 * @param event - Event data
 * @returns - Admins
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