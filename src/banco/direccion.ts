export class Direccion {
    public pais: string;
    public ciudad: string;
    public calle: string;

    constructor(pais: string, ciudad: string, calle: string) {
        this.pais = pais;
        this.ciudad = ciudad;
        this.calle = calle;
    }

    imprimir() {
        if (this.pais && this.ciudad && this.calle) {
            console.log(`Direccion:
        Pais: ${this.pais} 
        Ciudad: ${this.ciudad}
        Calle: ${this.calle}.`);
        } else {
            console.log('Error el cliente debe tener una direccion')
        }
        console.log('+-------------------------------------+')

    }
}