import { type Nitro } from "nitropack";
import mongoose from "mongoose";
import dotenv from 'dotenv';

export default async (_nitroApp: Nitro) => {
    dotenv.config();
    try {
        await mongoose.connect(process.env.DB_URI);
        console.log("Connected to MongoDB");
    } catch (e) {
        console.error(e);
    }
};