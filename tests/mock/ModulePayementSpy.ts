import { ModulePrelevementAutomatique } from "../../app/ModulePrelevementAutomatique";

export class ModulePayementSpy implements ModulePrelevementAutomatique {

    module : ModulePrelevementAutomatique;
    transactions: Array<number> = [];

    constructor (module : ModulePrelevementAutomatique) {
        this.module = module;
    }


    Prelever(montant: number): boolean {
        var response = this.module.Prelever(montant);
        this.transactions.push(montant);
        return response;
    }

    AEteAppeleAvecLeMontant(montant: number) : boolean {
        return this.transactions.includes(montant);
    }
}
