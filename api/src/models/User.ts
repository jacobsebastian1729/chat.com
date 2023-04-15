import mongoose, { Document } from "mongoose";

export type UserDocument = Document & {
    email: string;
    password: string;
    image: string;
};

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        default: " ",
    },
});

export default mongoose.model<UserDocument>("User", UserSchema)