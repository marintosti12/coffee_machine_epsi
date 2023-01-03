export class Machine {
    nombreCafes : number;
    sommeArgent : number;
    eau: number;
    dosettesRestantes : number;
    gobelets : number;

    constructor(eau: number, dosettesRestantes : number, gobelets : number) {
        this.nombreCafes = 0;
        this.sommeArgent = 0;
        this.eau = eau;
        this.dosettesRestantes = dosettesRestantes;
        this.gobelets = gobelets;
    }

    validationLesLimitesMaximum() : boolean
    {
        if (this.gobelets > 20 || this.dosettesRestantes > 20 || this.eau > 1)
            return false;

        return true;
    }

    validationLesLimitesMinimum() : boolean
    {
        if (this.eau < 0.15 || this.dosettesRestantes <= 0 || this.gobelets <= 0)
            return false;

        return true;
    }

    validation() : boolean
    {
        return this.validationLesLimitesMinimum() && this.validationLesLimitesMaximum();
    }
    
    inserer(sommeInseree: number) : void {

        if (sommeInseree == 0.40 && this.validation()) {
            this.sommeArgent += sommeInseree;
            this.nombreCafes++;
            this.eau -= 0.15;
            this.dosettesRestantes--;
            this.gobelets--;
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