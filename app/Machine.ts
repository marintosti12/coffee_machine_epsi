export class Machine {
    nombreCafes : number;
    sommeArgent : number;
    eau: number;
    dosettesRestantes : number;
    touillettesRestantes : number;
    gobelets : number;
    dosesSucres : number;
    erreurSucre : boolean;

    constructor(eau: number, dosettesRestantes : number, gobelets : number, dosesSucres : number, touillettesRestantes : number) {
        this.nombreCafes = 0;
        this.sommeArgent = 0;
        this.eau = eau;
        this.dosettesRestantes = dosettesRestantes;
        this.gobelets = gobelets;
        this.dosesSucres = dosesSucres;
        this.erreurSucre = false;
        this.touillettesRestantes = touillettesRestantes;
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

        if (sommeInseree == 0.40 && this.validation() && !this.erreurSucre) {
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

    appuyerBoutonSucres() {
        if(this.dosesSucres > 0) {
            this.dosesSucres--;
            this.touillettesRestantes > 0 ? this.touillettesRestantes-- : this.touillettesRestantes = 0;
        } else {
            this.erreurSucre = true;
        }
    }

    getDosesSucres() : number {
        return this.dosesSucres;
    }

    getNombreTouillettes() : number {
        return this.touillettesRestantes;
    }

}