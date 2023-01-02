import { Machine } from '../app/Machine';
const assert = require('assert');
//const Machine = require('Machine');

describe("Test MachineACafe", function () {

    it("QUAND  on met 40cts ALORS la machine sert un café", function() {
        //ETANT DONNE une machine à café
        let machine : Machine = new Machine();
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