import { ModulePrelevementAutomatique } from "../../app/ModulePrelevementAutomatique";

export class ModulePayementMock implements ModulePrelevementAutomatique
{
    _reponse : boolean;

    constructor (reponse : boolean)
    {
        this._reponse = reponse;
    }
    
    Prelever(montant: number): boolean {
        return this._reponse;
    }
}