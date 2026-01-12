import 'dotenv/config'
import { Client } from "pg"
import express from 'express'

const app = express()
app.use(express.json())


const pgClient = new Client({
  host: process.env.POSTGRE_HOST,
  port: 5432,
  database: process.env.POSTGRE_DB,
  user: process.env.POSTGRE_USER,
  password: process.env.POSTGRE_PASSWORD,
  ssl:true
})
console.log(pgClient)

async function main(){
    await pgClient.connect()
    const respone = await pgClient.query("SELECT * FROM users;")
    console.log(respone.rows)
}

main()