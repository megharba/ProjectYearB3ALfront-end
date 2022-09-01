import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassementComponent } from './classement/classement.component';
import { JugementComponent } from './jugement/jugement.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
    { path: 'jugement', component: JugementComponent },
    { path: 'classement', component: ClassementComponent },
    { path: '', component: LandingPageComponent }
  ];

  @NgModule({
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [
      RouterModule
    ]
  })
export class AppRoutingModule {}