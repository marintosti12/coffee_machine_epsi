export class Machine {
    nombreCafes : number;
    sommeArgent : number;
    eau: number;
    dosettesRestantes : number;

    constructor(eau: number, dosettesRestantes : number) {
        this.nombreCafes = 0;
        this.sommeArgent = 0;
        this.eau = eau;
        this.dosettesRestantes = dosettesRestantes;
    }

    inserer(sommeInseree: number) : void {
        if (sommeInseree == 0.40 && this.eau >= 0.15 && this.dosettesRestantes > 0) {
            this.sommeArgent += sommeInseree;
            this.nombreCafes++;
            this.eau -= 0.15;
            this.dosettesRestantes--;
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

    getNombreDosettes() : number {
        return this.dosettesRestantes;
    }

}