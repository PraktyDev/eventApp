import { ConnectToDB } from "../../../../../utils/database";
import { Videography } from "../../../../../models/Videography";


export const dynamic = 'force-dynamic'
export async function POST (req){
    const body = await req.json()
    try {
        await ConnectToDB();
        const videography = await Videography.create(body)
        return Response.json(videography)
    } catch (error) {
        return Response.json('Error Occured:', error.message)
    }
}

export async function GET (request){
    try {
        await ConnectToDB();
        const videography = await Videography.find()
        return Response.json(videography)
    } catch (error) {
        return Response.json('Error Occured:', error.message)
    }
}

