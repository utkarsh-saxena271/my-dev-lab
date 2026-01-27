import 'dotenv/config'
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "./generated/prisma/client.js";

const connectionString = process.env.DATABASE_URL

const adapter = new PrismaPg({ connectionString })
const client = new PrismaClient({adapter});

async function createUser() {
     try {
        await client.users.create({
        data:{
            username: "ajhshdjajhkd",
            email:"utkaskjdhakdhjadarsh@utkarsh.com",
            password:"ajsdkjajhdhas"
        }
     })
     } catch (error) {
        console.log(error)
     }
}

createUser()