import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Jugement } from '../models/jugement.model';
import { JugementService } from '../services/jugement.service';

@Component({
  selector: 'app-classement',
  templateUrl: './classement.component.html',
  styleUrls: ['./classement.component.scss']
})
export class ClassementComponent implements OnInit {
  jugementsObservable!: Observable<Jugement[]>;
  jugements! : Jugement[];
  data: any =[];

 
  


  constructor(private JugementService: JugementService) { }

  ngOnInit(): void {
    
    this.JugementService.getAllJugements().subscribe(res => res.jugements.forEach((jugement:any) => {
      console.log(res)
      console.log(jugement)
      this.data.push(jugement)
    }));
    
    
  }

}

