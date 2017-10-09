import { Cuentas } from "./cuentas";

export class Cuenta_Corriente extends Cuentas {
    
    constructor(numero: number, saldo: number, moneda: string) {
        super(numero,saldo,moneda);
        
    }
    
    imprimir() {
        console.log('Cuenta corriente');
        super.imprimir();
        
        
    }
}