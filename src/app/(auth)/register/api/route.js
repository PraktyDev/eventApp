import { ConnectToDB } from "../../../../../utils/database";
import { User } from "../../../../../models/User";

export const revalidate = 0
export async function POST (req){
    const body = await req.json()
    try {
        await ConnectToDB();
        const user = await User.create(body)
        return Response.json(user)
    } catch (error) {
        return Response.json('Error Occured:', error.message)
    }
}

export async function GET (request){
    try {
        await ConnectToDB();
        const user = await User.find()
        return Response.json(user)
    } catch (error) {
        return Response.json('Error Occured:', error.message)
    }
}
