import { ConnectToDB } from "../../../../../utils/database";
import { Mc } from "../../../../../models/Mc";


export const dynamic = 'force-dynamic'
export async function POST (req){
    const body = await req.json()
    try {
        await ConnectToDB();
        const mc = await Mc.create(body)
        return Response.json(mc)
    } catch (error) {
        return Response.json('Error Occured:', error.message)
    }
}

export async function GET (request){
    try {
        await ConnectToDB();
        const mc = await Mc.find()
        return Response.json(mc)
    } catch (error) {
        return Response.json('Error Occured:', error.message)
    }
}

