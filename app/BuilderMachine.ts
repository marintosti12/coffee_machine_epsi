import { Machine } from "./Machine";
import { ModulePrelevementAutomatique } from "./ModulePrelevementAutomatique";

export class BuilderMachine
{
    machine! : Machine;

    constructor() 
    {
        this.machine = new Machine();
    }

    getMachine(): Machine {
        return this.machine;
    }

    MachineSansDosesCafes(): BuilderMachine {
        this.machine.dosettesRestantes = 0;
        return this;
    }

    AjoutXGobelets(nombre : number): BuilderMachine {
        this.machine.gobelets = nombre;
        return this;
    }

    AjoutTouillettes(nombre : number): BuilderMachine {
        this.machine.touillettesRestantes = nombre;
        return this;
    }

    AjoutXDosettes(nombre : number): BuilderMachine {
        this.machine.dosettesRestantes = nombre;
        return this;
    }

    AjoutXEau(nombre: number): BuilderMachine {
        this.machine.eau = nombre;
        return this;
    }

    AjoutXLait(nombre : number) : BuilderMachine {
        this.machine.lait = nombre;
        return this;
    }

    AjoutXChoco(nombre : number) : BuilderMachine {
        this.machine.chocolatRestant = nombre;
        return this;
    }

    MachineAvecOuSansMug(mug: boolean): BuilderMachine {
        this.machine.mug = mug;
        return this;
    }

    AjoutModulePayement(module : ModulePrelevementAutomatique) {
        this.machine.AjouterModulePayement(module);
        return this;
    }
}