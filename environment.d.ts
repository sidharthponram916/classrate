import type { Secret } from "jsonwebtoken";
import type { User } from "~/server/models/user";

declare global {
    namespace NodeJS { // Add properties to the NodeJS namespace
        interface ProcessEnv { // Add properties to the ProcessEnv interface
            PORT: number;
            DB_URI: string;
            FRONTEND_URL: string;
            EMAIL_PWD: string;
            SALT: number;
            JWT_KEY: Secret;
        }
    }
}

declare module 'http' { // Add properties to the http module
    export interface IncomingMessage { // Add properties to the IncomingMessage interface
        user?: User;
    }
}

export { }