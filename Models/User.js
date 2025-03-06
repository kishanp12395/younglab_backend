import { mongoose } from "mongoose";

// Contact schema & model

const contactSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address']
        },
        age: {
            type: String,
        },

    }, { timestamps: true }
);

export const User = mongoose.model('User', contactSchema);
