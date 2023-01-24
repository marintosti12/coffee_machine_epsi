import { ModulePrelevementAutomatique } from "./ModulePrelevementAutomatique";

export class Machine {
    nombreCafes : number;
    sommeArgent : number;
    montantRequis : number;
    eau : number;
    lait : number;
    dosettesRestantes : number;
    chocolatRestant : number;
    touillettesRestantes : number;
    gobelets : number;
    dosesSucres : number;
    erreurSucre : boolean;
    mug : boolean;
    payement!: ModulePrelevementAutomatique;

    dosettesRequises : number;
    dosesEauRequises : number;
    dosesLaitRequis : number;
    dosesChocoRequis : number;
    boissons : any;

    constructor() {
        this.nombreCafes = 0;
        this.sommeArgent = 0;
        this.montantRequis = 0.40;
        this.eau = 1;
        this.lait = 1;
        this.dosettesRestantes = 1;
        this.chocolatRestant = 1;
        this.gobelets = 1;
        this.dosesSucres = 1;
        this.erreurSucre = false;
        this.touillettesRestantes = 1;
        this.mug = false;

        this.dosettesRequises = 0;
        this.dosesEauRequises = 0;
        this.dosesLaitRequis = 0;
        this.dosesChocoRequis = 0;

        this.boissons = {
            CAFE : {prix : 0.40, ingredients : {eau : 1, lait : 0, choco : 0, dosettes : 1}},
            ALLONGE : {prix : 0.45, ingredients : {eau : 2, lait : 0, choco : 0, dosettes : 1}},
            LATTE : {prix : 0.40, ingredients : {eau : 0, lait : 1, choco : 0, dosettes : 1}},
            CHOCO : {prix : 0.40, ingredients : {eau : 1, lait : 0, choco : 1, dosettes : 0}},
            CHOCOLAIT : {prix : 0.45, ingredients : {eau : 0, lait : 1, choco : 1, dosettes : 0}},
            CAPUCCINO : {prix : 0.50, ingredients : {eau : 1, lait : 1, choco : 1, dosettes : 1}}
        };
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
        if (sommeInseree == this.montantRequis && this.validation() && !this.erreurSucre) {
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
        this.eau -= 0.15 * this.dosesEauRequises;
        this.dosettesRestantes -= this.dosettesRequises;
        this.lait -= 0.15 * this.dosesLaitRequis;
        this.chocolatRestant -= this.dosesChocoRequis;
        if (!this.mug)
            this.gobelets--;
    }

    Rechargementtouillettes() : boolean 
    {
        if (50 <= this.touillettesRestantes)
            return false;

        this.touillettesRestantes += 1;
        
        return true;
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

    getLaitRestant(): number {
        return this.lait;
    }

    getNombreDosettes() : number {
        return this.dosettesRestantes;
    }

    getNombreChocolat() : number {
        return this.chocolatRestant;
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

    appuyerBoisson(b : string) : void {
        this.montantRequis = this.boissons[b].prix;
        this.dosettesRequises = this.boissons[b].ingredients.dosettes;
        this.dosesEauRequises = this.boissons[b].ingredients.eau;
        this.dosesChocoRequis = this.boissons[b].ingredients.choco;
        this.dosesLaitRequis = this.boissons[b].ingredients.lait;
    }
}