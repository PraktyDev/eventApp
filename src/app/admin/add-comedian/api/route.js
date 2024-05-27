import { ConnectToDB } from "../../../../../utils/database";
import { Comedian } from "../../../../../models/Comedian";


export const dynamic = 'force-dynamic'
export async function POST (req){
    const body = await req.json()
    try {
        await ConnectToDB();
        const comedian = await Comedian.create(body)
        return Response.json(comedian)
    } catch (error) {
        return Response.json('Error Occured:', error.message)
    }
}

export async function GET (request){
    try {
        await ConnectToDB();
        const comedian = await Comedian.find()
        return Response.json(comedian)
    } catch (error) {
        return Response.json('Error Occured:', error.message)
    }
}

