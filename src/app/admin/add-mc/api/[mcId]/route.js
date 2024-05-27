import { ConnectToDB } from "../../../../../../utils/database";
import { Mc } from "../../../../../../models/Mc";

export async function GET (request, { params }){
    const mcId = params.mcId
    try {
        await ConnectToDB();
        const mc = await Mc.findById(mcId)
        return Response.json(mc)
    } catch (error) {
        return Response.json('Error Occured:', error.message)
    }
}
