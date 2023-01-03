import { BuilderMachine } from '../app/BuilderMachine';
import { Machine } from '../app/Machine';
const assert = require('assert');
//const Machine = require('Machine');

describe("Test MachineACafe", function () {

    it("QUAND on met 40cts ALORS la machine sert un café ET l'argent est encaissé", function() {
        //ETANT DONNE une machine à café
        let builder : BuilderMachine = new BuilderMachine();

        let machine : Machine = builder.getMachine();
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

    it("QUAND on met 35cts ALORS l'argent est rendu ET aucun café ne coule", function () {
        //ETANT DONNE une machine à café
        let builder : BuilderMachine = new BuilderMachine();

        let machine : Machine = builder.getMachine();
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
        let builder : BuilderMachine = new BuilderMachine();

        let machine : Machine = builder.getMachine();
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
        let builder : BuilderMachine = new BuilderMachine();

        let machine : Machine = builder.getMachine();
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
        let builder : BuilderMachine = new BuilderMachine();
        builder.MachineSansDosesCafes();

        
        let machine : Machine = builder.getMachine();
        let CafeInitial : number = machine.getNombreCafesServis();
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
        assert.equal(CafeInitial, nombreCafesFinaux);
        
        // ET l'argent n'est pas encaissé
        let argentEncaisseFinal = machine.getArgentEncaisse();
        assert.equal(argentEncaisseInitial, argentEncaisseFinal);

    });

    it("ETANT DONNE une machine ayant une seule dose de café QUAND on insère 2 fois 40 centimes ALORS 1 seule café coule ET l'argent du 2ème café est rendu", function () {
        //ETANT DONNE une machine ayant une seule dose de café
        let builder : BuilderMachine = new BuilderMachine();

        let machine : Machine = builder.getMachine();
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

    it("ETANT DONNE une machine ayant une seule dose de café QUAND on insère 2 fois 40 centimes ALORS 1 seule café coule ET l'argent du 2ème café est rendu", function () {
        //ETANT DONNE une machine ayant une seule dose de café
        let builder : BuilderMachine = new BuilderMachine();

        let machine : Machine = builder.getMachine();
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



    it("ETANT DONNE une machine à café avec une capacité de 50 gobelets QUAND on dépasse le nombre de gobelets maximum ALORS aucune actions ne peuvent être effectuées", function () {
        //ETANT DONNE une machine ayant trop de gobelets avec une limite de 20 gobelets dans la machine
        let builder : BuilderMachine = new BuilderMachine();
        builder.AjoutXGobelets(51);

        let machine : Machine = builder.getMachine();
        let nombreCafeInitiaux : number = machine.getNombreCafesServis();
        let argentEncaisseInitial : number = machine.getArgentEncaisse();
        let sommeInseree : number = 0.40;

        //QUAND on insère 1 fois 40 centimes
        machine.inserer(sommeInseree);

        //ALORS aucun café ne coule
        let nombreCafesFinaux : number = machine.getNombreCafesServis();
        assert.equal(nombreCafeInitiaux, nombreCafesFinaux);

        //ET l'argent du café est rendu
        let argentEncaisseFinal = machine.getArgentEncaisse();
        assert.equal(argentEncaisseInitial, argentEncaisseFinal);
    });


    it("ETANT DONNE une machine à café avec une capacité de 50 dosettes QUAND on dépasse le nombre de dosettes maximum ALORS aucune actions ne peuvent être effectuées", function () {
        //ETANT DONNE une machine ayant trop de dosettes avec une limite de 20 dosettes dans la machine
        let builder : BuilderMachine = new BuilderMachine();
        builder.AjoutXDosettes(51);

        let machine : Machine = builder.getMachine();
        let nombreCafeInitiaux : number = machine.getNombreCafesServis();
        let argentEncaisseInitial : number = machine.getArgentEncaisse();
        let sommeInseree : number = 0.40;

        //QUAND on insère 1 fois 40 centimes
        machine.inserer(sommeInseree);

        //ALORS aucun café ne coule
        let nombreCafesFinaux : number = machine.getNombreCafesServis();
        assert.equal(nombreCafeInitiaux, nombreCafesFinaux);

        //ET l'argent du café est rendu
        let argentEncaisseFinal = machine.getArgentEncaisse();
        assert.equal(argentEncaisseInitial, argentEncaisseFinal);
    });

    it("ETANT DONNE une machine à café avec une capacité de volume de 5L d'eau QUAND on dépasse le volume d'eau maximum ALORS aucune actions ne peuvent être effectuées  ", function () {
        //ETANT DONNE une machine ayant un trop grand volume d'eau avec une limite de 1 littre dans la machine
        let builder : BuilderMachine = new BuilderMachine();
        builder.AjoutXEau(6);

        let machine : Machine = builder.getMachine();
        let nombreCafeInitiaux : number = machine.getNombreCafesServis();
        let argentEncaisseInitial : number = machine.getArgentEncaisse();
        let sommeInseree : number = 0.40;

        //QUAND on insère 1 fois 40 centimes
        machine.inserer(sommeInseree);

        //ALORS aucun café ne coule
        let nombreCafesFinaux : number = machine.getNombreCafesServis();
        assert.equal(nombreCafeInitiaux, nombreCafesFinaux);

        //ET l'argent du café est rendu
        let argentEncaisseFinal = machine.getArgentEncaisse();
        assert.equal(argentEncaisseInitial, argentEncaisseFinal);
    });

    it("ETANT DONNE une machine ET un appui sur le bouton sucre QUAND on insère 40cts ALORS un café coule ET une dose de sucre est consommée", function () {
        //ETANT DONNE une machine
        let builder : BuilderMachine = new BuilderMachine();

        let machine : Machine = builder.getMachine();
        let nombreCafeInitiaux : number = machine.getNombreCafesServis();
        let sommeInseree : number = 0.40;
        let dosesSucreInitial : number = machine.getDosesSucres();

        //ET un appui sur le bouton sucre
        machine.appuyerBoutonSucres();

        //QUAND on insère 40cts
        machine.inserer(sommeInseree);

        //ALORS un café coule
        let nombreCafesFinaux : number = machine.getNombreCafesServis();
        assert.equal(nombreCafeInitiaux + 1, nombreCafesFinaux);

        //ET une dose de sucre est consommée
        let dosesSucreFinaux : number = machine.getDosesSucres();
        assert.equal(dosesSucreInitial - 1, dosesSucreFinaux);
    });

    it("ETANT DONNE une machine ET un appui sur le bouton sucre QUAND on met 40cts ALORS une touillette est consommée", function () {
        //ETANT DONNE une machine        
        let builder : BuilderMachine = new BuilderMachine();

        let machine : Machine = builder.getMachine();
        //let nombreCafeInitiaux : number = machine.getNombreCafesServis();
        //let argentEncaisseInitial : number = machine.getArgentEncaisse();
        let nombreTouillettesInitiaux : number = machine.getNombreTouillettes();
        let sommeInseree : number = 0.40;

        //ET un appui sur le bouton sucre
        machine.appuyerBoutonSucres();

        //QUAND on insère 40cts
        machine.inserer(sommeInseree);

        //ALORS une touillette est consommée
        let nombreTouillettesFinaux : number = machine.getNombreTouillettes();
        assert.equal(nombreTouillettesInitiaux - 1, nombreTouillettesFinaux);
    });

    it("ETANT DONNE une machine n'ayant pas de touillette ET un appui sur le bouton sucre QUAND on met 40cts ALORS un café sucré coule quand même", function () {
        //ETANT DONNE une machine n'ayant pas de touillette        
        let builder : BuilderMachine = new BuilderMachine();

        let machine : Machine = builder.getMachine();
        let nombreCafeInitiaux : number = machine.getNombreCafesServis();
        let sommeInseree : number = 0.40;

        //ET un appui sur le bouton sucre
        machine.appuyerBoutonSucres();

        //QUAND on insère 40cts
        machine.inserer(sommeInseree);

        //ALORS un café sucré coule quand même
        let nombreCafeFinaux : number = machine.getNombreCafesServis();
        assert.equal(nombreCafeInitiaux + 1, nombreCafeFinaux);
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

    it("ETANT DONNE une machine detectant un mug alors un café coule et aucun gobelet consommé ", function () {
        
        //ETANT DONNE une machine detecte un mug 
        let builder : BuilderMachine = new BuilderMachine();
        builder.MachineAvecOuSansMug(true);

        let machine : Machine = builder.getMachine();
        let nombreGobeletsInitiaux : number = machine.getNombreGobelets();
        let sommeInseree : number = 0.40;
 
        //QUAND on insère 40 cts
        machine.inserer(sommeInseree);

        //ALORS un café coule et aucun gobelet consommé 
        let nombreGobeletsFinaux : number = machine.getNombreGobelets();
        assert.equal(nombreGobeletsInitiaux, nombreGobeletsFinaux);
    });

    it("ETANT DONNE une machine detectant un mug et n'ayant plus de gobelets QUAND on met 40 cts ALORS un café coule ", function () {
        
        //ETANT DONNE une machine detecte un mug 
        let builder : BuilderMachine = new BuilderMachine();
        builder.AjoutXGobelets(0);
        builder.MachineAvecOuSansMug(false);

        let machine : Machine = builder.getMachine();
        let nombreCafesInitiaux : number = machine.getNombreCafesServis();
        let sommeInseree : number = 0.40;

        //QUAND on insère 40 cts
        machine.inserer(sommeInseree);

        //ALORS un café coule 
        let nombreCafesFinaux : number = machine.getNombreCafesServis();
        assert.equal(nombreCafesInitiaux, nombreCafesFinaux);
    });


    it("ETANT DONNE une machine QUAND on paye avec une carte bancaire ALORS un café coule ", function () {
        
        //ETANT DONNE une machine detecte un mug 
        let builder : BuilderMachine = new BuilderMachine();

        let machine : Machine = builder.getMachine();
        let nombreCafesInitiaux : number = machine.getNombreCafesServis();
        let montant : number = 0.40;
 
        //QUAND on paye avec une carte bancaire
        machine.payementSansContact(montant);

        //ALORS un café coule 
        let nombreCafesFinaux : number = machine.getNombreCafesServis();
        assert.equal(nombreCafesInitiaux, nombreCafesFinaux);
    });
});