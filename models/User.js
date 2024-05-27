import { Schema, model, models } from 'mongoose'

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, "Please enter your fullname"],
    },
    dob: {
        type: String,
        required: [true, "Please enter your date of birth"],
    },
    gender: {
        type: String,
        required: [true, "Please enter your gender"],
    },
    email: {
        type: String,
        required: [true, 'Email is required!'],
        unique: [true, 'Email already exists!']
    },
    phone: {
        type: String,
        required: [true, 'Enter your Phone number']
    },
    image: {
        type: String,
        required: [true, 'Enter your profile picture']
    },
    nationality: {
        type: String,
        required: [true, 'Enter your nationality']
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
},{ timestamps: true });

// creating a model for the database
export const User = models?.User || model("User", UserSchema)