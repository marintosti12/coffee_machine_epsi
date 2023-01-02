import { Machine } from '../app/Machine';
const assert = require('assert');
//const Machine = require('Machine');

describe("Test MachineACafe", function () {

    it("QUAND  on met 40cts ALORS la machine sert un café ET l'argent est encaissé", function() {
        //ETANT DONNE une machine à café
        let machine : Machine = new Machine(1, 20, 20);
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
        let machine : Machine = new Machine(1, 1, 20);
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
        let machine : Machine = new Machine(0.15, 1, 20);
        let nombreCafeInitiaux : number = machine.getNombreCafesServis();
        let argentEncaisseInitial : number = machine.getArgentEncaisse();
        let eauInitial :number = machine.getEauRestante();
        let sommeInseree : number = 0.45;

        //QUAND il ne reste plus d'eau ET QU'on met 40 cts
        machine.inserer(sommeInseree);
        
        //ALORS la machine ne sert pas de café 
        let nombreCafesFinaux : number = machine.getNombreCafesServis();
        assert.equal(nombreCafeInitiaux, nombreCafesFinaux);

        //ET rend les pièces
        let argentEncaisseFinal = machine.getArgentEncaisse();
        assert.equal(argentEncaisseInitial, argentEncaisseFinal);

    });

    it("ETANT DONNE une machine à café ayant un seul gobelet QUAND on insère 2 fois 40 centimes ALORS 1 seule café coule ET l'argent du 2ème café est rendu", function () {
        //ETANT DONNE une machine à café ayant un seul gobelet
        let machine : Machine = new Machine(1, 10, 1);
        let nombreCafeInitiaux : number = machine.getNombreCafesServis();
        let argentEncaisseInitial : number = machine.getArgentEncaisse();
        let sommeInseree : number = 0.40;

        //QUAND on insert 2 fois 40 centimes
        machine.inserer(sommeInseree);
        machine.inserer(sommeInseree);

        //ALORS 1 seule café coule
        let nombreCafesFinaux : number = machine.getNombreCafesServis();
        assert.equal(nombreCafeInitiaux + 1, nombreCafesFinaux);

        //ET l'argent du 2ème café est rendu
        let argentEncaisseFinal = machine.getArgentEncaisse();
        assert.equal(argentEncaisseInitial + sommeInseree, argentEncaisseFinal);
    });

    it("QUAND il ne reste plus de doses de cafés ET QU'on met 40 cts" + 
        " ALORS la machine ne sert pas de café ET ne consomme pas de dosettes" + 
        " ET l'argent n'est pas encaissé", function () {
        
        //ETANT DONNE une machine à café
        let machine : Machine = new Machine(1, 0, 20);
        let argentEncaisseInitial : number = machine.getArgentEncaisse();
        let sommeInseree : number = 0.40;

        //QUAND il ne reste plus de doses de cafés
        let nombreDosettesInitiales : number = machine.getNombreDosettes();

        //ET QU'on met 40 cts
        machine.inserer(sommeInseree);

        //ALORS la machine ne sert pas de café ET ne consomme pas de dosettes
        let nombreDosettesFinaux : number = machine.getNombreDosettes();
        assert.equal(nombreDosettesInitiales, nombreDosettesFinaux);
        
        let nombreCafesFinaux : number = machine.getNombreCafesServis();
        assert.equal(nombreDosettesInitiales, nombreCafesFinaux);
        
        // ET l'argent n'est pas encaissé
        let argentEncaisseFinal = machine.getArgentEncaisse();
        assert.equal(argentEncaisseInitial, argentEncaisseFinal);

    });

    it("ETANT DONNE une machine ayant une seule dose de café QUAND on insère 2 fois 40 centimes ALORS 1 seule café coule ET l'argent du 2ème café est rendu", function () {
        //ETANT DONNE une machine ayant une seule dose de café
        let machine : Machine = new Machine(1, 1, 20);
        let nombreCafeInitiaux : number = machine.getNombreCafesServis();
        let argentEncaisseInitial : number = machine.getArgentEncaisse();
        let sommeInseree : number = 0.40;

        //QUAND on insère 2 fois 40 centimes
        machine.inserer(sommeInseree);
        machine.inserer(sommeInseree);

        //ALORS un seule café coule
        let nombreCafesFinaux : number = machine.getNombreCafesServis();
        assert.equal(nombreCafeInitiaux + 1, nombreCafesFinaux);

        //ET l'argent du 2ème café est rendu
        let argentEncaisseFinal = machine.getArgentEncaisse();
        assert.equal(argentEncaisseInitial + sommeInseree, argentEncaisseFinal);
    });

});