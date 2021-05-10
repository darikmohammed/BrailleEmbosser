const express = require('express'); 
const bodyParser = require('body-parser'); 
const cors = require ('cors');


const app = express(); 
//middlewere
app.use(express.json());
app.use(cors()); 

app.post('/text' ,(req,res)=>{
    console.log(req.body); 
})



const port = process.env.PORT||3000;
app.listen(port , (req,res)=>{
    console.log(`listening to ${port} ...`)
})