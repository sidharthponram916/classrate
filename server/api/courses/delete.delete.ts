import CourseModel, { type Course } from '~/server/models/course';
import { Error } from 'mongoose';
import isAdmin from '~/server/config/isAdmin';

/**
 * Deletes a course based on the provided course ID.
 * @param event - The event object containing the query parameters.
 * @returns If the required parameters are missing, returns an error object with a message indicating the missing parameters.
 *          If the course is found, returns the course object.
 *          If an error occurs during the retrieval process, returns an error object with the error message.
 * @example
 * useFetch('api/courses/delete?id=<course-id>')
 */
export default defineEventHandler(async (event) => {
    let param = getQuery(event); // Extract query parameters from the event object
    let { req } = event.node; // Extract the request object from the event object

    if (!param.id) {
        return { error: "Missing required parameter: id" }; // Return an error object with a message indicating the missing parameters
    }

    try {
        if (!isAdmin(req.user?._id)) return { error: "Forbidden Request created!" } // Check if the user is an admin

        const course: Course | null = await CourseModel.findByIdAndDelete(param.id); // Find the course based on the provided course ID
        
        return course; // Return the course object if it is found
    } catch (error) {
        if (error instanceof Error) { // Check if the error is an instance of the mongoose Error class
            return { error: error.message };
        }
    }
})