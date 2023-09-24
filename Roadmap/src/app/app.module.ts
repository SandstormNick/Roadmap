import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StartPointComponent } from './start-point/start-point.component';
import { LayerComponent } from './layer/layer.component';
import { EndGoalComponent } from './end-goal/end-goal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StartPointComponent,
    LayerComponent,
    EndGoalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
