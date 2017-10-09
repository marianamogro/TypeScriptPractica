
import { Direccion, Cuentas, Caja_Ahorro, Cuenta_Corriente } from "./module";

export class Cliente {
    public nombre: string;
    public codigo: number;
    public _direccion: Direccion;
    public direccion2: Direccion;
    public cuenta: Cuentas[];
    public cuenta2: Cuentas[];
    public cuenta3: Cuentas[];
    public posicion: number;


    constructor(nombre: string, codigo: number) {
        this.nombre = nombre;
        this.codigo = codigo;
    }

    recuperar_cuenta(_cuenta: Cuentas[]) {
        this.cuenta = _cuenta;
    }

    recuperar_dir(direccion: Direccion) {
        this._direccion = direccion;

    }
    eliminar_cuenta(_cuenta2: Cuentas[], numero_cuenta: number) {
        let pos: number;
        let cuenta_eliminar: Cuentas[];
        let banderas: boolean = false;
        cuenta_eliminar = _cuenta2

        this.cuenta2 = _cuenta2;


        pos = -1;


        for (let v_cuenta of this.cuenta2) {
            pos = pos + 1;
            if (v_cuenta.numero === numero_cuenta) {
                banderas = true;
                break;
            }

        }
        if (banderas) {
            cuenta_eliminar.splice(pos, 1);
            console.log('**************************************************');
            console.log(`La cuenta ${numero_cuenta} ya fue eliminada`);
            console.log('**************************************************');
            return cuenta_eliminar;

        } else {
            console.log('**************************************************');
            console.log(`La  cuenta ${numero_cuenta} no existe para este cliente.`)
            console.log('**************************************************');
            return _cuenta2;

        }




    }


    imprimir() {
        console.log('+-------------------------------------+')
        console.log(`Cliente: ${this.nombre}
Codigo: ${this.codigo}`);
        console.log('+-------------------------------------+')
        if (this._direccion) {
            this._direccion.imprimir();
        }
        else {
            console.log('ERROR: El cliente debe tener una direccion')
        }
        if (this.cuenta) {
            console.log('Cuentas:')
            for (let v_cuenta of this.cuenta) {
                v_cuenta.imprimir();
            }
        } else {
            console.log('ERROR: El cliente debe tener por lo menos una cuenta');
        }
    }
}