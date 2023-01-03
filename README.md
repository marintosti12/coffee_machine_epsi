
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
