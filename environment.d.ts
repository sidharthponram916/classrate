import type { Secret } from "jsonwebtoken";
import type { User } from "~/server/models/user";

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            PORT: number;
            DB_URI: string;
            FRONTEND_URL: string;
            EMAIL_PWD: string;
            SALT: number;
            JWT_KEY: Secret;
        }
    }
}

declare module 'http' {
    export interface IncomingMessage {
        user?: User;
    }
}

export { }