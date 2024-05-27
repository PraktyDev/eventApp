import { Schema, model, models } from 'mongoose'

const CateringSchema = new Schema({
    name: {
        type: String,
        required: [true, "Please enter Catering name"],
    },
    image: {
        type: String,
        required: [true, 'Enter image url']
    },
    description: {
        type: String,
        required: [true, 'Enter description']
    },
    amount: {
        type: String,
        required: [true, 'Enter amount']
    },
},{ timestamps: true });

// creating a model for the database
export const Catering = models?.Catering || model("Catering", CateringSchema)