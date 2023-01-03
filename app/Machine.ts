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
        if (this.gobelets > 50 || this.dosettesRestantes > 50 || this.eau > 1)
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

    AjouterEau(volume: number) : void
    {
        if (this.eau + volume < 5) {
            this.eau += volume;
        }
    }

    AjouterDosettes(nombreDosettes: number) : void
    {
        if (this.dosettesRestantes + nombreDosettes < 50) {
            this.dosettesRestantes += nombreDosettes;
        }
    }
    
    
    AjouterGobelets(NombreGobelets: number) : void
    {
        if (this.gobelets + NombreGobelets < 50) {
            this.gobelets += NombreGobelets;
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

    getNombreGobelets(): number {
        return this.gobelets;
    }
}