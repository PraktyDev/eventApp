import { ConnectToDB } from "../../../../../../utils/database";
import { Videography } from "../../../../../../models/Videography";

export async function GET (request, { params }){
    const videographyId = params.videographyId
    try {
        await ConnectToDB();
        const videography = await Videography.findById(videographyId)
        return Response.json(videography)
    } catch (error) {
        return Response.json('Error Occured:', error.message)
    }
}
