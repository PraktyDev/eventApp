import { ConnectToDB } from "../../../../../../utils/database";
import { Photography } from "../../../../../../models/Photography";

export async function GET (request, { params }){
    const photographyId = params.photographyId
    try {
        await ConnectToDB();
        const photography = await Photography.findById(photographyId)
        return Response.json(photography)
    } catch (error) {
        return Response.json('Error Occured:', error.message)
    }
}
