import { ConnectToDB } from "../../../../../utils/database";
import { Musicbands } from "../../../../../models/Musicbands";


export const dynamic = 'force-dynamic'
export async function POST (req){
    const body = await req.json()
    try {
        await ConnectToDB();
        const musicband = await Musicbands.create(body)
        return Response.json(musicband)
    } catch (error) {
        return Response.json('Error Occured:', error.message)
    }
}

export async function GET (request){
    try {
        await ConnectToDB();
        const musicband = await Musicbands.find()
        return Response.json(musicband)
    } catch (error) {
        return Response.json('Error Occured:', error.message)
    }
}

