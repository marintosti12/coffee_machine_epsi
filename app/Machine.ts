export class Machine {
    nombreCafes : number;
    sommeArgent : number;

    constructor() {
        this.nombreCafes = 0;
        this.sommeArgent = 0;
    }

    inserer(sommeInseree: number) : void {
        if (sommeInseree == 0.40) {
            this.sommeArgent += sommeInseree;
            this.nombreCafes++;
        }
    }

    getNombreCafesServis() : number {
        return this.nombreCafes;
    }

    getArgentEncaisse() : number {
        return this.sommeArgent;
    }
}