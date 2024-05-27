import { Schema, model, models } from 'mongoose'

const SoundSchema = new Schema({
    name: {
        type: String,
        required: [true, "Please enter Sound Engineer name"],
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
export const Sound = models?.Sound || model("Sound", SoundSchema)