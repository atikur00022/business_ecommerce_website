import mongoose from 'mongoose';

const DataSchema = new mongoose.Schema(
    {
        categoryId: { type: mongoose.Schema.Types.ObjectId },
        brandId: { type: mongoose.Schema.Types.ObjectId },
        name: { type: String },
        unit: { type: String },
        details: { type: String }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const ProductsModel = mongoose.model('product', DataSchema);

export default ProductsModel;