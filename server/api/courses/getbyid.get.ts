import CourseModel, { type Course } from '~/server/models/course';
import { Error } from 'mongoose';

/**
 * Retrieves a course based on the provided course ID.
 * @param event - The event object containing the query parameters.
 * @returns If the required parameters are missing, returns an error object with a message indicating the missing parameters.
 *          If the course is found, returns the course object.
 *          If an error occurs during the retrieval process, returns an error object with the error message.
 * @example
 * useFetch('api/courses/getbyid?id=<course-id>')
 */
export default defineEventHandler(async (event) => {
	let params = getQuery(event); // Extract query parameters from the event object
	if (!params.id) {
		return { // Return an error object with a message indicating the missing parameters
			error: "Missing required parameters: id"
		};
	}

	try {
		const course: Course | null = await CourseModel.findById(params.id); // Find the course based on the provided course ID

		return course === null ? { error: "Course not found" } : course; // Return the course object if it is found
	} catch (error: any) {
		if (error instanceof Error) { // Check if the error is an instance of the mongoose Error class
			return { // Return an error object with the error message
				error: error.message
			};
		}
	}
})