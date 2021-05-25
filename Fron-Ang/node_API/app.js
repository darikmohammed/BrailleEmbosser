const express = require('express'); 
const bodyParser = require('body-parser'); 
const cors = require ('cors');
const multer = require('multer'); 
const request = require('request'); 
var extract = require('textract'); 


//variable inti..

let uploadedFileName; 
var filePath; 


const app = express(); 
//middlewere
app.use(express.json());
app.use(cors()); 

var storage =   multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, './documentUploads');
    },
    filename: function (req, file, callback) {
       uploadedFileName = file.originalname; 
       callback(null, uploadedFileName);
    }
  });

var upload = multer({ storage : storage}).single('userPhoto');

app.post('/text' ,(req,res)=>{
    console.log(req.body); 
})

app.post('/audio', (req,res)=>{
    let uri = {
        "audio" : {
        "content": req.output 
        }
    }
    let config = {
        "enableAutomaticPunctuation": true,
        "encoding": "LINEAR16",
        "languageCode": req.language,
        "model": "default"
    }
    const requestBody = {
        audio : audio , 
        config : config
    }
    request.post('https://speech.googleapis.com/v1p1beta1/speech:recognize', requestBody, (err, res, body) => {
        if (err) { return console.log(err); }
        console.log(res);
    });
}); 

app.get('/uploadDocument' , (req,res)=>{
    res.sendFile(__dirname + "/fileUpload.html");
})
app.post('/api/uploadDocument',function(req,res){
    upload(req,res,function(err) {
        if(err) {
            return res.end("Error uploading file.");
        }
        //file uploading sucess!
        //file name willbe found in variable : uploadedFileName...
        filePath = './documentUploads/' + uploadedFileName ; 
        extract.fromFileWithPath(filePath , (error , result) =>{
            if(error){
                res.end (error); 
                return; 
            }
            
            res.end(result); 
        })
        //res.end("File is uploaded");
    });
});


const port = process.env.PORT||3000;
app.listen(port , (req,res)=>{
    console.log(`listening to ${port} ...`)
})