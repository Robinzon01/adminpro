import { AlianzasComponent } from './alianzas/alianzas.component';
import { CapacitacionComponent } from './capacitacion/capacitacion.component';
import { ClientesComponent } from './clientes/clientes.component';
import { CiopeComponent } from './ciope/ciope.component';
import { CioComponent } from './cio/cio.component';
import { TrabajosRealizadosComponent } from './trabajos-realizados/trabajos-realizados.component';
import { SgcorComponent } from './sgcor/sgcor.component';
import { PcpeSilegComponent } from './pcpe-sileg/pcpe-sileg.component';
import { PcpeSgcorComponent } from './pcpe-sgcor/pcpe-sgcor.component';
import { PcpeProduccionComponent } from './pcpe-produccion/pcpe-produccion.component';
import { NuestroServicioComponent } from './nuestro-servicio/nuestro-servicio.component';
import { NuestraEmpresaComponent } from './nuestra-empresa/nuestra-empresa.component';
import { IsanegComponent } from './isaneg/isaneg.component';
import { ConsultaEspecialComponent } from './consulta-especial/consulta-especial.component';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NuestroProductosComponent } from './nuestro-productos/nuestro-productos.component';

const routes: Routes = [
 
    {
        path: 'dashboard', component: PagesComponent,
        children: [
          {path: '', component: DashboardComponent },
          {path: 'consulta-especial', component: ConsultaEspecialComponent },
          {path: 'cdsi', component: NuestraEmpresaComponent },
          {path: 'productos',
            children: [
                {path: '', component: NuestroProductosComponent },
                {path: 'sgcor', component: SgcorComponent }
            ]
          }, 
          /* {path: 'servicios', component: NuestroServicioComponent}, */
          {path: 'servicios',
            children: [
                {path: '', component: NuestroServicioComponent },
                {path: 'pcpe_produccion', component: PcpeProduccionComponent },
                {path: 'pcpe_sgcor', component: PcpeSgcorComponent },
                {path: 'pcpe_sgdi', component: PcpeSgcorComponent },
                {path: 'pcpe_sileg', component: PcpeSilegComponent }
            ]
          },
        /*   {path: 'pcpe_produccion', component: PcpeProduccionComponent }, */
          {path: 'isaneg', component: IsanegComponent },
          {path: 'con_inv_ope', component: CioComponent },
          {path:  'tra_rea_io',component: CiopeComponent},
          {path:  'clientes',component: ClientesComponent},
          {path:  'capacitacion',component: CapacitacionComponent},
          {path:  'alianzas',component: AlianzasComponent},
          {path: 'tra_rea', component: TrabajosRealizadosComponent }

        ]
    }
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
