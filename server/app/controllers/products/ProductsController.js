import DataModel from "../../models/products/ProductsModel.js";
import ReturnsProductModel from "../../models/returns/ReturunsProductModel.js";
import PurchasesProductModel from "../../models/purchases/PurchasesProductModel.js";
import SalesProductModel from "../../models/sales/SalesProductModel.js";
import {CreateWithUniqueService} from "../../services/common/CreateWithUniqueService.js";
import {UpdateService} from "../../services/common/UpdateService.js";
import {ListTwoJoinService} from "../../services/common/ListTwoJoinService.js";
import {ObjectId} from "mongodb";
import {CheckAssociateService} from "../../services/common/CheckAssociateService.js";
import {DeleteService} from "../../services/common/DeleteService.js";
import {DetailsByIdService} from "../../services/common/DetailsByIdService.js";

// Create
export const CreateProduct = async (req, res) => {
    const result = await CreateWithUniqueService(req, DataModel);
    res.json(result);
}

// Update
export const UpdateProduct = async (req, res) => {
    const result = await UpdateService(req, DataModel);
    res.json(result);
}

// Product List
export const ProductList = async (req, res) => {
    const SearchRegx = { "$regex": req.params.searchKeyword, "$options": "i" };
    const SearchArray = [{name: SearchRegx}, {details: SearchRegx}, {unit: SearchRegx}, {"brands.name" : SearchRegx}, {"categories.name" : SearchRegx}];

    const JoinStage1 = { $lookup: { from: "brands", localField: "brandId", foreignField: "_id", as: "brands" } };
    const JoinStage2 = { $lookup: { from: "categories", localField: "categoryId", foreignField: "_id", as: "categories" } };

    const UnwindBrandStage1 = { $unwind: "$brands" };
    const UnwindBrandStage2 = { $unwind: "$categories" };

    const result = await ListTwoJoinService(req, DataModel, SearchArray, JoinStage1, JoinStage2, UnwindBrandStage1, UnwindBrandStage2);
    res.json(result);
}

// Delete
export const DeleteProduct = async (req, res) => {

    const id = new ObjectId(req.params['id']);
    console.log("product controller id", id)

    const checkReturnAssociate = await CheckAssociateService({productId: id}, ReturnsProductModel);
    const checkPurchaseAssociate = await CheckAssociateService({productId: id}, PurchasesProductModel);
    const checkSalesAssociate = await CheckAssociateService({productId: id}, SalesProductModel);

    if(checkReturnAssociate){
        res.status(200).json({status: "associate", data: "Associate with Return!"});
    }else if(checkPurchaseAssociate){
        res.status(200).json({status: "associate", data: "Associate with Purchase!"});
    }else if(checkSalesAssociate){
        res.status(200).json({status: "associate", data: "Associate with Sale!"});
    }else{
        const result = await DeleteService(req, DataModel);
        res.json(result);
    }
}

// Details
export const ProductDetails = async (req, res) => {
    const result = await DetailsByIdService(req, DataModel);
    res.json(result);
}