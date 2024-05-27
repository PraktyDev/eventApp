import { ConnectToDB } from "../../../../../../utils/database";
import { Dj } from "../../../../../../models/Dj";

export async function GET (request, { params }){
    const djId = params.djId
    try {
        await ConnectToDB();
        const dj = await Dj.findById(djId)
        return Response.json(dj)
    } catch (error) {
        return Response.json('Error Occured:', error.message)
    }
}
