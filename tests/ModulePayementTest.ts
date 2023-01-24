import { BuilderMachine } from '../app/BuilderMachine';
import { Machine } from '../app/Machine';
import { ModulePayement } from '../app/ModulePayement';
import { ModulePrelevementAutomatique } from '../app/ModulePrelevementAutomatique';
import { ModulePayementMock } from './mock/ModulePayementMock';
import { ModulePayementSpy } from './mock/ModulePayementSpy';
const assert = require('assert');


it("ETANT DONNE une machine avec un module de paiement sans contact qui retourne ok QUAND on appuye sur le bouton CB ALORS le module valide le paiement ET un café coule ET l'argent est encaissé de 40cts", function () {
        
    //ETANT DONNE une machine avec un module de paiement sans contact qui retourne ok

    let builder : BuilderMachine = new BuilderMachine();
    let payement = new ModulePayementSpy(new ModulePayementMock(true));
    builder.AjoutModulePayement(payement);

    let machine : Machine = builder.getMachine();
    let nombreCafesInitiaux : number = machine.getNombreCafesServis();
    let argentEncaisseInitial : number = machine.getArgentEncaisse();
    let montant : number = 0.40;

    // QUAND on appuye sur le bouton CB
    machine.payementSansContact(montant);


    // ALORS le module valide le paiement
    assert.equal(payement.AEteAppeleAvecLeMontant(0.4), true);

    //ALORS un café coule 
    let nombreCafesFinaux : number = machine.getNombreCafesServis();
    assert.equal(nombreCafesInitiaux + 1, nombreCafesFinaux);

    // l'argent est encaissé de 40cts
    let argentEncaisseFinal = machine.getArgentEncaisse();
    assert.equal(argentEncaisseInitial + montant, argentEncaisseFinal);
});


it("ETANT DONNE une machine avec un module de paiement sans contact qui retourne nok QUAND on appuye sur le bouton CB ALORS le module ne valide pas le paiement ET un café ne coule ET l'argent n'est pas encaissé", function () {
        
    //ETANT DONNE une machine avec un module de paiement sans contact qui retourne nok

    let builder : BuilderMachine = new BuilderMachine();
    let payement = new ModulePayementSpy(new ModulePayementMock(false));

    builder.AjoutModulePayement(payement);

    let machine : Machine = builder.getMachine();
    let nombreCafesInitiaux : number = machine.getNombreCafesServis();
    let argentEncaisseInitial : number = machine.getArgentEncaisse();
    let montant : number = 0.40;

    // QUAND on appuye sur le bouton CB
    machine.payementSansContact(montant);


    // ALORS le module ne valide pas le paiement
    assert.equal(payement.AEteAppeleAvecLeMontant(0.4), true);

    //ALORS un café ne coule pas
    let nombreCafesFinaux : number = machine.getNombreCafesServis();
    assert.equal(nombreCafesInitiaux, nombreCafesFinaux);

    // l'argent n'est pas encaissé
    let argentEncaisseFinal = machine.getArgentEncaisse();
    assert.equal(argentEncaisseInitial, argentEncaisseFinal);
});