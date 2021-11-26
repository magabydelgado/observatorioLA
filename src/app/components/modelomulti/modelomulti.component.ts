import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PreguntaDimensiones} from "./PreguntaDimensiones";
import {PreguntaPieChart} from "./PreguntaPieChart";
import {Pregunta2y3} from "../idioma/Pregunta2y3";
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-modelomulti',
  templateUrl: './modelomulti.component.html',
  styleUrls: ['./modelomulti.component.css']
})
export class ModelomultiComponent implements OnInit {

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

  // * Ventana Modal 4
  displayModal4: boolean = false;

  showModalDialog4() {
    this.displayModal4 = true;
  }

  // * Ventana Modal 5
  displayModal5: boolean = false;

  showModalDialog5() {
    this.displayModal5 = true;
  }

  // * Ventana Modal 6
  displayModal6: boolean = false;

  showModalDialog6() {
    this.displayModal6 = true;
  }

  // * Ventana Modal 7
  displayModal7: boolean = false;

  showModalDialog7() {
    this.displayModal7 = true;
  }

  // * Ventana Modal Datos
  displayModalDatos: boolean = false;

  showModalDialogDatos() {
    this.displayModalDatos = true;
  }

  // * Grafico WHAT
  public datosPreguntaWhat: PreguntaDimensiones[] = [];
  rutaDatosPregunta9 = 'assets/observatorioPregunta9.csv';
  datosWhat = {
    chart: {
      caption: "Dimensión What",
      subcaption: "(Acerque el mouse para obtener más información)",
      yaxisname: "Porcentaje de publicaciones",
      numbersuffix: "%",
      aligncaptionwithcanvas: "0",
      plottooltext: "<b>$label</b> tiene el <b>$dataValue</b> de publicaciones",
      theme: "fusion",
      placevaluesinside: "0",
      showvalues: "1",
      setChartAttribute: "1",
      palettecolors: "#b2d1e0"
    },
    data: this.datosPreguntaWhat
  };

  width = "100%";
  height = "350";
  type = "bar2d";
  dataFormat = "json";
  dataSourceWhat = this.datosWhat;

  // * Grafico WHO
  public datosPreguntaWho: PreguntaDimensiones[] = [];
  rutaDatosPregunta10 = 'assets/observatorioPregunta10.csv';
  datosWho = {
    chart: {
      caption: "Dimensión Who",
      yaxisname: "Porcentaje de publicaciones",
      subcaption: "(Acerque el mouse para obtener más información)",
      numbersuffix: "%",
      aligncaptionwithcanvas: "0",
      plottooltext: "<b>$label</b> tienen el <b>$dataValue</b> de publicaciones",
      theme: "fusion",
      placevaluesinside: "0",
      showvalues: "1",
      setChartAttribute: "1",
      palettecolors: "#b2d1e0"
    },
    data: this.datosPreguntaWho
  };
  dataSourceWho = this.datosWho;

  // * Grafico HOW
  public datosPreguntaHow: PreguntaDimensiones[] = [];
  rutaDatosPregunta11 = 'assets/observatorioPregunta11.csv';
  datosHow = {
    chart: {
      caption: "Dimensión How",
      yaxisname: "Porcentaje de publicaciones",
      subcaption: "(Acerque el mouse para obtener más información)",
      numbersuffix: "%",
      aligncaptionwithcanvas: "0",
      plottooltext: "<b>$label</b> tiene el <b>$dataValue</b> de publicaciones",
      theme: "fusion",
      placevaluesinside: "0",
      showvalues: "1",
      setChartAttribute: "1",
      palettecolors: "#b2d1e0"
    },
    data: this.datosPreguntaHow
  };
  dataSourceHow = this.datosHow;

  // * Grafico WHY
  public datosPreguntaWhy: PreguntaDimensiones[] = [];
  rutaDatosPregunta12 = 'assets/observatorioPregunta12.csv';
  datosWhy = {
    chart: {
      caption: "Dimensión Why",
      yaxisname: "Porcentaje de publicaciones",
      subcaption: "(Acerque el mouse para obtener más información)",
      numbersuffix: "%",
      aligncaptionwithcanvas: "0",
      plottooltext: "<b>$label</b> tiene el <b>$dataValue</b> de publicaciones",
      theme: "fusion",
      placevaluesinside: "0",
      showvalues: "1",
      setChartAttribute: "1",
      palettecolors: "#b2d1e0"
    },
    data: this.datosPreguntaWhy
  };
  dataSourceWhy = this.datosWhy;

  // * Grafico Ética Donut Chart
  public datosPreguntaEtica: PreguntaDimensiones[] = [];
  rutaDatosPregunta13 = 'assets/observatorioPregunta13.csv';
  datosEtica = {
    chart: {
      caption: "Dimensión Ética",
      subcaption: "(Acerque el mouse para obtener más información)",
      showlegend: "1",
      showpercentvalues: "1",
      legendposition: "bottom",
      usedataplotcolorforlabels: "1",
      defaultcenterlabel: "N° de publicaciones",
      centerlabel: "$label: $value",
      theme: "fusion",
      smartLineThickness: "0.8",
      smartLineColor: "767575",
      isSmartLineSlanted: "0",
      palettecolors: "0C4762,3cc7bc,9EF5CF",
      doughnutRadius: "58",
      enableMultiSlicing: "0"
    },
    data: this.datosPreguntaEtica
  };
  dataSourceEtica = this.datosEtica;

  typeDonut = "doughnut2d";

  // * Grafico de Lineas 1
  public datosLineas1Item1: Pregunta2y3[] = [];
  public datosLineas1Item2: Pregunta2y3[] = [];
  public datosLineas1Item3: Pregunta2y3[] = [];
  public datosLineas1Item4: Pregunta2y3[] = [];
  public datosLineas1Item5: Pregunta2y3[] = [];
  rutaDatosPregunta52 = 'assets/observatorioPregunta5.2.csv';
  datosMadurez2 = {
    chart: {
      caption: "Publicaciones por año",
      subcaption: "(Acerque el mouse para obtener más información)",
      xaxisname: "Año",
      yaxisname: "Número total de publicaciones",
      drawcrossline: "1",
      plottooltext: "$seriesName tiene $dataValue publicaciones en el año $label",
      theme: "fusion",
      palettecolors: "9EF5CF,3cc7bc,0C4762,ef8f12,fe9fb8"
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
        seriesname: "Producto en uso",
        anchorbgcolor: "#78d3ab",
        data: this.datosLineas1Item1
      },
      {
        seriesname: "Experimentación",
        anchorbgcolor: "#117c74",
        data: this.datosLineas1Item2
      },
      {
        seriesname: "Solo teórico",
        anchorbgcolor: "#052b3d",
        data: this.datosLineas1Item3
      },
      {
        seriesname: "Comercial",
        anchorbgcolor: "#bd6f09",
        data: this.datosLineas1Item4
      },
      {
        seriesname: "Trabajo analítico",
        anchorbgcolor: "#d5718c",
        data: this.datosLineas1Item5
      }
    ]
  };

  widthLinea = "100%";
  heightLinea = "400";
  typeLinea = "msline";
  dataSourceLinea = this.datosMadurez2;

  // * Grafico Madurez Pie Chart
  public datosPreguntaMat: PreguntaPieChart[] = [];
  rutaDatosPregunta51 = 'assets/observatorioPregunta5.1.csv';
  datosMadurez = {
    chart: {
      caption: "Dimensión Madurez",
      subcaption: "(Acerque el mouse para obtener más información)",
      plottooltext: "<b>$percentValue</b> de las publicaciones tienen un nivel de madurez de tipo: <b>$label</b>",
      showlegend: "1",
      showpercentvalues: "1",
      legendposition: "bottom",
      usedataplotcolorforlabels: "1",
      theme: "fusion",
      smartLineThickness: "1",
      smartLineColor: "767575",
      isSmartLineSlanted: "0",
      palettecolors: "fe9fb8,9EF5CF,3cc7bc,ef8f12,0C4762"
    },
    data: this.datosPreguntaMat
  };
  dataSourceMat = this.datosMadurez;

  widthPie = "100%";
  heightPie = "400";
  typePie = "pie2d";

  // * Grafico de Lineas 2
  public datosLineas2Item1: Pregunta2y3[] = [];
  public datosLineas2Item2: Pregunta2y3[] = [];
  public datosLineas2Item3: Pregunta2y3[] = [];
  public datosLineas2Item4: Pregunta2y3[] = [];
  rutaDatosPregunta4 = 'assets/observatorioPregunta4.csv';
  datosEnfoque = {
    chart: {
      caption: "Publicaciones por año",
      subcaption: "(Acerque el mouse para obtener más información)",
      xaxisname: "Año",
      yaxisname: "Número total de publicaciones",
      drawcrossline: "1",
      plottooltext: "$seriesName tiene $dataValue publicaciones en el año $label",
      theme: "fusion",
      palettecolors: "0C4762,3cc7bc,9EF5CF,ef8f12,fe9fb8"
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
            "vline": "true",
            "lineposition": "0",
            "thickness": "2",
            "color": "#fe9fb8",
            "labelhalign": "left",
            "labelposition": "0",
            "label": "Crecimiento del enfoque descritivo",
            "dashed": "1"
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
        seriesname: "Descriptivo",
        anchorbgcolor: "#052b3d",
        data: this.datosLineas2Item1
      },
      {
        seriesname: "Filosófico",
        anchorbgcolor: "#117c74",
        data: this.datosLineas2Item2
      },
      {
        seriesname: "Uso de teoría",
        anchorbgcolor: "#78d3ab",
        data: this.datosLineas2Item3
      },
      {
        seriesname: "Prueba de teoría",
        anchorbgcolor: "#bd6f09",
        data: this.datosLineas2Item4
      }
    ]
  };

  widthLinea2 = "100%";
  heightLinea2 = "350";
  dataSourceLinea2 = this.datosEnfoque;

  constructor(private http: HttpClient, private primengConfig: PrimeNGConfig) {
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.obtenerInformacionPregunta9();
    this.obtenerInformacionPregunta10();
    this.obtenerInformacionPregunta11();
    this.obtenerInformacionPregunta12();
    this.obtenerInformacionPregunta51();
    this.obtenerInformacionPregunta52();
    this.obtenerInformacionPregunta13();
    this.obtenerInformacionPregunta4();
  }

  // * Funcion para recuperar los datos del CSV Pregunta 9
  obtenerInformacionPregunta9() {
    this.http.get(this.rutaDatosPregunta9, {responseType: 'text'})
      .subscribe(
        data => {
          let csvToRowArray = data.split("\n");
          for (let index = 1; index < csvToRowArray.length - 1; index++) {
            let row = csvToRowArray[index].split(";");
            this.datosPreguntaWhat.push(new PreguntaDimensiones(row[0], row[1]));
          }
        },
        error => {
          console.log(error);
        }
      );
  }

  // * Funcion para recuperar los datos del CSV Pregunta 10
  obtenerInformacionPregunta10() {
    this.http.get(this.rutaDatosPregunta10, {responseType: 'text'})
      .subscribe(
        data => {
          let csvToRowArray = data.split("\n");
          for (let index = 1; index < csvToRowArray.length - 1; index++) {
            let row = csvToRowArray[index].split(";");
            this.datosPreguntaWho.push(new PreguntaDimensiones(row[0], row[1]));
          }
        },
        error => {
          console.log(error);
        }
      );
  }

  // * Funcion para recuperar los datos del CSV Pregunta 11
  obtenerInformacionPregunta11() {
    this.http.get(this.rutaDatosPregunta11, {responseType: 'text'})
      .subscribe(
        data => {
          let csvToRowArray = data.split("\n");
          for (let index = 1; index < csvToRowArray.length - 1; index++) {
            let row = csvToRowArray[index].split(";");
            this.datosPreguntaHow.push(new PreguntaDimensiones(row[0], row[1]));
          }
        },
        error => {
          console.log(error);
        }
      );
  }

  // * Funcion para recuperar los datos del CSV Pregunta 11
  obtenerInformacionPregunta12() {
    this.http.get(this.rutaDatosPregunta12, {responseType: 'text'})
      .subscribe(
        data => {
          let csvToRowArray = data.split("\n");
          for (let index = 1; index < csvToRowArray.length - 1; index++) {
            let row = csvToRowArray[index].split(";");
            this.datosPreguntaWhy.push(new PreguntaDimensiones(row[0], row[1]));
          }
        },
        error => {
          console.log(error);
        }
      );
  }

  // * Funcion para recuperar los datos del CSV Pregunta 5.1
  obtenerInformacionPregunta51() {
    this.http.get(this.rutaDatosPregunta51, {responseType: 'text'})
      .subscribe(
        data => {
          let csvToRowArray = data.split("\n");
          for (let index = 1; index < csvToRowArray.length - 1; index++) {
            let row = csvToRowArray[index].split(";");
            if (parseInt(row[1], 10) < 1) {
              this.datosPreguntaMat.push(new PreguntaPieChart(row[0], row[1], "1"));
            } else {
              this.datosPreguntaMat.push(new PreguntaPieChart(row[0], row[1], ""));
            }
          }
        },
        error => {
          console.log(error);
        }
      );
  }

  // * Funcion para recuperar los datos del CSV Pregunta 5.2
  obtenerInformacionPregunta52() {
    this.http.get(this.rutaDatosPregunta52, {responseType: 'text'})
      .subscribe(
        data => {
          let csvToRowArray = data.split("\n");
          for (let index = 1; index < csvToRowArray.length - 1; index++) {
            let row = csvToRowArray[index].split(",");
            this.datosLineas1Item1.push(new Pregunta2y3(row[1]));
            this.datosLineas1Item2.push(new Pregunta2y3(row[2]));
            this.datosLineas1Item3.push(new Pregunta2y3(row[3]));
            this.datosLineas1Item4.push(new Pregunta2y3(row[4]));
            this.datosLineas1Item5.push(new Pregunta2y3(row[5]));
          }
        },
        error => {
          console.log(error);
        }
      );
  }

  // * Funcion para recuperar los datos del CSV Pregunta 13
  obtenerInformacionPregunta13() {
    this.http.get(this.rutaDatosPregunta13, {responseType: 'text'})
      .subscribe(
        data => {
          let csvToRowArray = data.split("\n");
          for (let index = 1; index < csvToRowArray.length - 1; index++) {
            let row = csvToRowArray[index].split(",");
            this.datosPreguntaEtica.push(new PreguntaDimensiones(row[0], row[1]));
          }
        },
        error => {
          console.log(error);
        }
      );
  }

  // * Funcion para recuperar los datos del CSV Pregunta 4
  obtenerInformacionPregunta4() {
    this.http.get(this.rutaDatosPregunta4, {responseType: 'text'})
      .subscribe(
        data => {
          let csvToRowArray = data.split("\n");
          for (let index = 1; index < csvToRowArray.length - 1; index++) {
            let row = csvToRowArray[index].split(",");
            this.datosLineas2Item1.push(new Pregunta2y3(row[1]));
            this.datosLineas2Item2.push(new Pregunta2y3(row[2]));
            this.datosLineas2Item3.push(new Pregunta2y3(row[3]));
            this.datosLineas2Item4.push(new Pregunta2y3(row[4]));
          }
        },
        error => {
          console.log(error);
        }
      );
  }

}
