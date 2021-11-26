import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// * Rutas
import {app_routing} from './app-routing';

import {AppComponent} from './app.component';

// * Componentes
import {DemografiaComponent} from './demografia/demografia.component';
import {ConferenciasComponent} from './conferencias/conferencias.component';
import {IdiomaComponent} from './idioma/idioma.component';
import {ModelomultiComponent} from './modelomulti/modelomulti.component';
import { SidebarComponent } from './sidebar/sidebar.component';

// * servicios PrimeNG
import {ButtonModule} from 'primeng/button';
import {ChartModule} from 'primeng/chart';
import {TableModule} from 'primeng/table';
import {ProgressBarModule} from 'primeng/progressbar';
import {CardModule} from 'primeng/card';
import {DialogModule} from 'primeng/dialog';

// * importar la libreria FusionCharts library y sus modulos
import {FusionChartsModule} from 'angular-fusioncharts';
import * as FusionCharts from "fusioncharts";
import * as TimeSeries from 'fusioncharts/fusioncharts.timeseries';
import * as Charts from "fusioncharts/fusioncharts.charts";
import * as Maps from "fusioncharts/fusioncharts.maps";

import * as Widgets from "fusioncharts/fusioncharts.widgets";
import * as Gantt from "fusioncharts/fusioncharts.gantt";
import * as PowerCharts from "fusioncharts/fusioncharts.powercharts";
import * as Msstackedcolumn2dsplinedy from "fusioncharts/fusioncharts.msstackedcolumn2dsplinedy";
import * as MultiCharts from "fusioncharts/fusioncharts.zoomline";

// * mapas
import * as WorldMap from 'fusioncharts/maps/fusioncharts.world';
import * as WorldWithAntarcticaMap from 'fusioncharts/maps/fusioncharts.worldwithantarctica';
import * as WorldWithCountriesMap from 'fusioncharts/maps/fusioncharts.worldwithcountries';

// * cargar tema de Ocean
import * as Ocean from 'fusioncharts/themes/fusioncharts.theme.ocean';
import * as Fint from 'fusioncharts/themes/fusioncharts.theme.fint';
import * as Candy from 'fusioncharts/themes/fusioncharts.theme.candy';
import * as Gammel from 'fusioncharts/themes/fusioncharts.theme.gammel';
import * as Zune from 'fusioncharts/themes/fusioncharts.theme.zune';
import * as Fusion from 'fusioncharts/themes/fusioncharts.theme.fusion';
import * as Carbon from 'fusioncharts/themes/fusioncharts.theme.carbon';

// * libreria High Charts
// import { HighchartsChartModule } from 'highcharts-angular';

// Pass the fusioncharts library and chart modules
FusionChartsModule.fcRoot(
  FusionCharts,
  Gantt,
  Msstackedcolumn2dsplinedy,
  MultiCharts,
  Charts,
  TimeSeries,
  PowerCharts,
  Widgets,
  Maps,
  WorldMap,
  WorldWithAntarcticaMap,
  WorldWithCountriesMap,
  Ocean,
  Fint,
  Gammel,
  Zune,
  Fusion,
  Candy,
  Carbon);

@NgModule({
  declarations: [
    AppComponent,
    DemografiaComponent,
    ConferenciasComponent,
    IdiomaComponent,
    ModelomultiComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ButtonModule,
    ChartModule,
    TableModule,
    CardModule,
    ProgressBarModule,
    FusionChartsModule,
    DialogModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
