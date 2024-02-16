import jwt from "jsonwebtoken";
import UserModel, { type User } from "~/server/models/user";

/**
 * Verify user token
 * @param event - Event data
 * @returns - Error if token is invalid
 */
export default defineEventHandler((event) => {
	let { req } = event.node; // Get request data

	const token = req.headers.authorization; // Get token from headers
	if (!token) return { error: "Access Denied! Authenticate!" }; // Return error if token is not provided

	// Verify token
	jwt.verify(token, process.env.JWT_KEY, async (err: any, payload: any) => {
		try {
			if (err) return { error: "Invalid Token." }; // Return error if token is invalid

			const user: User | null = await UserModel.findById(payload.id); // Find user by ID
			if (!user) return { error: "You are not this user. Invalid token!" }; // Return error if user is not found
			req.user = user; // Set user data to request
		} catch (error) {
			if (error instanceof jwt.JsonWebTokenError) { // Return error if token is invalid
				return { error: error.message } // Return error message
			}
		}
	});
});