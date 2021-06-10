const express = require('express');
const bodyParser = require('body-parser');
const cors = require ('cors');
const multer = require('multer');
const request = require('request');
var extract = require('textract');


//variable inti..

let uploadedFileName;
var filePath;
var audioUpload = multer({dest : 'uploads/'})


const app = express();
const speech = require('@google-cloud/speech');
const client = new speech.SpeechClient();

async function quickstart(blob , language) {


    // The audio file's encoding, sample rate in hertz, and BCP-47 language code
    const audio = {
          content: blob
    };
    const config = {
      encoding: 'LINEAR16',
      sampleRateHertz: 16000,
      languageCode: language, //am-ET for amharic translation
    };
    const request = {
      audio: audio,
      config: config,
    };

    // Detects speech in the audio file
    const [response] = await client.recognize(request);
    const transcription = response.results
      .map(result => result.alternatives[0].transcript)
      .join('\n');
    console.log(`Transcription: ${transcription}`);
  }

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

app.get('/uploadDocument' , (req,res)=>{
    res.sendFile(__dirname + "/fileUpload.html");
})

app.get('/audioRecord' , (req,res)=>{
    res.sendFile(__dirname +"/audio.html");
})

app.post('/text' ,(req,res)=>{
    console.log(req.body);
})

app.post('/audio', audioUpload.single('audio_data') , (req,res,next)=>{
    // get the language form the post request parameter

    const blobToBase64 = blob => {
        const reader = new FileReader();
        reader.readAsDataURL(req.file);
        return new Promise(resolve => {
          reader.onloadend = () => {
            resolve(reader.result);
          };
        });
      };
      quickstart(blobToBase64 , 'en-US');
    // let uri = {
    //     "audio" : {
    //     "content": req.output
    //     }
    // }
    // let config = {
    //     "enableAutomaticPunctuation": true,
    //     "encoding": "LINEAR16",
    //     "languageCode": req.language,
    //     "model": "default"
    // }
    // const requestBody = {
    //     audio : audio ,
    //     config : config
    // }
    // request.post('https://speech.googleapis.com/v1p1beta1/speech:recognize', requestBody, (err, res, body) => {
    //     if (err) { return console.log(err); }
    //     console.log(res);
    // });
});



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
