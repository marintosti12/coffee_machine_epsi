import { BuilderMachine } from '../app/BuilderMachine';
import { Machine } from '../app/Machine';
const assert = require('assert');

describe("Test Prix Variable", function () {

    it("ETANT DONNE une machine ET qu'on appuie sur le bouton 'ALLONGE' QUAND on met 45cts ALORS un 'ALLONGE' coule ET 1 dose de café et 2 dose d'eau sont consommées", function () {
        
        //ETANT DONNE une machine
        let builder : BuilderMachine = new BuilderMachine()
            .AjoutXDosettes(20)
            .AjoutXEau(1)
            .AjoutXGobelets(10)

        let machine : Machine = builder.getMachine();
        let nombreCafesInitiaux : number = machine.getNombreCafesServis();
        let dosettesInitiale : number = machine.getNombreDosettes();
        let eauInitial : number = machine.getEauRestante();
        let montant : number = 0.45;
 
        //ET qu'on appuie sur le bouton 'ALLONGE'
        machine.appuyerBoisson("ALLONGE");

        //QUAND on met 45cts
        machine.inserer(montant);

        //ALORS un café 'ALLONGE' coule
        let nombreCafesFinaux : number = machine.getNombreCafesServis();
        assert.equal(nombreCafesInitiaux + 1, nombreCafesFinaux);

        //ET 1 dose de café et 2 dose d'eau sont consommées
        let dosettesFinale : number = machine.getNombreDosettes();
        assert.equal(dosettesInitiale - 1, dosettesFinale);

        let volumeEauFinale : number = machine.getEauRestante();
        assert.equal(eauInitial - 0.15 * 2, volumeEauFinale);
    });

    it("ETANT DONNE une machine ET qu'on appuie sur le bouton 'LATTE' QUAND on met 40cts ALORS un 'LATTE' coule ET 1 dose de lait et 1 dose de café sont consommées", function () {
        
        //ETANT DONNE une machine
        let builder : BuilderMachine = new BuilderMachine()
            .AjoutXDosettes(20)
            .AjoutXEau(1)
            .AjoutXLait(5)
            .AjoutXGobelets(10)

        let machine : Machine = builder.getMachine();
        let nombreCafesInitiaux : number = machine.getNombreCafesServis();
        let dosettesInitiale : number = machine.getNombreDosettes();
        let laitInitial : number = machine.getLaitRestant();
        let montant : number = 0.40;
 
        //ET qu'on appuie sur le bouton 'LATTE'
        machine.appuyerBoisson("LATTE");

        //QUAND on met 45cts
        machine.inserer(montant);

        //ALORS un café 'LATTE' coule
        let nombreCafesFinaux : number = machine.getNombreCafesServis();
        assert.equal(nombreCafesInitiaux + 1, nombreCafesFinaux);

        //ET 1 dose de lait et 1 dose de café sont consommées
        let dosettesFinale : number = machine.getNombreDosettes();
        assert.equal(dosettesInitiale - 1, dosettesFinale);

        let volumeLaitFinale : number = machine.getLaitRestant();
        assert.equal(laitInitial - 0.15, volumeLaitFinale);
    });

    it("ETANT DONNE une machine ET qu'on appuie sur le bouton 'CHOCO' QUAND on met 40cts ALORS un 'CHOCO' coule ET 1 dose d'eau et 1 dose de choco sont consommées", function () {
        
        //ETANT DONNE une machine
        let builder : BuilderMachine = new BuilderMachine()
            .AjoutXEau(1)
            .AjoutXChoco(20)
            .AjoutXGobelets(10);

        let machine : Machine = builder.getMachine();
        let nombreCafesInitiaux : number = machine.getNombreCafesServis();
        let chocoInitial : number = machine.getNombreChocolat();
        let eauInitiale : number = machine.getEauRestante();
        let montant : number = 0.40;
 
        //ET qu'on appuie sur le bouton 'CHOCO'
        machine.appuyerBoisson("CHOCO");

        //QUAND on met 45cts
        machine.inserer(montant);

        //ALORS un café 'CHOCO' coule
        let nombreCafesFinaux : number = machine.getNombreCafesServis();
        assert.equal(nombreCafesInitiaux + 1, nombreCafesFinaux);

        //ET 1 dose d'eau et 1 dose de choco sont consommées
        let chocoFinal : number = machine.getNombreChocolat();
        assert.equal(chocoInitial - 1, chocoFinal);

        let volumeEauFinale : number = machine.getEauRestante();
        assert.equal(eauInitiale - 0.15, volumeEauFinale);
    });

    it("ETANT DONNE une machine ET qu'on appuie sur le bouton 'CHOCOLAIT' QUAND on met 45cts ALORS un 'CHOCOLAIT' coule ET 1 dose de lait et 1 dose de choco sont consommées", function () {
        
        //ETANT DONNE une machine
        let builder : BuilderMachine = new BuilderMachine()
            .AjoutXLait(5)
            .AjoutXChoco(20)
            .AjoutXEau(1)
            .AjoutXDosettes(20)
            .AjoutXGobelets(10);

        let machine : Machine = builder.getMachine();
        let nombreCafesInitiaux : number = machine.getNombreCafesServis();
        let chocoInitial : number = machine.getNombreChocolat();
        let laitInitial : number = machine.getLaitRestant();
        let montant : number = 0.45;
 
        //ET qu'on appuie sur le bouton 'CHOCO-LAIT'
        machine.appuyerBoisson("CHOCOLAIT");

        //QUAND on met 45cts
        machine.inserer(montant);

        //ALORS un café 'CHOCO-LAIT' coule
        let nombreCafesFinaux : number = machine.getNombreCafesServis();
        assert.equal(nombreCafesInitiaux + 1, nombreCafesFinaux);

        //ET 1 dose de lait et 1 dose de choco sont consommées
        let chocoFinal : number = machine.getNombreChocolat();
        assert.equal(chocoInitial - 1, chocoFinal);

        let volumeLaitFinal : number = machine.getLaitRestant();
        assert.equal(laitInitial - 0.15, volumeLaitFinal);
    });

    it("ETANT DONNE une machine ET qu'on appuie sur le bouton 'CAPUCCINO' QUAND on met 50cts ALORS un 'CAPUCCINO' coule ET 1 dose d'eau, 1 dose de lait, 1 dose de café et 1 dose de choco sont consommées", function () {
        
        //ETANT DONNE une machine
        let builder : BuilderMachine = new BuilderMachine()
            .AjoutXEau(1)
            .AjoutXLait(5)
            .AjoutXChoco(20)
            .AjoutXDosettes(20)
            .AjoutXGobelets(10);

        let machine : Machine = builder.getMachine();
        let nombreCafesInitiaux : number = machine.getNombreCafesServis();
        let dosettesInitiale : number = machine.getNombreDosettes();
        let chocoInitial : number = machine.getNombreChocolat();
        let eauInitiale : number = machine.getEauRestante();
        let laitInitial : number = machine.getLaitRestant();
        let montant : number = 0.50;
 
        //ET qu'on appuie sur le bouton 'CAPUCCINO'
        machine.appuyerBoisson("CAPUCCINO");

        //QUAND on met 50cts
        machine.inserer(montant);

        //ALORS un café 'CAPUCCINO' coule
        let nombreCafesFinaux : number = machine.getNombreCafesServis();
        assert.equal(nombreCafesInitiaux + 1, nombreCafesFinaux);

        //Et 1 dose d'eau, 1 dose de lait, 1 dose de café et 1 dose de choco sont consommées
        let volumeEauFinale : number = machine.getEauRestante();
        assert.equal(eauInitiale - 0.15, volumeEauFinale);

        let volumeLaitFinal : number = machine.getLaitRestant();
        assert.equal(laitInitial - 0.15, volumeLaitFinal);

        let dosettesFinale : number = machine.getNombreDosettes();
        assert.equal(dosettesInitiale - 1, dosettesFinale);

        let chocoFinal : number = machine.getNombreChocolat();
        assert.equal(chocoInitial - 1, chocoFinal);
    });
});

