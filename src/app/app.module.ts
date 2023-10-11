import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPanZoomModule } from 'ngx-panzoom';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { MatTabsModule } from '@angular/material/tabs';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSliderModule} from '@angular/material/slider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';

import { AppComponent } from './app.component';
import { ZoomableCanvasComponent } from './Components/zoomable-canvas/zoomable-canvas.component';
import { GradingInterfaceComponent } from './Components/grading-interface/grading-interface.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InstructionPageComponent } from './Components/instruction-page/instruction-page.component';
import { LoginComponent } from './Components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ZoomableCanvasComponent,
    GradingInterfaceComponent,
    InstructionPageComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPanZoomModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTabsModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatButtonToggleModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
