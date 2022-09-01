import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl , FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { Jugement } from '../models/jugement.model';
import { tap } from 'rxjs/operators';
import { JugementService } from '../services/jugement.service';
import {NgForm} from '@angular/forms';
import { newArray } from '@angular/compiler/src/util';

@Component({
  selector: 'app-jugement',
  templateUrl: './jugement.component.html',
  styleUrls: ['./jugement.component.scss']
})
export class JugementComponent implements OnInit {

  jugementForm = new FormGroup({
    title: new FormControl(''),
    image: new FormControl(''),
    fileSource: new FormControl('')
  });

  listJugements = new Array()

  message : boolean = false;

  constructor(
  private JugementService: JugementService) { }

  ngOnInit(): void {
   
}

//   onSubmitForm() {
//     this.JugementService.addJugement(this.jugementForm.value).pipe(
//         tap(() => this.router.navigateByUrl('/facesnaps'))
//     ).subscribe();
// }


onFileChange(event: any ) {
  console.log(event)
  if (event.target.files.length > 0) {
    const file = event.target.files[0];
    this.jugementForm.patchValue({
      fileSource: file
    });
  }
}
 onClickTest(){
  let test = this.JugementService.getTest().subscribe(
    res => {
      console.log(res)
    }
  )
 }
 onSubmitJugement(){
    const formData = new FormData();
    formData.append('title',this.jugementForm.get('title')?.value??'test');
    formData.append('image',this.jugementForm.get('fileSource')?.value??'test');
    
    this.JugementService.postJugement(formData).subscribe(j => this.listJugements.push(j));
    console.log("ok")
    console.log(this.jugementForm.value)
    this.message =true;
}
}