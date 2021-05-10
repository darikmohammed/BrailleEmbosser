const express = require('express'); 
const bodyParser = require('body-parser'); 

const app = express(); 

app.use(express.json());

var recived_printing_data ; 

function convertingPrintingData(){
    return arr_recieved_data = recived_printing_data.split(''); 
   
}


const port = process.env.PORT||3000;
app.listen(port , (req,res)=>{
    console.log(`listening to ${port} ...`)
})