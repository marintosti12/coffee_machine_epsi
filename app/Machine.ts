export class Machine {
    nombreCafes : number;
    sommeArgent : number;
    dosesCafes : number;

    constructor(dosesCafes : number) {
        this.nombreCafes = 0;
        this.sommeArgent = 0;
        this.dosesCafes = dosesCafes;
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

    consommerDose() : void {
        if(this.dosesCafes > 0)
            this.dosesCafes--;
    }
}