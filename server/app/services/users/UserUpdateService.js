import {ObjectId} from "mongodb";
import bcrypt from "bcrypt";
import UsersModel from "../../models/users/UsersModel.js";

export const UserUpdateService = async (req, res) => {
    try {
        const userId = new ObjectId(req.headers["user_id"]);
        const reqBody = req.body;

        if (reqBody.password) {
            const EncryptedPassword = await bcrypt.hash(reqBody.password, 10);
            reqBody.password = EncryptedPassword;
        } else {
            delete reqBody.password; // Remove password field if it's not provided
        }

        const data = await UsersModel.updateOne({ _id: userId }, { $set: reqBody });

        return { status: "success", message: "Profile updated successfully", data: data };
    } catch (e) {
        return { status: "error", message: e.toString() };
    }
};
