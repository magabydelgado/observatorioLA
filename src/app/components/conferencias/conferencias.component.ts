import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Pregunta61} from "./Pregunta61";
import {Pregunta62} from "./Pregunta62";
import {Pregunta8} from "./Pregunta8";
import { PrimeNGConfig } from 'primeng/api';

import * as Highcharts from 'highcharts';
import HC_more from "highcharts/highcharts-more";

HC_more(Highcharts);

interface ExtendedChart extends Highcharts.PlotPackedbubbleOptions {
  layoutAlgorithm: {
    splitSeries: any;
  };
}

@Component({
  selector: 'app-conferencias',
  templateUrl: './conferencias.component.html',
  styleUrls: ['./conferencias.component.css']
})
export class ConferenciasComponent implements OnInit {

  // * Ventana Modal 1
  displayModal1: boolean = false;

  showModalDialog1() {
    this.displayModal1 = true;
  }

  // * Ventana Modal 2
  displayModal2: boolean = false;

  showModalDialog2() {
    this.displayModal2 = true;
  }

  // * Ventana Modal 3
  displayModal3: boolean = false;

  showModalDialog3() {
    this.displayModal3 = true;
  }

  // * Ventana Modal Datos
  displayModalDatos: boolean = false;

  showModalDialogDatos() {
    this.displayModalDatos = true;
  }

  public datosPregunta61: Pregunta61[] = [];
  rutaDatosPregunta61 = 'assets/observatorioPregunta6.1.csv';
  public datosPregunta62: Pregunta62[] = [];
  rutaDatosPregunta62 = 'assets/observatorioPregunta6.2.csv';
  public datosTabla: Pregunta8[] = [];
  rutaDatosPregunta8 = 'assets/observatorioPregunta8.csv';

  datosGraficoBarras = {
    chart: {
      caption: "Publicaciones por conferencia",
      entityfillhovercolor: "#55cec7",
      subcaption: "(Acerque el mouse para obtener más información)",
      xAxisName: "Conferencia", //Set the x-axis name
      yAxisName: "Número total de publicaciones", //Set the y-axis name
      plottooltext: "<b>$label</b> tiene <b>$dataValue</b> publicaciones",
      theme: "fusion",
      placevaluesinside: "0",
      showvalues: "1",
      setChartAttribute: "1",
      palettecolors: "0C4762,51DACF,9EF5CF"
    },
    data: this.datosPregunta61
  };

  // * Grafico de Barras Horizontales
  width = "100%";
  height = "400";
  type = "bar2d";
  dataFormat = "json";
  dataSource = this.datosGraficoBarras;

  // * Grafico de Mapa de Calor
  datosMapaCalor = {
    chart: {
      theme: "fusion",
      caption: "Publicaciones por idioma",
      subcaption: "(Acerque el mouse para obtener más información)",
      plottooltext: "La conferencia <b>$columnLabel</b> tiene <b>$dataValue</b> publicaciones en <b>$rowLabel</b>",
      showValues: "1",
      xAxisName: "Idioma",
      yAxisName: "Conferencia",
      showPlotBorder: "1",
    },
    dataset: [
      {
        data: this.datosPregunta62
      }
    ],
    colorRange: {
      gradient: "1",
      minValue: "0",
      code: "#f5f4f4",
      color: [
        {
          code: "#81a9c4",
          minValue: "0",
          maxValue: "10",
        },
        {
          code: "#1B4F72",
          minValue: "10",
          maxValue: 20,
        }
      ]
    }
  };
  width2 = "100%";
  type2 = "heatmap";
  dataSource2 = this.datosMapaCalor;

  constructor(private http: HttpClient, private primengConfig: PrimeNGConfig) {
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.obtenerInformacionBarras();
    this.obtenerInformacionMapaCalor();
    this.obtenerInformacion8();
    this.bubbleChartActive();
  }

  // * Funcion para recuperar los datos del CSV pregunta 6.1 Barras Horizontales
  obtenerInformacionBarras() {
    this.http.get(this.rutaDatosPregunta61, {responseType: 'text'})
      .subscribe(
        data => {
          let csvToRowArray = data.split("\n");
          for (let index = 1; index < csvToRowArray.length - 1; index++) {
            let row = csvToRowArray[index].split(",");
            this.datosPregunta61.push(new Pregunta61(row[0], row[1]));
          }
        },
        error => {
          console.log(error);
        }
      );
  }

  // * Funcion para recuperar los datos del CSV pregunta 6.2 Mapa de Calor
  obtenerInformacionMapaCalor() {
    this.http.get(this.rutaDatosPregunta62, {responseType: 'text'})
      .subscribe(
        data => {
          let csvToRowArray = data.split("\n");
          let cont = 1;
          let column = csvToRowArray[0].split(",");
          for (let index = 1; index < csvToRowArray.length - 1; index++) {
            let row = csvToRowArray[index].split(",");
            cont = 1;
            while (cont <= 5) {
              let a = row[cont];
              if (parseInt(a, 10) >= 0 && parseInt(a, 10) < 5) {
                this.datosPregunta62.push(new Pregunta62(row[0], column[cont], row[cont]));
              } else if (parseInt(a, 10) >= 5 && parseInt(a, 10) < 10) {
                this.datosPregunta62.push(new Pregunta62(row[0], column[cont], row[cont]));
              } else if (parseInt(a, 10) >= 10 && parseInt(a, 10) < 20) {
                this.datosPregunta62.push(new Pregunta62(row[0], column[cont], row[cont]));
              }
              cont = cont + 1;
            }
          }
        },
        error => {
          console.log(error);
        }
      );
  }

  // * Funcion para recuperar los datos del CSV pregunta 8 Tabla PrimeNG
  obtenerInformacion8() {
    this.http.get(this.rutaDatosPregunta8, {responseType: 'text'})
      .subscribe(
        data => {
          let csvToRowArray = data.split("\n");
          for (let index = 1; index < csvToRowArray.length - 1; index++) {
            let row = csvToRowArray[index].split(",");
            this.datosTabla.push(new Pregunta8(row[0], row[2], row[1]));
          }
        },
        error => {
          console.log(error);
        }
      );
  }

  // * Funcion para recuperar los datos del CSV Packed Bubble Chart
  bubbleChartActive() {
    const chart = Highcharts.chart({
      chart: {
        renderTo: "containerBubble",
        type: "packedbubble",
        height: "79%"
      },
      title: {
        text: ""
      },
      tooltip: {
        useHTML: true,
        pointFormat: "<b>{point.name}:</b> {point.value} publicaciones"
      },
      plotOptions: {
        packedbubble: {
          minSize: "50%",
          maxSize: "100%",
          zMin: 0,
          zMax: 1000,
          layoutAlgorithm: {
            gravitationalConstant: 0.05,
            splitSeries: true,
            seriesInteraction: false,
            dragBetweenSeries: true,
            parentNodeLimit: true
          },
          minPointSize: 50,
          dataLabels: {
            enabled: true,
            format: "{point.name}",
            style: {
              color: "black",
              textOutline: "none",
              fontWeight: "normal"
            }
          }
        } as ExtendedChart
      },
      series: [
        {
          type: "packedbubble",
          crisp: true,
          name: "Año",
          color: "#797e81",
          data: [
            {
              name: "2011",
              color: "#dd9435",
              value: 2
            },
            {
              name: "2013",
              color: "#dd355c",
              value: 7
            },
            {
              name: "2014",
              color: "#0ec22c",
              value: 14
            },
            {
              name: "2015",
              color: "#e8cb0b",
              value: 34
            },
            {
              name: "2016",
              color: "#8c35dd",
              value: 46
            },
            {
              name: "2017",
              color: "#fe9fb8",
              value: 47
            },
            {
              name: "2018",
              color: "#51dacf",
              value: 63
            },
            {
              name: "2019",
              color: "#0c4762",
              value: 69
            }
          ]
        }
      ]
    });
  }
}
