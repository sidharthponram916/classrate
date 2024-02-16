import Admins from "../models/admin";

/**
 * Check if user is an admin
 * @param userid - User ID
 * @returns - True if user is an admin, false if not
 * @example
 * isAdmin(<userid>);
 */
export default async (userid: string) => {
	let admins = await Admins.find(); // Get all admins

	// Check if user is an admin
	let exists = admins.find((admin) => {
		return admin.user.toString() === userid.toString();
	});

	// Return true if user is an admin
	if (typeof exists != "undefined") return true;

	return false; // Return false if user is not an admin
};
