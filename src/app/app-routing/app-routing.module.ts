import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//manually imported modules
import { Routes, RouterModule } from "@angular/router";

//manually imported components
import { PlayComponent } from '../play/play.component';
import { GameCityComponent } from '../game-city/game-city.component';

//setting path routes
export const routes: Routes = [
  {
    path: '',
    component: GameCityComponent,
    pathMatch: 'full'
  },
  {
    path: 'game-city',
    component: GameCityComponent
  },
  {
    path: 'play',
    component: PlayComponent,
  }
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule], //exporting router module (check app module imports)
  declarations: []
})
export class AppRoutingModule { }
