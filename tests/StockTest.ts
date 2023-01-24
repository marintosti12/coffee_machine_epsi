import { BuilderMachine } from "../app/BuilderMachine";
import { Machine } from "../app/Machine";
const assert = require('assert');

describe("Test Stock", function () {

it("ETANT DONNE une machine à café avec un stock initial de 10 touillettes ET une capacité de 50 touillettes QUAND on la recharge de touillettes ALORS le rechargement peut être effectué", function () {
    //ETANT DONNE une machine avec un stock initial de 10 touillettes
    let builder : BuilderMachine = new BuilderMachine();

    builder.AjoutTouillettes(10);

    let machine : Machine = builder.getMachine();

    //Quand on la recharge de touillete
    let resulat : boolean =  machine.Rechargementtouillettes();
    
    //ALORS une le chargement ne peut pas etre effectué
    assert.equal(resulat, true);
});


it("ETANT DONNE une machine à café avec un stock initial de 50 touillettes ET une capacité de 50 touillettes QUAND on la recharge de touillettes ALORS le rechargement ne peut pas être effectué", function () {
    //ETANT DONNE une machine avec un stock initial de 50 touillettes
    let builder : BuilderMachine = new BuilderMachine();

    builder.AjoutTouillettes(50);

    let machine : Machine = builder.getMachine();

    //Quand on la recharge de touillete
    let resulat : boolean =  machine.Rechargementtouillettes();
    
    //ALORS une le chargement ne peut pas etre effectué
    assert.equal(resulat, false);
});

it("ETANT DONNE une machine dont le stock d'une Ressource Stockée est plein QUAND on appuie sur le bouton de réapprovisionnement de cette Ressource ALORS le stock n'augmente pas", function () {
        
    //ETANT DONNE une machine dont le stock d'une Ressource Stockée est plein
    let builder : BuilderMachine = new BuilderMachine();
    builder.AjoutXEau(5);

    let machine : Machine = builder.getMachine();
    let volumeEauInitiale : number = machine.getEauRestante();

    //QUAND on insère 2 littres d'eau
    machine.AjouterEau(2);

    //ALORS le stock n'augmente pas
    let volumeEauFinale : number = machine.getEauRestante();
    assert.equal(volumeEauInitiale, volumeEauFinale);
});

it("ETANT DONNE une machine dont le stock d'une Ressource Stockée est plein QUAND on appuie sur le bouton de réapprovisionnement de cette Ressource ALORS le stock n'augmente pas", function () {
    
    //ETANT DONNE une machine dont le stock d'une Ressource Stockée est plein
    let builder : BuilderMachine = new BuilderMachine();
    builder.AjoutXDosettes(50);

    let machine : Machine = builder.getMachine();
    let DosettesInitiale : number = machine.getNombreDosettes();

    //QUAND on ajoute 1 dosettes
    machine.AjouterDosettes(1);
    
    //ALORS le stock n'augmente pas
    let DosettesFinale : number = machine.getNombreDosettes();
    assert.equal(DosettesInitiale, DosettesFinale);
});


it("ETANT DONNE une machine dont le stock d'une Ressource Stockée est plein QUAND on appuie sur le bouton de réapprovisionnement de cette Ressource ALORS le stock n'augmente pas", function () {
    
    //ETANT DONNE une machine dont le stock d'une Ressource Stockée est plein
    let builder : BuilderMachine = new BuilderMachine();
    builder.AjoutXGobelets(50);

    let machine : Machine = builder.getMachine();
    let GobeletsInitiale : number = machine.getNombreGobelets();

    //QUAND on ajoute 1 gobelets
    machine.AjouterGobelets(1);
    
    //ALORS le stock n'augmente pas
    let GobeletsFinaux : number = machine.getNombreGobelets();
    assert.equal(GobeletsInitiale, GobeletsFinaux);
});


it("ETANT DONNE une machine dont le stock d'une Ressource Nécessaire est vide ET qu'on appuie sur le bouton de réapprovisionnement de cette Ressource QUAND on met 40cts ALORS un café coule", function () {
    
    //ETANT DONNE une machine dont le stock d'une Ressource Nécessaire
    let builder : BuilderMachine = new BuilderMachine();
    builder.AjoutXEau(0);

    let machine : Machine = builder.getMachine();
    let nombreCafeInitiaux : number = machine.getNombreCafesServis();
    let sommeInseree : number = 0.40;

    //QUAND on insère 2 littres d'eau
    machine.AjouterEau(2);

    //QUAND on insère 40 cts
    machine.inserer(sommeInseree);

    //ALORS un café coule

    let nombreCafesFinaux : number = machine.getNombreCafesServis();
    assert.equal(nombreCafeInitiaux, nombreCafesFinaux);
});


it("ETANT DONNE une machine dont le stock d'une Ressource Nécessaire est vide ET qu'on appuie sur le bouton de réapprovisionnement de cette Ressource QUAND on met 40cts ALORS un café coule test", function () {
    
    //ETANT DONNE une machine dont le stock d'une Ressource Nécessaire
    let builder : BuilderMachine = new BuilderMachine();
    builder.AjoutXDosettes(0);


    let machine : Machine = builder.getMachine();
    let nombreCafeInitiaux : number = machine.getNombreCafesServis();
    let sommeInseree : number = 0.40;

    //QUAND on insère 1 dosettes
    machine.AjouterDosettes(1);

    //QUAND on insère 40 cts
    machine.inserer(sommeInseree);

    //ALORS un café coule
    let nombreCafesFinaux : number = machine.getNombreCafesServis();
    assert.equal(nombreCafeInitiaux + 1, nombreCafesFinaux);
});

it("ETANT DONNE une machine dont le stock d'une Ressource Nécessaire est vide ET qu'on appuie sur le bouton de réapprovisionnement de cette Ressource QUAND on met 40cts ALORS un café coule", function () {
    
    //ETANT DONNE une machine dont le stock d'une Ressource Nécessaire
    let builder : BuilderMachine = new BuilderMachine();
    builder.AjoutXGobelets(0);

    let machine : Machine = builder.getMachine();
    let nombreCafeInitiaux : number = machine.getNombreCafesServis();
    let sommeInseree : number = 0.40;

    //QUAND on insère 1 gobelets
    machine.AjouterGobelets(1);

    //QUAND on insère 40 cts
    machine.inserer(sommeInseree);

    //ALORS un café coule
    let nombreCafesFinaux : number = machine.getNombreCafesServis();
    assert.equal(nombreCafeInitiaux + 1, nombreCafesFinaux);
});

});
