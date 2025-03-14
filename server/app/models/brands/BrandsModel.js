import mongoose from 'mongoose';
import {ALL_DEFAULT_IMAGE} from "../../config/config.js";

const DataSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        image: { type: String, default: ALL_DEFAULT_IMAGE},
        userId: { type: mongoose.Schema.Types.ObjectId },
        email: { type: String },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const BrandModel = mongoose.model('brand', DataSchema);

export default BrandModel;