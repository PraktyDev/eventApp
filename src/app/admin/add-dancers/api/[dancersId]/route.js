import { ConnectToDB } from "../../../../../../utils/database";
import { Dancers } from "../../../../../../models/Dancers";

export async function GET (request, { params }){
    const dancersId = params.dancersId
    try {
        await ConnectToDB();
        const dancers = await Dancers.findById(dancersId)
        return Response.json(dancers)
    } catch (error) {
        return Response.json('Error Occured:', error.message)
    }
}
