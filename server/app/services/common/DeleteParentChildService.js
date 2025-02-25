import mongoose from "mongoose";
import {ObjectId} from "mongodb";

export const DeleteParentChildService = async (Request, ParentModel, ChildModel, JoinPropertyName) => {

    // Start Transaction Session
    const session = await mongoose.startSession();

    try {
        await session.startTransaction();


        const deleteId = new ObjectId(Request.params['id']);
        const email = Request.headers['email'];

        let childQueryObject = {};
        childQueryObject[JoinPropertyName] = deleteId;
        childQueryObject["email"] = email;


        let parentQueryObject = {};
        parentQueryObject["_id"] = deleteId;
        parentQueryObject["email"] = email;


        // First Database Process
        let childDelete = await ChildModel.deleteMany(childQueryObject, {session});

        // Second Database Process
        let parentDelete = await ParentModel.deleteOne(parentQueryObject, {session});

        // Commit Transaction
        await session.commitTransaction();
        session.endSession();

        return { status: "success", parent: parentDelete, childs: childDelete };

    } catch (e) {
        // Rollback Transaction on Error
        await session.abortTransaction();
        session.endSession();
        return { status: "fail", data: e.toString() };
    }
};
