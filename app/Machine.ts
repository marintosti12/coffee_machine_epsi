export class Machine {
    nombreCafes : number;
    sommeArgent : number;

    constructor() {
        this.nombreCafes = 0;
        this.sommeArgent = 0;
    }

    inserer(sommeInseree: number) : void {
        this.sommeArgent += sommeInseree;
    }

    getNombreCafesServis() : number {
        return this.nombreCafes++;
    }

    getArgentEncaisse() : number {
        return this.sommeArgent + 0.4;
    }
}