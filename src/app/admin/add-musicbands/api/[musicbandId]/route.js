import { ConnectToDB } from "../../../../../../utils/database";
import { Musicbands } from "../../../../../../models/Musicbands";

export async function GET (request, { params }){
    const musicbandId = params.musicbandId
    try {
        await ConnectToDB();
        const musicband = await Musicbands.findById(musicbandId)
        return Response.json(musicband)
    } catch (error) {
        return Response.json('Error Occured:', error.message)
    }
}
