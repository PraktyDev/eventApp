import { ConnectToDB } from "../../../../../utils/database";
import { Security } from "../../../../../models/Security";


export const dynamic = 'force-dynamic'
export async function POST (req){
    const body = await req.json()
    try {
        await ConnectToDB();
        const security = await Security.create(body)
        return Response.json(security)
    } catch (error) {
        return Response.json('Error Occured:', error.message)
    }
}

export async function GET (request){
    try {
        await ConnectToDB();
        const security = await Security.find()
        return Response.json(security)
    } catch (error) {
        return Response.json('Error Occured:', error.message)
    }
}

