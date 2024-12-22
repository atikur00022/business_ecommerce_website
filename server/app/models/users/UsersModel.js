import mongoose from 'mongoose';

const DataSchema = new mongoose.Schema(
    {
        email: { type: String, unique: true, required: true, lowercase: true, trim: true },
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        mobile: { type: Number, required: true },
        password: { type: String, required: true },
        photo: { type: String},
        isBanned: { type: Boolean, default: false },
        role: { type: String, default: 'user' },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const UsersModel = mongoose.model('users', DataSchema);

export default UsersModel;