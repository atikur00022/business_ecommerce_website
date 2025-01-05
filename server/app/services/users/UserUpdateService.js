import {ObjectId} from "mongodb";
import bcrypt from "bcrypt";
import UsersModel from "../../models/users/UsersModel.js";

export const UserUpdateService = async (req, res) => {
    try{

        const userId = new ObjectId(req.headers['user_id']);
        const reqBody = req.body;

        if (reqBody.hasOwnProperty('password')) {

            const EncryptedPassword = await bcrypt.hash(reqBody['password'], 10);
            reqBody['password'] = EncryptedPassword;

            const data = await UsersModel.updateOne({_id: userId}, reqBody);

            return { status: 'success', message: 'Profile updated successfully', data: data }

        } else {

            const data = await UsersModel.updateOne({_id: userId}, reqBody);

            return { status: 'success', message: 'Profile updated successfully', data: data }

        }


    }catch (e) {
        return { status: 'error', message: e.toString() }
    }
}