import { ConnectToDB } from "../../../../../utils/database";
import { User } from "../../../../../models/User";
import bcrypt from "bcryptjs"

export const revalidate = 0
export async function POST (req){
    const body = await req.json()
    const { name, dob, gender, email, phone, image, nationality, password } = body
    try {
        const saltRounds = 10;
        // Hashing a password
        const hash = bcrypt.hashSync(password, saltRounds);

        await ConnectToDB();
        const user = new User({
            name,
            dob,
            gender,
            email,
            phone,
            image,
            nationality,
            password: hash,
        })
        const users = await user.save()
        return Response.json(users)
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
