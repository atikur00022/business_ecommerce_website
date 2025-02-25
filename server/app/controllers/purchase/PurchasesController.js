import {CreateParentChildService} from "../../services/common/CreateParentChildService.js";
import ParentModel from "../../models/purchases/PurchasesModel.js";
import ChildModel from "../../models/purchases/PurchasesProductModel.js";
import {ListOneJoinService} from "../../services/common/ListOneJoinService.js";
import {DeleteParentChildService} from "../../services/common/DeleteParentChildService.js";

// Create
export const CreatePurchase = async (req, res) => {
    const result = await CreateParentChildService(req, ParentModel, ChildModel, "purchaseId" );
    res.json(result);
}

// Purchase List
export const PurchaseList = async (req, res) => {
    const SearchRegx = { "$regex": req.params.searchKeyword, "$options": "i" };
    const SearchArray = [{note : SearchRegx}, {"suppliers.name" : SearchRegx}, {"suppliers.address" : SearchRegx}, {"suppliers.phone" : SearchRegx}, {"suppliers.email" : SearchRegx}];

    const JoinStage = { $lookup: { from: "suppliers", localField: "supplierId", foreignField: "_id", as: "suppliers" } };

    const UnwindBrandStage = { $unwind: "$suppliers" };

    const result = await ListOneJoinService(req, ParentModel, SearchArray, JoinStage, UnwindBrandStage );
    res.json(result);
}

// Delete
export const DeletePurchase = async (req, res) => {
    const result = await DeleteParentChildService(req, ParentModel, ChildModel, "purchaseId" );
    res.json(result);
}