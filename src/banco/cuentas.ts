//import { Caja_Ahorro } from "./caja_ahorro";
export abstract class Cuentas {
    public numero : number;
    public saldo : number;
    public moneda : string;
    constructor(numero: number, saldo: number, moneda: string ){
        this.numero = numero;
        this.saldo = saldo;
        this.moneda = moneda;
    }
    imprimir () {
        console.log(`        Nro Cuenta:  ${this.numero}
        Saldo:   ${this.saldo} 
        Moneda:  ${this.moneda}.`);        
    }

}