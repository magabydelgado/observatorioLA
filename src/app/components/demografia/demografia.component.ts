import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { PrimeNGConfig } from 'primeng/api';
import {Pregunta1} from "./Pregunta1";

@Component({
  selector: 'app-demografia',
  templateUrl: './demografia.component.html',
  styleUrls: ['./demografia.component.css']
})
export class DemografiaComponent implements OnInit {

  // * Ventana Modal
  displayModal: boolean = false;

  showModalDialog() {
    this.displayModal = true;
  }

  // * Ventana Modal Datos
  displayModalDatos: boolean = false;

  showModalDialogDatos() {
    this.displayModalDatos = true;
  }

  public datosPregunta1: Pregunta1[] = [];
  public datosTabla: Pregunta1[] = [];
  rutaDatosPregunta1 = 'assets/observatorioPregunta1.csv';
  rutaDatosPregunta1Tabla = 'assets/observatorioPregunta1.1.csv';

  // rutaDatosPreguntaDiego = 'assets/pregunta62.csv'
  // public datosDiego: Pregunta1[] = [];

  datosMapChart = {
    chart: {
      caption: "Número de publicaciones por país",
      subcaption: "(Haga clic en un país para obtener más información)",
      legendposition: "BOTTOM",
      entityfillhovercolor: "#c6e8e6",
      entitytooltext: "$lname tiene un total de <b>$dataValue</b> publicaciones.",
      legendcaption: "Número de publicaciones",
      theme: "fusion"
    },
    colorrange: {
      gradient: "0",
      color: [
        {
          maxvalue: "0",
          displayvalue: "0",
          code: "#f5f4f4"
        },
        {
          minvalue: "1",
          maxvalue: "10",
          displayvalue: "1 - 10",
          code: "#d0e1f3"
        },
        {
          minvalue: "10",
          maxvalue: "30",
          displayvalue: "10 - 30",
          code: "#a7c9f3"
        },
        {
          minvalue: "30",
          maxvalue: "50",
          displayvalue: "30 - 50",
          code: "#7e97dd"
        },
        {
          minvalue: "50",
          maxvalue: "250",
          displayvalue: "50 - 200",
          code: "#4077ad"
        },
        {
          minvalue: "250",
          maxvalue: "800",
          displayvalue: ">250",
          code: "#013473"
        }
      ]
    },
    data: [
      {
        data: this.datosPregunta1
      }
    ]
  };

  // * Grafico de Map Chart
  width = "100%";
  height = "480";
  type = "worldwithcountries";
  dataFormat = "json";
  dataSource = this.datosMapChart;

  first = 0;
  rows = 5;
  totalRecords: number = 0;

  constructor(private http: HttpClient, private primengConfig: PrimeNGConfig) {
  }

  // ? Se ejecuta después del constructor, aqui se dice que el componente ya está listo para darle uso.
  ngOnInit() {
    this.primengConfig.ripple = true;
    this.obtenerInformacion();
    this.obtenerInformacionTabla();
  }


// * Funcion para recuperar los datos del CSV
  obtenerInformacion() {
    this.http.get(this.rutaDatosPregunta1, {responseType: 'text'})
      .subscribe(
        data => {
          let csvToRowArray = data.split("\n");
          for (let index = 1; index < csvToRowArray.length - 1; index++) {
            let row = csvToRowArray[index].split(";");
            this.datosPregunta1.push(new Pregunta1(row[0], row[1], "", "",""));
          }
          this.totalRecords =this.datosTabla.length;
        },
        error => {
          console.log(error);
        }
      );
  }

  // * Funcion para recuperar los datos del CSV
  obtenerInformacionTabla() {
    this.http.get(this.rutaDatosPregunta1Tabla, {responseType: 'text'})
      .subscribe(
        data => {
          let csvToRowArray = data.split("\n");
          for (let index = 1; index < csvToRowArray.length - 1; index++) {
            let row = csvToRowArray[index].split(";");
            this.datosTabla.push(new Pregunta1(row[5], row[4], row[3], row[2], row[1]));
          }
          this.totalRecords =this.datosTabla.length;
        },
        error => {
          console.log(error);
        }
      );
  }

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  isFirstPage(): boolean {
    return this.datosTabla ? this.first === 0 : true;
  }
}

