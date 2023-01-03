import { Machine } from "./Machine";

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

    MachineSansDosesCafes(): void {
        this.machine.dosettesRestantes = 0;
    }

    AjoutXGobelets(nombre : number): void {
        this.machine.gobelets = nombre;
    }

    AjoutXDosettes(nombre : number): void {
        this.machine.dosettesRestantes = nombre;
    }

    AjoutXEau(nombre: number): void {
        this.machine.eau = nombre;
    }

    MachineAvecOuSansMug(mug: boolean): void {
        this.machine.mug = mug;
    }
}