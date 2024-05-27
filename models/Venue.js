import { Schema, model, models } from 'mongoose'

const VenueSchema = new Schema({
    name: {
        type: String,
        required: [true, "Please enter an venue name"],
    },
    location: {
        type: String,
        required: [true, 'Please enter an venue location'],
    },
    description: {
        type: String,
        required: [true, 'Enter description']
    },
    date: {
        type: String,
        required: [true, 'Enter a valid date']
    },
    time: {
        type: String,
        required: [true, 'Enter time']
    },
    price: {
        type: String,
        required: [true, 'Enter a price']
    },
    image: {
        type: String,
        required: [true, 'Enter image url']
    },
},{ timestamps: true });

// creating a model for the database
export const Venue = models?.Venue || model("Venue", VenueSchema)