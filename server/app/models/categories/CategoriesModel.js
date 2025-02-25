import mongoose from 'mongoose';

const DataSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        image: { type: String },
        userId: { type: mongoose.Schema.Types.ObjectId },
        email: { type: String },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const CategoryModel = mongoose.model('category', DataSchema);

export default CategoryModel;