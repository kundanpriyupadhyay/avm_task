import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AirQualityComponent } from './air-quality/air-quality.component';
import { AudioComponent } from './audio/audio.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { DisplayComponent } from './display/display.component';
import { LightingComponent } from './lighting/lighting.component';

@NgModule({
  declarations: [
    AppComponent,
    AirQualityComponent,
    AudioComponent,
    TemperatureComponent,
    DisplayComponent,
    LightingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
