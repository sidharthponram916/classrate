import CourseModel, { Course } from '~/server/models/course';

/**
 * Retrieves all courses from the database.
 * @param _event - The event object.
 * @returns A promise that resolves to an array of Course objects if successful, or an error object if there was an error.
 * @example
 * useFetch('api/courses/all')
 */
export default defineEventHandler(async (_event) => {
	try {
		const courses: Course[] = await CourseModel.find(); // Find all courses in the database

		return courses // Return the array of courses
	} catch (e: any) {
		if (e instanceof Error) { // Check if the error is an instance of the mongoose Error class
			return { error: e.message };
		}
	}
})