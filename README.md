
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
ETANT DONNE une machine ET un appui sur le bouton sucre  
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