import { ConnectToDB } from "../../../../../../utils/database";
import { Sound } from "../../../../../../models/Sound";

export async function GET (request, { params }){
    const soundId = params.soundId
    try {
        await ConnectToDB();
        const sound = await Sound.findById(soundId)
        return Response.json(sound)
    } catch (error) {
        return Response.json('Error Occured:', error.message)
    }
}
