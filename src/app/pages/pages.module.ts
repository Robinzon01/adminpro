import { ComponentsModule } from './../components/components.module';
import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { PagesComponent } from './pages.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { ProgressComponent } from './progress/progress.component';
import { ConsultaEspecialComponent } from './consulta-especial/consulta-especial.component';
import { IsanegComponent } from './isaneg/isaneg.component';
import { NuestraEmpresaComponent } from './nuestra-empresa/nuestra-empresa.component';
import { NuestroServicioComponent } from './nuestro-servicio/nuestro-servicio.component';
import { PcpeProduccionComponent } from './pcpe-produccion/pcpe-produccion.component';
import { PcpeSgcorComponent } from './pcpe-sgcor/pcpe-sgcor.component';
import { PcpeSgdiComponent } from './pcpe-sgdi/pcpe-sgdi.component';
import { PcpeSilegComponent } from './pcpe-sileg/pcpe-sileg.component';
import { NuestroProductosComponent } from './nuestro-productos/nuestro-productos.component';
import { SgcorComponent } from './sgcor/sgcor.component';
import { TrabajosRealizadosComponent } from './trabajos-realizados/trabajos-realizados.component';
import { CioComponent } from './cio/cio.component';
import { CiopeComponent } from './ciope/ciope.component';
import { ClientesComponent } from './clientes/clientes.component';
import { CapacitacionComponent } from './capacitacion/capacitacion.component';
import { AlianzasComponent } from './alianzas/alianzas.component';

@NgModule({
  declarations: [
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
    ConsultaEspecialComponent,
    IsanegComponent,
    NuestraEmpresaComponent,
    NuestroServicioComponent,
    PcpeProduccionComponent,
    PcpeSgcorComponent,
    PcpeSgdiComponent,
    PcpeSilegComponent,
    NuestroProductosComponent,
    SgcorComponent,
    TrabajosRealizadosComponent,
    CioComponent,
    CiopeComponent,
    ClientesComponent,
    CapacitacionComponent,
    AlianzasComponent
  ],exports: [
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
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
