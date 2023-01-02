export class Machine {
    nombreCafes : number;
    sommeArgent : number;
    eau: number;

    constructor(eau: number) {
        this.nombreCafes = 0;
        this.sommeArgent = 0;
        this.eau = eau;
    }

    inserer(sommeInseree: number) : void {
        if (sommeInseree == 0.40 && this.eau >= 0.15) {
            this.sommeArgent += sommeInseree;
            this.nombreCafes++;
            this.eau -= 0.15;
        }
    }

    getNombreCafesServis() : number {
        return this.nombreCafes;
    }

    getArgentEncaisse() : number {
        return this.sommeArgent;
    }

    getEauRestante(): number {
        return this.eau;
    }
}