import { Cuentas } from "./cuentas";

export class Caja_Ahorro extends Cuentas {
    public interes: number;

    constructor(numero: number, saldo: number, moneda: string, interes : number) {
        
        super(numero,saldo,moneda);
        this.interes= interes;
        
    }
    aplicarInteres () {
       
        console.log(`        Interes: `+this.interes*this.saldo/100+` ${this.moneda}`);        
    }
    
    imprimir() {        
        console.log('Caja de ahorro');
        super.imprimir();   
        this.aplicarInteres();     
    }

    

}