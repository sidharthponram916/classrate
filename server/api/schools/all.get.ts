import SchoolModel, { School } from '~/server/models/school';

/**
 * This function is an event handler for the GET /api/schools/all endpoint.
 * It retrieves all schools from the database.
 * @param _event - The event object.
 * @returns A promise that resolves to an array of School objects if successful, or an error object if there was an error.
 * @example
 * useFetch('api/schools/all')
 */
export default defineEventHandler(async (_event) => {
	try {
		const schools: School[] = await SchoolModel.find(); // Find all schools in the database

		return schools; // Return the array of schools
	} catch (e: any) {
		return { // Return an error object with the error message
			error: e.toString()
		}
	}
})