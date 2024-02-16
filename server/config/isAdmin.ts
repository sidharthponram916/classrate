import Admins from "../models/admin";

export default async (userid: string) => {
	let admins = await Admins.find();

	let exists = admins.find((admin) => {
		return admin.user.toString() === userid.toString();
	});

	if (typeof exists != "undefined") return true;

	return false;
};
