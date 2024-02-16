import AdminModel, { type Admin } from "../../models/admin";

export default defineEventHandler(async (event) => {
    try {
        let admins: Admin[] = await AdminModel.find();
        return admins;
    } catch (err) {
        return err;
    }
})