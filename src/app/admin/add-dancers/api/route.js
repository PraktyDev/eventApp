import { ConnectToDB } from "../../../../../utils/database";
import { Dancers } from "../../../../../models/Dancers";


export const dynamic = 'force-dynamic'
export async function POST (req){
    const body = await req.json()
    try {
        await ConnectToDB();
        const dancer = await Dancers.create(body)
        return Response.json(dancer)
    } catch (error) {
        return Response.json('Error Occured:', error.message)
    }
}

export async function GET (request){
    try {
        await ConnectToDB();
        const dancer = await Dancers.find()
        return Response.json(dancer)
    } catch (error) {
        return Response.json('Error Occured:', error.message)
    }
}

