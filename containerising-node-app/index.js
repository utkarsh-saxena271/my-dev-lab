import express from 'express'

const app = express()

app.get('/',(req,res) => {
    res.json({
        message:"containerising this node app"
    })
})


app.listen(3000, ()=>{
    console.log("server is running on port 3000")
})


console.log("env var", process.env.ENV)