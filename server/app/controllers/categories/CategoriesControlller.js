import DataModel from "../../models/categories/CategoriesModel.js";
import {CreateWithUniqueService} from "../../services/common/CreateWithUniqueService.js";
import {UpdateService} from "../../services/common/UpdateService.js";
import {ListService} from "../../services/common/ListService.js";
import {DropdownService} from "../../services/common/DropDownService.js";
import {ObjectId} from "mongodb";
import {CheckAssociateService} from "../../services/common/CheckAssociateService.js";
import ProductsModel from "../../models/products/ProductsModel.js";
import {DeleteService} from "../../services/common/DeleteService.js";
import {DetailsByIdService} from "../../services/common/DetailsByIdService.js";

// Create
export const CreateCategory = async (req, res) => {
    const result = await CreateWithUniqueService(req, DataModel);
    res.json(result);
}

// Update
export const UpdateCategory = async (req, res) => {
    const result = await UpdateService(req, DataModel);
    res.json(result);
}

// Brand List
export const CategoryList = async (req, res) => {
    const SearchRegx = { "$regex": req.params.searchKeyword, "$options": "i" };
    const SearchArray = [{name: SearchRegx}];
    const result = await ListService(req, DataModel, SearchArray);
    res.json(result);
}

// DropDown
export const CategoryDropDown = async (req, res) => {
    const result = await DropdownService(req, DataModel, {_id: 1, name: 1});
    res.json(result);
}

// Delete
export const DeleteCategory = async (req, res) => {

    const id = new ObjectId(req.params['id']);

    let checkAssociate = await CheckAssociateService({categoryId: id}, ProductsModel);

    if(checkAssociate){
        res.status(200).json({status: "associate", message: "Can't be deleted! Associate with product!"});
    }else{
        const result = await DeleteService(req, DataModel);
        res.json(result);
    }
}

// Details
export const CategoryDetails = async (req, res) => {
    const result = await DetailsByIdService(req, DataModel);
    res.json(result);
}