import { ConnectToDB } from "../../../../../utils/database";
import { Venue } from "../../../../../models/Venue";


export const dynamic = 'force-dynamic'
export async function POST (req){
    const body = await req.json()
    try {
        await ConnectToDB();
        const venue = await Venue.create(body)
        return Response.json(venue)
    } catch (error) {
        return Response.json('Error Occured:', error.message)
    }
}

export async function GET (request){
    try {
        await ConnectToDB();
        const venue = await Venue.find()
        return Response.json(venue)
    } catch (error) {
        return Response.json('Error Occured:', error.message)
    }
}

