import jwt from "jsonwebtoken";
import UserModel, { type User } from "~/server/models/user";

export default defineEventHandler((event) => {
    let { req } = event.node;
    
    const token = req.headers.authorization;
    if (!token) return { error: "Access Denied! Authenticate!" };

    jwt.verify(token, process.env.JWT_KEY, async (err: any, payload: any) => {
        try {
            if (err) return { error: "Invalid Token." };

            const user: User | null = await UserModel.findById(payload.id);
            if (!user) return { error: "You are not this user. Invalid token!" };
            req.user = user;
        } catch (error) {
            if (error instanceof jwt.JsonWebTokenError) {
                return { error: error.message }
            }
        }
    });
});