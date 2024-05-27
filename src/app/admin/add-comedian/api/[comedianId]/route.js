import { ConnectToDB } from "../../../../../../utils/database";
import { Comedian } from "../../../../../../models/Comedian";

export async function GET (request, { params }){
    const comedianId = params.comedianId
    try {
        await ConnectToDB();
        const comedian = await Comedian.findById(comedianId)
        return Response.json(comedian)
    } catch (error) {
        return Response.json('Error Occured:', error.message)
    }
}
