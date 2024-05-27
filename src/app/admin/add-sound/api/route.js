import { ConnectToDB } from "../../../../../utils/database";
import { Sound } from "../../../../../models/Sound";


export const dynamic = 'force-dynamic'
export async function POST (req){
    const body = await req.json()
    try {
        await ConnectToDB();
        const sound = await Sound.create(body)
        return Response.json(sound)
    } catch (error) {
        return Response.json('Error Occured:', error.message)
    }
}

export async function GET (request){
    try {
        await ConnectToDB();
        const sound = await Sound.find()
        return Response.json(sound)
    } catch (error) {
        return Response.json('Error Occured:', error.message)
    }
}

