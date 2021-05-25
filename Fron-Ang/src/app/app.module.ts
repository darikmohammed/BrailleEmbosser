import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgAudioRecorderModule } from 'ng-audio-recorder';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { VoiceRecorderComponent } from './voice-recorder/voice-recorder.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VoiceRecorderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgAudioRecorderModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
