import { type Nitro } from "nitropack";
import mongoose from "mongoose";
import dotenv from 'dotenv';

/**
 * Connect to MongoDB
 * @param _nitroApp - Nitro instance
 */
export default async (_nitroApp: Nitro) => {
    dotenv.config(); // Load environment variables
    try {
        await mongoose.connect(process.env.DB_URI); // Connect to MongoDB
        console.log("Connected to MongoDB"); // Log success message
    } catch (e) {
        console.error(e); // Log error message
    }
};