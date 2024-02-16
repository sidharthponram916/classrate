import CourseModel, { type Course } from '~/server/models/course';

/**
 * Retrieves a course based on the provided school ID and course name.
 * @param event - The event object containing the query parameters.
 * @returns If the required parameters are missing, returns an error object with a message indicating the missing parameters.
 *          If the course is found, returns the course object.
 *          If an error occurs during the retrieval process, returns an error object with the error message.
 * @example
 * useFetch('api/courses/get?school_id=<school-id>&course=<course-name>')
 */
export default defineEventHandler(async (event) => {
    let params = getQuery(event); // Extract query parameters from the event object
    if (!params.school_id || !params.course) { // Check if the required parameters are missing
        return { // Return an error object with a message indicating the missing parameters
            error: "Missing required parameters: school_id or course" //
        };
    }

    try {
        const course: Course | null = await CourseModel.findOne({
            $and: [
                { school_id: params.school_id },
                { name: params.course },
            ],
        }); // Find the course based on the provided school ID and course name

        // Return the course object if it is found
        return course === null ? { error: "Course not found" } : course;
    } catch (error: any) {
        if (error instanceof Error) { // Check if the error is an instance of the mongoose Error class
            return { // Return an error object with the error message
                error: error.message
            };
        }
    }
})
