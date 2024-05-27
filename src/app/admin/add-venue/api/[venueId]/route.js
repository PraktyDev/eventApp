import { ConnectToDB } from "../../../../../../utils/database";
import { Venue } from "../../../../../../models/Venue";

export async function GET (request, { params }){
    const venueId = params.venueId
    try {
        await ConnectToDB();
        const venue = await Venue.findById(venueId)
        return Response.json(venue)
    } catch (error) {
        return Response.json('Error Occured:', error.message)
    }
}
