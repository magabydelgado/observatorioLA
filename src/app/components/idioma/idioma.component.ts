import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Pregunta2y3} from "./Pregunta2y3";
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-idioma',
  templateUrl: './idioma.component.html',
  styleUrls: ['./idioma.component.css']
})
export class IdiomaComponent implements OnInit {

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

  // * Ventana Modal Datos
  displayModalDatos: boolean = false;

  showModalDialogDatos() {
    this.displayModalDatos = true;
  }

  // * Grafico de Lineas
  public datosAreaIngles: Pregunta2y3[] = [];
  public datosAreaEspanol: Pregunta2y3[] = [];
  public datosAreaPortugues: Pregunta2y3[] = [];
  rutaDatosPregunta2 = 'assets/observatorioPregunta2.1.csv';

  datosArea = {
    chart: {
      caption: "Publicaciones por año",
      xaxisname: "Año",
      yaxisname: "Número total de publicaciones",
      subcaption: "(Acerque el mouse para obtener más información)",
      drawcrossline: "1",
      plottooltext: "$seriesName tiene $dataValue publicaciones en el año $label",
      theme: "fusion",
      palettecolors: "0C4762,51DACF,dd9435"
    },
    categories: [
      {
        category: [
          {
            label: "2011"
          },
          {
            label: "2012"
          },
          {
            label: "2013"
          },
          {
            label: "2014"
          },
          {
            label: "2015"
          },
          {
            label: "2016"
          },
          {
            label: "2017"
          },
          {
            "vline": "true",
            "lineposition": "0",
            "thickness": "2",
            "color": "#fe9fb8",
            "labelhalign": "center",
            "labelposition": "0",
            "label": "Crecimiento del publicaciones en español",
            "dashed": "1"
          },
          {
            label: "2018"
          },
          {
            label: "2019"
          }
        ]
      }
    ],
    dataset: [
      {
        seriesname: "Inglés",
        anchorbgcolor: "#0C4762",
        data: this.datosAreaIngles
      },
      {
        seriesname: "Español",

        anchorbgcolor: "#51DACF",
        data: this.datosAreaEspanol
      },
      {
        seriesname: "Portugués",

        anchorbgcolor: "#dd9435",
        data: this.datosAreaPortugues
      }
    ]
  };

  widthArea = "100%";
  heightArea = "378";
  typeArea = "msline";
  dataFormat = "json";
  dataSourceArea = this.datosArea;


  // * Grafico de Barras Agrupadas
  public datosBarrasIngles: Pregunta2y3[] = [];
  public datosBarrasEspanol: Pregunta2y3[] = [];
  public datosBarrasPortugues: Pregunta2y3[] = [];
  rutaDatosPregunta3 = 'assets/observatorioPregunta3.csv';

  datosBarrasAgrupadas = {
    chart: {
      caption: "Idioma por tipo de publicación",
      subcaption: "(Acerque el mouse para obtener más información)",
      xaxisname: "Tipo de publicación",
      yaxisname: "Número total de publicaciones",
      formatnumberscale: "1",
      plottooltext:
        "<b>$dataValue</b> publicaciones en <b>$seriesName</b> de tipo $label",
      theme: "fusion",
      drawcrossline: "1",
      palettecolors: "0C4762,51DACF,9EF5CF"
    },
    categories: [
      {
        category: [
          {
            label: "Conferencia"
          },
          {
            label: "Revista"
          },
          {
            label: "Taller"
          },
          {
            label: "Capítulo del libro"
          }
        ]
      }
    ],
    dataset: [
      {
        seriesname: "Inglés",
        data: this.datosBarrasIngles
      },
      {
        seriesname: "Portugués",
        data: this.datosBarrasPortugues
      },
      {
        seriesname: "Español",
        data: this.datosBarrasEspanol
      }
    ]
  };

  widthBarrasAgrupadas = "100%";
  heightBarrasAgrupadas = "504";
  typeBarrasAgrupadas = "mscolumn2d";
  dataSourceBarrasAgrupadas = this.datosBarrasAgrupadas;

  constructor(private http: HttpClient, private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.obtenerInformacionPregunta2();
    this.obtenerInformacionPregunta3();
  }

  // * Funcion para recuperar los datos del CSV Pregunta 2
  obtenerInformacionPregunta2() {
    this.http.get(this.rutaDatosPregunta2, {responseType: 'text'})
      .subscribe(
        data => {
          let csvToRowArray = data.split("\n");
          for (let index = 1; index < csvToRowArray.length - 1; index++) {
            let row = csvToRowArray[index].split(",");
            this.datosAreaPortugues.push(new Pregunta2y3(row[1]));
            this.datosAreaEspanol.push(new Pregunta2y3(row[2]));
            this.datosAreaIngles.push(new Pregunta2y3(row[3]));
          }
        },
        error => {
          console.log(error);
        }
      );
  }

  // * Funcion para recuperar los datos del CSV Pregunta 3
  obtenerInformacionPregunta3() {
    this.http.get(this.rutaDatosPregunta3, {responseType: 'text'})
      .subscribe(
        data => {
          let csvToRowArray = data.split("\n");
          for (let index = 1; index < csvToRowArray.length - 1; index++) {
            let row = csvToRowArray[index].split(",");
            this.datosBarrasEspanol.push(new Pregunta2y3(row[1]));
            this.datosBarrasIngles.push(new Pregunta2y3(row[2]));
            this.datosBarrasPortugues.push(new Pregunta2y3(row[3]));
          }
        },
        error => {
          console.log(error);
        }
      );
  }
}
