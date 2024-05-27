import { ConnectToDB } from "../../../../../../utils/database";
import { Catering } from "../../../../../../models/Catering";

export async function GET (request, { params }){
    const cateringId = params.cateringId
    try {
        await ConnectToDB();
        const catering = await Catering.findById(cateringId)
        return Response.json(catering)
    } catch (error) {
        return Response.json('Error Occured:', error.message)
    }
}
