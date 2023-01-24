import { ModulePrelevementAutomatique } from "./ModulePrelevementAutomatique";

export class ModulePayement implements ModulePrelevementAutomatique
{
    Prelever(montant: number): boolean {
        return true;
    }
}