import { ConnectToDB } from "../../../../../utils/database";
import { Dj } from "../../../../../models/Dj";


export const dynamic = 'force-dynamic'
export async function POST (req){
    const body = await req.json()
    try {
        await ConnectToDB();
        const dj = await Dj.create(body)
        return Response.json(dj)
    } catch (error) {
        return Response.json('Error Occured:', error.message)
    }
}

export async function GET (request){
    try {
        await ConnectToDB();
        const dj = await Dj.find()
        return Response.json(dj)
    } catch (error) {
        return Response.json('Error Occured:', error.message)
    }
}

