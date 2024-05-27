import mongoose from 'mongoose';

let isConnected = false;

export const ConnectToDB = async ()=>{
    if(isConnected) {
        console.log('Connected already to the database');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGO_URI)
        isConnected = true;
        console.log("connected to the database")
    } catch (error) {
        console.log(error.message, "Error Occured")
    }
}
