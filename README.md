
GROUPE F : USER STORIES
===============

Elouan MAINDRON, Marin TOSTIVINT, Imad LOUGHLIMI
---------------	

1ère US :
---------------	
ETANT DONNE une machine à café  
QUAND on met 35cts  
ALORS l'argent est rendu  
ET aucun café ne coule  

2ème US :
---------------	
ETANT DONNE une machine à café  
QUAND on met 40 cts  
ALORS la machine sert un café  
ET l'argent est encaissé

3ème US :
---------------	
ETANT DONNE une machine à café  
QUAND il ne reste plus de gobelets  
ALORS la machine ne sert pas de café  
ET rend les pièces  

4ème US : 
---------------	
ETANT DONNE une machine à café  
QUAND il ne reste plus d'eau  
ET QU'on met 40 cts  
ALORS la machine ne sert pas de café  
ET rend les pièces  

5ème US :
---------------	
ETANT DONNE une machine à café  
QUAND il ne reste plus de café (grains)  
ET QU'on met 40 cts  
ALORS la machine ne sert pas de café  
ET rend les pièces  


LIMITES : USER STORIES
===============

1ère US :
---------------	
ETANT DONNE une machine à café avec une capacité de 50 gobelets
QUAND on dépasse le nombre de gobelets maximum
ALORS aucune actions ne peuvent être effectuées

2ème US : 
---------------	
ETANT DONNE une machine à café avec une capacité de 50 dosettes
QUAND on dépasse le nombre de dosettes maximum  
ALORS aucune actions ne peuvent être effectuées  

3ème US : 
---------------	
ETANT DONNE une machine à café avec une capacité de volume de 5L d'eau  
QUAND on dépasse le volume d'eau maximum  
ALORS aucune actions ne peuvent être effectuées  

LIMITES : USER STORIES
===============
ETANT DONNE une machine  
ET un appui sur le bouton sucre  
QUAND on insère 40cts ALORS un café coule  
ET une dose de sucre est consommée  

ETANT DONNE une machine n'ayant plus de sucre  
ET un appui sur le bouton sucre  
QUAND on insère 40cts  
ALORS aucun café ne coule  
ET l'argent est remboursé  

ETANT DONNE une machine dont le stock d'une Ressource Stockée est plein  
QUAND on appuie sur le bouton de réapprovisionnement de cette Ressource  
ALORS le stock n'augmente pas  

ETANT DONNE une machine dont le stock d'une Ressource Nécessaire est vide  
ET qu'on appuie sur le bouton de réapprovisionnement de cette Ressource  
QUAND on met 40cts ALORS un café coule  

ETANT DONNE une machine  
ALORS le stock initial de toute Ressource Stockée est de 1  

ETANT DONNE une machine  
ET un appui sur le bouton allonger  
QUAND on met 40cts  
ALORS un cafe coule  
ET 2 doses d'eau sont consommées  

ETANT DONNE une machine  
ET un appui sur le bouton sucre  
QUAND on met 40cts  
ALORS une touillette est consommée  

ETANT DONNE une machine n'ayant pas de touillette  
ET un appui sur le bouton sucre  
QUAND on met 40cts  
ALORS un café sucré coule quand même  

ETANT DONNE une machine détectant un mug  
QUAND on met 40 cts  
ALORS un café coule  
ET aucun gobelet n'est consommé  

ETANT DONNE une machine détectant un mug  
ET n'ayant plus de gobelets  
QUAND on met 40cts  
ALORS un café coule  

Stock Touillettes : US
======================

ETANT DONNE une machine à café avec un stock initial de 50 touillettes  
ET une capacité de 50 touillettes  
QUAND on la recharge de touillettes  
ALORS le rechargement ne peut pas être effectué  

ETANT DONNE une machine à café avec un stock initial de 10 touillettes  
ET une capacité de 50 touillettes  
QUAND on la recharge de touillettes  
ALORS le rechargement peut être effectué  

Prix Variables : US
===================
ETANT DONNE une machine  
ET qu'on appuie sur le bouton 'ALLONGE'  
QUAND on met 40cts  
ALORS un 'ALLONGE' coule  
ET 1 dose de café et 2 dose d'eau sont consommées  

ETANT DONNE une machine  
ET qu'on appuie sur le bouton 'LATTE'  
QUAND on met 45cts  
ALORS un 'LATTE' coule
ET 1 dose de lait et 1 dose de café sont consommées  

ETANT DONNE une machine  
ET qu'on appuie sur le bouton 'CHOCO'  
QUAND on met 40cts  
ALORS un 'CHOCO' coule
ET 1 dose d 'eau et 1 dose de choco sont consommées  

ETANT DONNE une machine  
ET qu'on appuie sur le bouton 'CHOCO-LAIT'  
QUAND on met 45cts  
ALORS un 'CHOCO-LAIT' coule
ET 1 dose de lait et 1 dose de choco sont consommées  

ETANT DONNE une machine  
ET qu'on appuie sur le bouton 'CAPUCCINO'  
QUAND on met 50cts  
ALORS un 'CAPUCCINO' coule
ET 1 dose d'eau, 1 dose de lait, 1 dose de café et 1 dose de choco sont consommées  

CB : US
=======
ETANT DONNE une machine avec un module de paiement sans contact
QUAND on appuye sur le bouton CB
ALORS le module valide le paiement  
ET un café coule  
ET l'argent est encaissé de 40cts  

ETANT DONNE une machine avec un module de paiement sans contact
QUAND on appuye sur le bouton CB  
ALORS le module ne valide pas le paiement  
ET un café ne coule pas  
ET aucun argent n'est encaissé  