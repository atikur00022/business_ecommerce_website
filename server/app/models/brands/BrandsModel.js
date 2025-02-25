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

const BrandModel = mongoose.model('brand', DataSchema);

export default BrandModel;