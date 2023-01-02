import { Machine } from '../app/Machine';
const assert = require('assert');
//const Machine = require('Machine');

describe("Test MachineACafe", function () {

    it("QUAND  on met 40cts ALORS la machine sert un café", function() {
        //ETANT DONNE une machine à café
        let machine : Machine = new Machine(1);
        let nombreCafeInitiaux : number = machine.getNombreCafesServis();
        let argentEncaisseInitial : number = machine.getArgentEncaisse();
        let sommeInseree : number = 0.40;

        //QUAND on met 40 cts
        machine.inserer(sommeInseree);

        // ALORS la machine sert un café
        let nombreCafesFinaux : number = machine.getNombreCafesServis();
        assert.equal(nombreCafeInitiaux + 1, nombreCafesFinaux);
        
        // ET l'argent est encaissé
        let argentEncaisseFinal = machine.getArgentEncaisse();
        assert.equal(argentEncaisseInitial + sommeInseree, argentEncaisseFinal);
    });

    it("QUAND  on met 35cts ALORS l'argent est rendu ET aucun café ne coule", function () {
        //ETANT DONNE une machine à café
        let machine : Machine = new Machine(1);
        let nombreCafeInitiaux : number = machine.getNombreCafesServis();
        let argentEncaisseInitial : number = machine.getArgentEncaisse();
        let sommeInseree : number = 0.35;

        //QUAND  on met 35cts
        machine.inserer(sommeInseree);

        //ALORS l'argent est rendu
        let argentEncaisseFinal = machine.getArgentEncaisse();
        assert.equal(argentEncaisseInitial, argentEncaisseFinal);

        //ET aucun café ne coule
        let nombreCafesFinaux : number = machine.getNombreCafesServis();
        assert.equal(nombreCafeInitiaux, nombreCafesFinaux);
    });

    it("QUAND il ne reste plus d'eau ET QU'on met 40 cts ALORS la machine ne sert pas de café ET rend les pièces", function () {
        //ETANT DONNE une machine à café
        let machine : Machine = new Machine(0.15);
        let nombreCafeInitiaux : number = machine.getNombreCafesServis();
        let argentEncaisseInitial : number = machine.getArgentEncaisse();
        let eauInitial :number = machine.getEauRestante();
        let sommeInseree : number = 0.45;

        //QUAND  on met 40cts
        machine.inserer(sommeInseree);

        //ET rend les pièces
        let argentEncaisseFinal = machine.getArgentEncaisse();
        assert.equal(argentEncaisseInitial, argentEncaisseFinal);

        //la machine ne sert pas de café
        let nombreCafesFinaux : number = machine.getNombreCafesServis();
        assert.equal(nombreCafeInitiaux, nombreCafesFinaux);
    });

    it("QUAND  on met 35cts ALORS l'argent est rendu ET aucun café ne coule", function () {
        //ETANT DONNE une machine à café
        //QUAND  on met 35cts
        //ALORS l'argent est rendu
        //ET aucun café ne coule
    });

    it("QUAND  on met 35cts ALORS l'argent est rendu ET aucun café ne coule", function () {
        //ETANT DONNE une machine à café
        //QUAND  on met 35cts
        //ALORS l'argent est rendu
        //ET aucun café ne coule
    });

});