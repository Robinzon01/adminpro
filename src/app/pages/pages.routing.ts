import { NuestraEmpresaComponent } from './nuestra-empresa/nuestra-empresa.component';
import { IsanegComponent } from './isaneg/isaneg.component';
import { ConsultaEspecialComponent } from './consulta-especial/consulta-especial.component';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
 
    {
        path: 'dashboard', component: PagesComponent,
        children: [
          {path: '', component: DashboardComponent },
          {path: 'consulta-especial', component: ConsultaEspecialComponent },
          {path: 'cdsi', component: NuestraEmpresaComponent },
          {path: 'isaneg', component: IsanegComponent }
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
