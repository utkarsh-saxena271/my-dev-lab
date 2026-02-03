import express from 'express'
import {createServer} from 'http'

import { initws } from './src/ws.js'

const app = express()
const httpServer = createServer(app)

app.get('/',(req,res)=>{
    res.json("getting response")
})



initws(httpServer)
httpServer.listen(3000)