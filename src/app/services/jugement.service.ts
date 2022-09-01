import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Jugement } from '../models/jugement.model';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JugementService {

constructor(private http: HttpClient) {}



getTest(): Observable<Jugement[]> {
    return this.http.get<Jugement[]>('http://localhost:8080/jugement/test')
}

postJugement(data: any) : Observable<any> {
  console.log("ok")
  console.log(data)
   return this.http.post<Jugement>('http://localhost:8080/jugement/create', data )
}


getAllJugements(): Observable<any> {
  return this.http.get<any>('http://localhost:8080/jugement/classement');
}


// addJugement(formValue: { title: string, imageUrl: string}): Observable<Jugement> {
//   return this.getAllFaceSnaps().pipe(
//        map(facesnaps => [...facesnaps].sort((a,b) => a.id - b.id)),
//        map(sortedFacesnaps => sortedFacesnaps[sortedFacesnaps.length - 1]),
//        map(previousFacesnap => ({
//           ...formValue,
//           snaps: 0,
//           createdDate: new Date(),
//           id: previousFacesnap.id + 1
//       })),
//       switchMap(newFacesnap => this.http.post<FaceSnap>(
//           'http://localhost:3000/facesnaps',
//           newFacesnap)
//       )
//   );
// }
}
