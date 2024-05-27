import { Schema, model, models } from 'mongoose'

const McSchema = new Schema({
    name: {
        type: String,
        required: [true, "Please enter a Mc name"],
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
export const Mc = models?.Mc || model("Mc", McSchema)