import express from "express"
import cors from "cors"; 
import "dotenv/config"; 

const app=express();
const port=process.env.PORT || 4000; 

 
app.use(express.json()); 
app.use(cors());  
 

app.get("/",(req,res)=>{
    res.send("Hello this is API");
}) 

app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})