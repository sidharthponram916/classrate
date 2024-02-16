import { Document, model, Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export interface User extends Document {
	email: string;
	username: string;
	password: string;
	school: string;
	graduatingClass: number;
	verified: boolean;
	provider: boolean;
	createdAt: Date;

	generateToken(): string;
	verifyPassword(pwd: string): Promise<boolean>;
}

const userSchema = new Schema<User>({
	email: {
		type: String,
		required: true,
		unique: true,
	},
	username: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	school: {
		type: String,
		default: '',
	},
	graduatingClass: {
		type: Number,
		default: 0,
	},
	verified: {
		type: Boolean,
		default: false,
	},
	provider: {
		type: Boolean,
		required: true,
		default: false,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

userSchema.methods.generateToken = function () {
	return jwt.sign({ id: `${this._id}` }, process.env.JWT_KEY);
};

userSchema.methods.verifyPassword = async function (pwd: string) {
	bcrypt.compare(pwd, this.password, (err, result) => {
		if (err == undefined) {
			return result;
		} else {
			return err;
		}
	})
};

export default model<User>('User', userSchema);