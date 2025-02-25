import {CreateParentChildService} from "../../services/common/CreateParentChildService.js";
import ParentModel from "../../models/returns/ReturnsModel.js";
import ChildModel from "../../models/returns/ReturunsProductModel.js";
import {ListOneJoinService} from "../../services/common/ListOneJoinService.js";
import {DeleteParentChildService} from "../../services/common/DeleteParentChildService.js";

// Create
export const CreateReturn = async (req, res) => {
    const result = await CreateParentChildService(req, ParentModel, ChildModel, "returnId" );
    res.json(result);
}

// Return List
export const ReturnList = async (req, res) => {
    const SearchRegx = { "$regex": req.params.searchKeyword, "$options": "i" };
    const SearchArray = [{note : SearchRegx}, {"customers.name" : SearchRegx}, {"customers.address" : SearchRegx}, {"customers.phone" : SearchRegx}, {"customers.email" : SearchRegx}];

    const JoinStage = { $lookup: { from: "customers", localField: "customerId", foreignField: "_id", as: "customers" } };

    const UnwindBrandStage = { $unwind: "$customers" };

    const result = await ListOneJoinService(req, ParentModel, SearchArray, JoinStage, UnwindBrandStage );
    res.json(result);
}

// Delete
export const DeleteReturn = async (req, res) => {
    const result = await DeleteParentChildService(req, ParentModel, ChildModel, "returnId" );
    res.json(result);
}