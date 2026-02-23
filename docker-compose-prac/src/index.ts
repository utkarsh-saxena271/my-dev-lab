import 'dotenv/config'
import { PrismaPg } from '@prisma/adapter-pg';

import express from 'express';
import { PrismaClient } from './generated/prisma/client.js';


const connectionString = `${process.env.DATABASE_URL}`;
const adapter = new PrismaPg({connectionString});
const prisma = new PrismaClient({adapter})



const app = express();
app.get('/',async (req,res)=>{
    const data = await prisma.user.findMany()
    res.json({
        data
    })
})
app.post('/',async (req,res)=>{
    await prisma.user.create({
        data:{
            name:Math.random().toString(),
            email:Math.random().toString()
        }
    })
    res.json({
        message:"post endpoint"
    })
})

app.listen(3000);