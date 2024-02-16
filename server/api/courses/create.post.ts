import CourseModel, { type Course } from '~/server/models/course';
import { Error } from 'mongoose';

/**
 * Creates a new course in the database.
 * @param event - The event object containing the request body.
 * @returns If the required parameters are missing, returns an error object with a message indicating the missing parameters.
 *          If the course is created successfully, returns the course object.
 *          If an error occurs during the creation process, returns an error object with the error message.
 * @example
 * useFetch('api/courses/create', {
 *     method: 'POST',
 *     body: JSON.stringify({
 *         name: 'Math 101',
 *         category: 'Math',
 *         school_id: '12345',
 *         other: {},
 *         ratings: [],
 *     }),
 * })
 */
export default defineEventHandler(async (event) => {
	let body = await readBody(event); // Extract the request body from the event object
	try {
		const course: Course = await CourseModel.create(body); // Create a new course in the database
		return course; // Return the newly created course
	} catch (error) {
		if (error instanceof Error) { // Check if the error is an instance of the mongoose Error class
			return { error: error.message };
		}
	}
})
