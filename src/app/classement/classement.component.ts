import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Jugement } from '../models/jugement.model';
import { JugementService } from '../services/jugement.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-classement',
  templateUrl: './classement.component.html',
  styleUrls: ['./classement.component.scss']
})
export class ClassementComponent implements OnInit {
  jugementsObservable!: Observable<Jugement[]>;
  jugements! : Jugement[];
  data: any =[];
  
 
  


  constructor(private JugementService: JugementService, public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.JugementService.getAllJugements().subscribe(res => res.jugements.forEach((jugement:any) => {
      console.log("response:",res)
      console.log("jugement",jugement)
      this.data.push(jugement)
      // this.sanitizer.bypassSecurityTrustHtml(this.data.imageUrl)
    }));
    
    
  }

}

