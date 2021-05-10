import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // private url : 'http://localhost:300/text';
  constructor(
    private http: HttpClient, private fb: FormBuilder
  ) { }

  form: FormGroup = this.fb.group({
    statement: [null]
  })

  ngOnInit(): void {
  }

  send(form: FormGroup){
    this.http.post('http://localhost:3000/text', form.value)
    .subscribe(
      data => console.log("Success!", data),
      error => console.error('Error!', error)
    );
  }

}
