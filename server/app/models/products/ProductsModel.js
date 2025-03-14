import mongoose from 'mongoose';
import {ALL_DEFAULT_IMAGE} from "../../config/config.js";

const DataSchema = new mongoose.Schema(
    {
        categoryId: { type: mongoose.Schema.Types.ObjectId },
        brandId: { type: mongoose.Schema.Types.ObjectId },
        name: { type: String },
        image: { type: String, default: ALL_DEFAULT_IMAGE},
        unit: { type: String },
        details: { type: String },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const ProductsModel = mongoose.model('product', DataSchema);

export default ProductsModel;