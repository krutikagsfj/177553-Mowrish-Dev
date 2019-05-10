import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//manually imported modules
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing/app-routing.module';

//manually imported components
import { AppComponent } from './app.component';
import { GameCityComponent } from './game-city/game-city.component';
import { PlayComponent } from './play/play.component';

@NgModule({
  declarations: [
    AppComponent,
    GameCityComponent,
    PlayComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule //importing user created AppRoutingModule so that Routing is available to the whole application
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
