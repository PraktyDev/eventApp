import { Schema, model, models } from 'mongoose'

const ProfileSchema = new Schema({
    name: {
        type: String,
        required: [true, "Please enter your name"],
    },
    dob: {
        type: String,
        required: [true, 'Please enter your date of birth'],
    },
    gender: {
        type: String,
        required: [true, 'Pick a gender']
    },
    email: {
        type: String,
        required: [true, 'Enter a valid email'],
        unique: [true, 'Email already exists'],
    },
    phonenumber: {
        type: String,
        required: [true, 'Enter a valid phone number'],
    },
    nationality: {
        type: String,
        required: [true, 'Select a nationality'],
    },
    photo: {
        type: String,
        required: [true, 'Enter image url'],
    },
},{ timestamps: true });

// creating a model for the database
export const Profile = models?.Profile || model("Profile", ProfileSchema)