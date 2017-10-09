
import { Direccion,Cuentas,Caja_Ahorro,Cuenta_Corriente,Cliente } from "./banco/module";


let direccion: Direccion= new Direccion ('Bolivia','Tarija','Jose Antonio Arce 1344')
let caja_ahorro: Caja_Ahorro = new Caja_Ahorro (12,250,'Bolivianos',10);
let caja_ahorro1: Caja_Ahorro = new Caja_Ahorro (11,150,'Dolares',1);
let cuenta_corriente: Cuenta_Corriente = new Cuenta_Corriente(13,550,'Dolares');
let cuenta_corriente1: Cuenta_Corriente = new Cuenta_Corriente(14,50,'Bolivianos');
let cuenta2: Cuentas[]= [caja_ahorro1, caja_ahorro, cuenta_corriente,cuenta_corriente1];
let cliente: Cliente = new Cliente('Mariana Mogro',1);


cliente.recuperar_dir(direccion);
cliente.recuperar_cuenta(cuenta2);
cliente.imprimir();
cliente.recuperar_cuenta(cliente.eliminar_cuenta(cuenta2,13));
cliente.imprimir();
cliente.eliminar_cuenta(cuenta2,12);







