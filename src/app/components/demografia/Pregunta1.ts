export class Pregunta1 {
  id: string;
  value: string;
  nombrePais: string;
  acronimo: string;
  numPubli: string;

  constructor(id: string, value: string, nombrePais: string, acronimo: string, numPubli: string) {
    this.id = id;
    this.value = value;
    this.nombrePais = nombrePais;
    this.acronimo = acronimo;
    this.numPubli = numPubli;
  }
}
