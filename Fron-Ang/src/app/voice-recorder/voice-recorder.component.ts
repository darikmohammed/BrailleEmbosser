import { Component, OnInit } from '@angular/core';
import { NgAudioRecorderService, OutputFormat } from 'ng-audio-recorder';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-voice-recorder',
  templateUrl: './voice-recorder.component.html',
  styleUrls: ['./voice-recorder.component.css']
})
export class VoiceRecorderComponent implements OnInit {

  constructor(private audioRecorderService: NgAudioRecorderService, private http: HttpClient) { }

  ngOnInit(): void {
  }

  private outputFormat!: OutputFormat;

  startRecording(){
    this.audioRecorderService.startRecording();
  }

  stopRecording() {
    this.audioRecorderService.stopRecording(this.outputFormat).then((output) => {
       // do post output steps
       console.log(output);
       this.http.post('http://localhost:3000/audio', output)
    .subscribe(
      data => console.log("Success!", data),
      error => console.error('Error!', error)
    );
    }).catch(errrorCase => {
        // Handle Error
    });
}

}
