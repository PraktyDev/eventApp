import { ConnectToDB } from "../../../../../utils/database";
import { Event } from "../../../../../models/Event";


export const dynamic = 'force-dynamic'
export async function POST (req){
    const body = await req.json()
    try {
        await ConnectToDB();
        const event = await Event.create(body)
        return Response.json(event)
    } catch (error) {
        return Response.json('Error Occured:', error.message)
    }
}

export async function GET (request){
    try {
        await ConnectToDB();
        const event = await Event.find()
        return Response.json(event)
    } catch (error) {
        return Response.json('Error Occured:', error.message)
    }
}

