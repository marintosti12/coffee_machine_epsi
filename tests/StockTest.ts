import { BuilderMachine } from "../app/BuilderMachine";
import { Machine } from "../app/Machine";
const assert = require('assert');

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