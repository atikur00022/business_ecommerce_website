import mongoose from 'mongoose';

const DataSchema = new mongoose.Schema(
    {
        userId: { type: mongoose.Schema.Types.ObjectId },
        customerId: { type: mongoose.Schema.Types.ObjectId },
        email: { type: String },
        vatTax: { type: Number },
        discount: { type: Number },
        otherCost: { type: Number },
        shippingCost: { type: Number },
        grandTotal: { type: Number },
        note: { type: String },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const SalesModel = mongoose.model('sales', DataSchema);

export default SalesModel;