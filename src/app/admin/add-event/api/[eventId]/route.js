import { ConnectToDB } from "../../../../../../utils/database";
import { Event } from "../../../../../../models/Event";

export async function GET (request, { params }){
    const eventId = params.eventId
    try {
        await ConnectToDB();
        const event = await Event.findById(eventId)
        return Response.json(event)
    } catch (error) {
        return Response.json('Error Occured:', error.message)
    }
}
