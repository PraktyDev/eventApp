import { ConnectToDB } from "../../../../../../utils/database";
import { Security } from "../../../../../../models/Security";

export async function GET (request, { params }){
    const securityId = params.securityId
    try {
        await ConnectToDB();
        const security = await Security.findById(securityId)
        return Response.json(security)
    } catch (error) {
        return Response.json('Error Occured:', error.message)
    }
}
