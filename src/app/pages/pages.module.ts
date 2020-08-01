import { ComponentsModule } from './../components/components.module';
import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { PagesComponent } from './pages.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { ProgressComponent } from './progress/progress.component';

@NgModule({
  declarations: [
    ProgressComponent,
    Grafica1Component,
    PagesComponent
  ],exports: [
    ProgressComponent,
    Grafica1Component,
    PagesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    FormsModule,
    ComponentsModule
  ]
})
export class PagesModule { }
