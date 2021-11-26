import { Routes, RouterModule } from "@angular/router";

// * Importar componentes
import { DemografiaComponent } from './demografia/demografia.component';
import { ConferenciasComponent } from './conferencias/conferencias.component';
import{ IdiomaComponent} from './idioma/idioma.component';
import { ModelomultiComponent } from './modelomulti/modelomulti.component';

const app_routes : Routes = [
  {path: '', redirectTo: '/demografia', pathMatch: 'full'},
  {path: 'demografia', component: DemografiaComponent},
  {path: 'conferencias', component: ConferenciasComponent},
  {path:  'idioma', component: IdiomaComponent},
  {path: 'modelomulti', component: ModelomultiComponent}
];

export const app_routing = RouterModule.forRoot(app_routes, { useHash: true });




