import { ConnectToDB } from "../../../../../utils/database";
import { Photography } from "../../../../../models/Photography";


export const dynamic = 'force-dynamic'
export async function POST (req){
    const body = await req.json()
    try {
        await ConnectToDB();
        const photography = await Photography.create(body)
        return Response.json(photography)
    } catch (error) {
        return Response.json('Error Occured:', error.message)
    }
}

export async function GET (request){
    try {
        await ConnectToDB();
        const photography = await Photography.find()
        return Response.json(photography)
    } catch (error) {
        return Response.json('Error Occured:', error.message)
    }
}

