import { ConnectToDB } from "../../../../../utils/database";
import { Catering } from "../../../../../models/Catering";


export const dynamic = 'force-dynamic'
export async function POST (req){
    const body = await req.json()
    try {
        await ConnectToDB();
        const catering = await Catering.create(body)
        return Response.json(catering)
    } catch (error) {
        return Response.json('Error Occured:', error.message)
    }
}

export async function GET (request){
    try {
        await ConnectToDB();
        const catering = await Catering.find()
        return Response.json(catering)
    } catch (error) {
        return Response.json('Error Occured:', error.message)
    }
}

