import { ModulePrelevementAutomatique } from "./ModulePrelevementAutomatique";

export class Machine {
    nombreCafes : number;
    sommeArgent : number;
    eau: number;
    dosettesRestantes : number;
    touillettesRestantes : number;
    gobelets : number;
    dosesSucres : number;
    erreurSucre : boolean;
    mug : boolean;
    payement!: ModulePrelevementAutomatique;

    constructor() {
        this.nombreCafes = 0;
        this.sommeArgent = 0;
        this.eau = 1;
        this.dosettesRestantes = 1;
        this.gobelets = 1;
        this.dosesSucres = 1;
        this.erreurSucre = false;
        this.touillettesRestantes = 1;
        this.mug = false;
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

        if (sommeInseree == 0.40 && this.validation() && !this.erreurSucre) {
            this.sommeArgent += sommeInseree;
            this.distributionCafe();
        }
    }

    payementSansContact(montant : number):  void {
        if (this.payement.Prelever(montant)) {
            this.inserer(montant);
        }
    }

    distributionCafe() : void
    {
        this.nombreCafes++;
        this.eau -= 0.15;
        this.dosettesRestantes--;
        if (!this.mug)
            this.gobelets--;
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

    AjouterModulePayement(module : ModulePrelevementAutomatique)
    {
        this.payement = module;
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

    getNombreGobelets(): number {
        return this.gobelets;
    }
}