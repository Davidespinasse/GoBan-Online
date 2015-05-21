var x = 0;
var y = 0;
//reprendre un coup
   function backward_mem()
   {

	    //cache le signe du ko, puisqu'il n'est pas visible dans le tableau de memoire,
		//il ne sera pas affichÃ© lors de la navigation dans la partie *partie Ã  amÃ©liorer*
	    //il est pas naicessair de le mettre dans forward, puisqu'il faut d'abord reprendre dans la partie avant de pouvoir avancer.
		document.getElementById("idforbidden").style.zIndex= -3000;
		
		for(x=0; x<21; x++)//on parcours toutes les case en X
		{
			for(y=0; y<21; y++)//sur la case x on pourcour toutes les cases sur y.
			{
				if(memento[x][y][coup] == 2) //ne marche que sur le coups actuel.
				{
					/* se rapelle de la piÃ¨re mangÃ©e ou posÃ©e, les deux sont enrigistrÃ©es sur la meme valeur: ca qui veut dire,
					si une pierre blanche est mangÃ©e ou posÃ©e dans la mÃ©moir du coup x elle auront les deux la valeur 2. c'est pour 
					ca qu'on vÃ©rifie aprÃ¨s si elle est visible ou pas, pr inverser cette action.
					donc si la pierre Ã©tÃ© mangÃ©e, elle rÃ©apparait. parcontre si 
					elle Ã©tait posÃ©e, elle disparait. ainsi la mÃ©moire inverse les actions faites en cours du jeu.
					
					la fonction cherche donc la tableau memento et vÃ©rifie dans chaque case si il y a la valeur cherchÃ©e. la fonction peu donc 
					etre exÃ©cutÃ©e 2 fois, notamment quand la on pose une pierre et que celle ci en mange une. Dans ce cas 2 sont enrigistrÃ©es
					et on dois les supprimÃ©s les deux.
					
					Aussi, on ne change le joeuur (on fait l'inverse que le dÃ©roulement du jeu normal) que si la l'inversement de la visibilitÃ©e 
					implique le passage de "visible" Ã  "pas visible" ce qui signifie que la pierre Ã  Ã©tÃ© posÃ©e et non prise.
					ainsi si plusieurs pierre sont prises, le joueur ne change que quand un pierre jouÃ© est dÃ©tectÃ©e. Ca Ã©vite des bugs dans 
					le changement de joueur.*/
					
					
					if(document.getElementById("idblanche"+x+"_"+y).style.opacity== 0)//si la pierre a Ã©tÃ© prise
					{
						document.getElementById("idblanche"+x+"_"+y).style.opacity=1;//on la rÃ©affiche pr aller en arriÃ¨re.
						pierres_n--; //on dÃ©crÃ©mente le nombre de pierres mangÃ©es. (puisqu'on est allÃ© en arriÃ¨re)
					}
					else if(document.getElementById("idblanche"+x+"_"+y).style.opacity== 1)//si la pierre a Ã©tÃ© posÃ©e
					{
						joueur=2; // et en meme temps on change de joueur, seulement lorsque la pierre Ã©tÃ© posÃ©e.
						document.getElementById("idblanche"+x+"_"+y).style.opacity=0;//on la supprime pour aller en arriÃ¨re.
					}
				}
				
				
				else if(memento[x][y][coup] == 1)//ne marche que sur le coup actuel.
				{
					/* se rapelle de la piÃ¨re mangÃ©e ou posÃ©e, les deux sont enrigistrÃ©es sur la meme valeur: ca qui veut dire,
					si une pierre blanche est mangÃ©e ou posÃ©e dans la mÃ©moir du coup x elle auront les deux la valeur 2. c'est pour 
					ca qu'on vÃ©rifie aprÃ¨s si elle est visible ou pas, pr inverser cette action.
					donc si la pierre Ã©tÃ© mangÃ©e, elle rÃ©apparait. parcontre si 
					elle Ã©tait posÃ©e, elle disparait. ainsi la mÃ©moire inverse les actions faites en cours du jeu.
					
					la fonction cherche donc la tableau memento et vÃ©rifie dans chaque case si il y a la valeur cherchÃ©e. la fonction peu donc 
					etre exÃ©cutÃ©e 2 fois, notamment quand la on pose une pierre et que celle ci en mange une. Dans ce cas 2 sont enrigistrÃ©es
					et on dois les supprimÃ©s les deux.
					
					Aussi, on ne change le joeuur (on fait l'inverse que le dÃ©roulement du jeu normal) que si la l'inversement de la visibilitÃ©e 
					implique le passage de "visible" Ã  "pas visible" ce qui signifie que la pierre Ã  Ã©tÃ© posÃ©e et non prise.
					ainsi si plusieurs pierre sont prises, le joueur ne change que quand un pierre jouÃ© est dÃ©tectÃ©e. Ca Ã©vite des bugs dans 
					le changement de joueur.*/
					
					
					if(document.getElementById("idnoire"+x+"_"+y).style.opacity== 0)//si la pierre a Ã©tÃ© prise
					{
						document.getElementById("idnoire"+x+"_"+y).style.opacity=1;//on l'affiche pr aller en arriÃ¨re.
						pierres_b--; //on dÃ©crÃ©mente le nombre de pierres mangÃ©es. (puisqu'on est allÃ© en arriÃ¨re)
					}
					else if(document.getElementById("idnoire"+x+"_"+y).style.opacity== 1)//si la pierre a Ã©tÃ© posÃ©e
					{
						joueur=1;//on change de joueur seulement lorsque la pierre Ã©tÃ© posÃ©e.
						document.getElementById("idnoire"+x+"_"+y).style.opacity=0;//on la cache pr aller en arriÃ¨re.
					}
				}
				
				
				
				
				
			}
			
			
		}
		
		/*pour la variable coup qui contien le numÃ©ro du coup. en reculant dans la partie on la fais baisser et en avanceant on la fait augmenter.
		-pour le recul dans la partie: si la varaible est egale a zÃ©ro on bloque le bouton de recul rapide et de recul par coup. parcontre, dÃ¨s qu'on recule, on doit activer l'avance rapide
		et l'avance par coup ( pour le dÃ©but de partie , comme pour le milieu de la partie.
		-Pour l'avancement dans la partie : si la variable est egale au nombre de coups total de la partie (stockÃ© dans coup_max_mem) on bloque le "bouton avance rapide"
		et "avance par coup". parcontre , dÃ¨s que l'avance par coup ou rapide a Ã©tÃ© clickÃ©e, on dÃ©bloque les touches "recul par coup" et "recul rapid"
		*/
		
		/*cette axcecution est faite aprÃ¨s la recherche de pierre dans la mÃ©moire (alors que dans forward_mem(), elle est fait au debut) parcequ'il faut
		 laisser la variable coup intacte pour pouvoir chercher sur le coup actuel avant de changer de coup) */
		 
		if (coup>0) // comme ca si on appuie quand meme le compteur arrete quand il est a 0 de coups jouÃ©s. Ã©vite les bugs possibles.
		{
			coup--; //on baisse le coup actuel puisqu'on vien de remonter dans la partie.
		}
	
		if(coup==0) // si le coup est egal a zÃ©ro, on bloque les boutons arriÃ¨re pour Ã©viter les bugs. (on met pas un elsif pr le coup 0 de la partie, si on passe de 1Ã  0, il faut d'abord baisser coup de 1 et aprÃ¨s griser. donc on fiat les deux en meme temps.
		{
			document.getElementById('arriere_mem').disabled=true; //bloquer le bouton arriere!!
			document.getElementById('first_mem').disabled=true; //bloquer le bouton first!
		}
			
		document.getElementById('avant_mem').disabled=false;//debloquer le bouton avant!
		document.getElementById('last_mem').disabled=false;//debloquer le bouton last!
   }
   
   function forward_mem()
   {
	   
		/*cette axcecution est faite avant la recherche de pierre dans la mÃ©moire (alors que dans backward_mem(), elle est fait a la fin) parcequ'il faut
		 d'abord augmenter la variable pour pouvoir chercher sur le coup d'aprÃ¨s.) */
		  
		  
	    if(coup<coup_max_mem) //comme ca si on appuie quand meme le compteur arrï¿½te quand il est au max de coups jouï¿½s (bloquï¿½ par les bouton, mais on sais jamais!)
		{	
			coup++; //on avance d'un coup puisqu'on est entrain de remonter dans la partie.
		}
		
		for(x=0; x<21; x++)
		{
			for(y=0; y<21; y++)
			{
				if(memento[x][y][coup] == 2) 
				{
					/* se rapelle de la piÃ¨re mangÃ©e ou posÃ©e, les deux sont enrigistrÃ©es sur la meme valeur: ca qui veut dire,
					si une pierre blanche est mangÃ©e ou posÃ©e dans la mÃ©moir du coup x elle auront les deux la valeur 2. c'est pour 
					ca qu'on vÃ©rifie aprÃ¨s si elle est visible ou pas, pr inverser cette action.
					donc si la pierre Ã©tÃ© mangÃ©e, elle rÃ©apparait. parcontre si 
					elle Ã©tait posÃ©e, elle disparait. ainsi la mÃ©moire inverse les actions faites en cours du jeu.
					
					la fonction cherche donc la tableau memento et vÃ©rifie dans chaque case si il y a la valeur cherchÃ©e. la fonction peu donc 
					etre exÃ©cutÃ©e 2 fois, notamment quand la on pose une pierre et que celle ci en mange une. Dans ce cas 2 sont enrigistrÃ©es
					et on dois les supprimÃ©s les deux.
					
					Aussi, on ne change le joueuur (on fait l'inverse que le dÃ©roulement du jeu normal) que si la l'inversement de la visibilitÃ©e 
					implique le passage de "non-visible" Ã  " visible" ce qui signifie que la pierre Ã  Ã©tÃ© posÃ©e et non prise.
					ainsi si plusieurs pierre sont prises, le joueur ne change que quand un pierre jouÃ© est dÃ©tectÃ©e. Ca Ã©vite des bugs dans 
					le changement de joueur.*/
					
					
					if(document.getElementById("idblanche"+x+"_"+y).style.opacity== 0)//si la pierre a Ã©tÃ© posÃ©e.
					{
						joueur=1; //on ne change de joueur qui si la pierre a Ã©tÃ© posÃ©e.
						document.getElementById("idblanche"+x+"_"+y).style.opacity=1;//on affiche la pierre posÃ©e.
					}
					else if(document.getElementById("idblanche"+x+"_"+y).style.opacity== 1)//si la pierre a prise
					{
						document.getElementById("idblanche"+x+"_"+y).style.opacity=0;//on supprime la pierre prise.
						pierres_n++; //on incrÃ©mente le nombre de pierres mangÃ©es (puisqu'on avance. et que la pierre a Ã©tÃ© prise.
					}
				}
				
				
				else if(memento[x][y][coup] == 1)
				{
					/* se rapelle de la piÃ¨re mangÃ©e ou posÃ©e, les deux sont enrigistrÃ©es sur la meme valeur: ca qui veut dire,
					si une pierre blanche est mangÃ©e ou posÃ©e dans la mÃ©moir du coup x elle auront les deux la valeur 2. c'est pour 
					ca qu'on vÃ©rifie aprÃ¨s si elle est visible ou pas, pr inverser cette action.
					donc si la pierre Ã©tÃ© mangÃ©e, elle rÃ©apparait. parcontre si 
					elle Ã©tait posÃ©e, elle disparait. ainsi la mÃ©moire inverse les actions faites en cours du jeu.
					
					la fonction cherche donc la tableau memento et vÃ©rifie dans chaque case si il y a la valeur cherchÃ©e. la fonction peu donc 
					etre exÃ©cutÃ©e 2 fois, notamment quand la on pose une pierre et que celle ci en mange une. Dans ce cas 2 sont enrigistrÃ©es
					et on dois les supprimÃ©s les deux.
					
					Aussi, on ne change le joeuur (on fait l'inverse que le dÃ©roulement du jeu normal) que si la l'inversement de la visibilitÃ©e 
					implique le passage de "non visible" Ã  " visible" ce qui signifie que la pierre Ã  Ã©tÃ© posÃ©e et non prise.
					ainsi si plusieurs pierre sont prises, le joueur ne change que quand un pierre jouÃ© est dÃ©tectÃ©e. Ca Ã©vite des bugs dans 
					le changement de joueur.*/
				
					
					if(document.getElementById("idnoire"+x+"_"+y).style.opacity== 0)//si la pierre a Ã©tÃ© posÃ©e
					{
						document.getElementById("idnoire"+x+"_"+y).style.opacity=1;//on affiche la pierre posÃ©e pr aller en avant.
						joueur=2;//on ne change que si la pierre a Ã©tÃ© posÃ©e.
					}
					else if(document.getElementById("idnoire"+x+"_"+y).style.opacity== 1)//si la pierre a Ã©tÃ© prise.
					{
						document.getElementById("idnoire"+x+"_"+y).style.opacity=0;//on supprime la pierre prise pour aller en avant.
						pierres_b++; //on incrÃ©mente le nombre de pierres mangÃ©es (puisqu'on avance. et que la pierre a Ã©tÃ© prise.
					}
				}
			}
		}
		
		/*pour la variable coup qui contien le numÃ©ro du coup. en reculant dans la partie on la fais baisser et en avanceant on la fait augmenter.
		-pour le recul dans la partie: si la varaible est egale a zÃ©ro on bloque le bouton de recul rapide et de recul par coup. parcontre, dÃ¨s qu'on recule, on doit activer l'avance rapide
		et l'avance par coup ( pour le dÃ©but de partie , comme pour le milieu de la partie.
		-Pour l'avancement dans la partie : si la variable est egale au nombre de coups total de la partie (stockÃ© dans coup_max_mem) on bloque le "bouton avance rapide"
		et "avance par coup". parcontre , dÃ¨s que l'avance par coup ou rapide a Ã©tÃ© clickÃ©e, on dÃ©bloque les touches "recul par coup" et "recul rapid"
		*/
		
		if(coup== coup_max_mem)//si on atteint le max de coups.
		{
			document.getElementById('avant_mem').disabled=true; //bloquer le boutonavant!!
			document.getElementById('last_mem').disabled=true; //bloquer le boutonlast!!
		}
		
		document.getElementById('arriere_mem').disabled=false; //debloquer le bouton arriere!!
		document.getElementById('first_mem').disabled=false; //debloquer le bouton first!!
	
   }
   
   
   function first_mem()
    {
		/* fonction qui fait un recul rapid (jusqu'au coup 0) 
		elle a un pricipe trÃ¨s simple, appeler la fonction "backward_mem()" jusqu'a ce qu'on arrive au coup 0 )
		*/
		for(i=coup; i>0; i--) //on assigne une varaible i qui aura la valeur du nombre de coups actuel.
		{
			backward_mem();// on apelle la fonction qui fait reculer dasn la partie , autant de fois que necessaire. elle se charge de tout.
		}
		
		document.getElementById('first_mem').disabled=true; //bloquer le boutonfirst!! puisqu'on est au premier coup deja.
		
    }
	
	function last_mem()
    {
		/* fonction qui fait une avance rapid (jusqu'au coup_max_mem) 
		elle a un pricipe trÃ¨s simple, appeler la fonction "forward_mem()" jusqu'a ce qu'on arrive au dernier coup. )
		*/
		
		for(i=coup; i<coup_max_mem; i++) 
		{
			forward_mem();
		}
		document.getElementById('last_mem').disabled=true; //bloquer le boutonlast!! puisqu'on se trouve sur le dernier coup deja.
		
    }
   
   function No_Coup_mem()
   {
		 /*cette fonction permet d'aller directement jusqu'au coup choisit au par-avant dans un input.
		 le principe d'appeler la fonction backward_mem quand la chiffre est plus petit que le coup actuel et la fonction 
		 forward_mem quand le chiffre choisi est plus grand. la fonction apelle ses deux fonction autant de fois jusqu'a ce qu'on arrive
		 au coup choisit.
		 */
	     var noCoup = parseInt(document.getElementById('noCoup').value); //variable qui contien la valeur du champ input.
	     var f= coup; //variable qui correspond au coup actuel.
		   
		if(noCoup<=coup_max_mem)//si le coup choisit n'est pas supï¿½rieur au nombre de coups total de la partie!
		{
		
		   while(noCoup!=f) //tant que le numero choisie n'est pas ï¿½gal au coup affichï¿½
		   {
			   if(noCoup<f)//si le coup choisi est plus grnad que le coup actuel!
			   {
				   backward_mem(); //on exÃ©cute la fonction qui va s'occuper de tout.
				   f--; //on baisse la valeur du coup actuel.
			   }
			   else if (noCoup>f)//si le coup choisi est plus petit que le coup actuel!
			   {
				   forward_mem(); //on exÃ©cute la fonction qui va s'occuper de tout.
				   f++; //on augmente la valeur du coup actuel.
			   }
			   
		   }		   
		}
		else
		{
			//les partie ne comporte pas autant de coup q'affichï¿½, il est donc impossible de procï¿½der!
		}
	   
	   
	   
   }

   function initialisations()
	{
		/*Cette fonction est trÃ¨s utile. elle intialise les tableau et varaible(s) utilisÃ©es pour l'atari et la prise de groupe de pierres.
		ces varaibles contiennent des valeur qui doivent etre recalculÃ©e a chaque click sur le goban, tel que la positions des pierres. 
		par ex:si une pierre est mangÃ©e ou prise. on exÃ©cute "initialiser" pour recalculer les positions des peirres actuelles sur le goban.
		
		certains tableau contienne aussi les informations sur le nombre de libertÃ© d'un groupe (ou pierre) de pierres sur le goban. elle ne seront utilisÃ©e
		que lors de l'aoelle de la fonction "detect-atari".
		
		*/
		
		
		//calcule du tableau des couleurs! a deux dimensions! parcour tout le goban pr enregistrer la position des pierres actuellement sur le goban.
		for(var r=0;r<21;r++)
		{
			
			for(var t=0; t<21; t++)
			{
			

				var noir= document.getElementById("idnoire"+r+"_"+t).style.opacity; //on regarde si la pierre noir est visible ou pas.1=visible et 0= invisible
				var blanc= document.getElementById("idblanche"+r+"_"+t).style.opacity; //on regarde si la pierre blanche est visible ou pas. 1=visible et 0= invisible
				
				//compter les bords comme pierres prises
				
				Couleur[r][t]=0; //on initialise au dÃ©but pour Ã©viter les bugs.
				
				
				if( (noir == 1) && (blanc == 0)) //si la pierre noir est affichÃ©e (et pas la blanche, par prÃ©caution)
				{
					Couleur[r][t] = 1;//on assigne le numÃ©ro 1.
				}
				else if( (blanc == 1) && (noir == 0)) //si la pierre blanche est affichÃ©e (et pas la noire, par prÃ©caution)
				{
					Couleur[r][t] = 2;//on assigne le numÃ©ro 2.
				}

				else if ((blanc == 0) && (noir == 0)) //si aucun des pierres n'est affichÃ©e.
				{
					Couleur[r][t] = 0; //on assigne le numÃ©ro 0. on fait ceci par prÃ©caution. ce n'est pas obligatoir. (on l'a deja fait au dÃ©but.)
				}

			}
		}
		
				
			
		
		
		
		//initialisation! tableau de valeur representant le no de groupe de la case. utilisÃ© dans "detect_atari"
		for(var i=0; i<21; i++)
		{
			for( var j=0; j<21; j++)
			{
				NoGroupe[i][j] = 0;
				
			}
		}
		
		//initialisation tableaz de valezr representant le nb de libertï¿½e d groupe.
		for(i=0; i<361; i++) //on va dire qu'un groupe a max 361 libertï¿½s puisqu'il y a maximum 361 pierre sur un meme goban! (impossible mais on prend des prÃ©cautions)
		{
			Liberte[i]= 0;
		}
		
		//initialiser tableaz de valeur disant si la libertï¿½ a deja Ã©tÃ© comptÃ©e pour ce groupe. i=x, j=y et h= numÃ©ro du groupe.
		for(var i=0; i<21; i++)
		{
			for( var j=0; j<21; j++)
			{
				for(var h=0; h<361; h++) //on va dire qu'il y aura maximum 361 groupes! (pour une partie!) (impossible, il y a maximum 361 pierres. mais on prend des prÃ©cautions.)
				{
					DejaCompte[i][j][h] = false; //on initialise
					if(i==0 || i==20 || j==0 || j==20) // les bords sont deja comptÃ©s comme des libertÃ©e prises.
					DejaCompte[i][j][h] = true; // les bords sont deja comptÃ©s comme des libertÃ©e prises.
				}
			}
		}
		
		GlobalNoGroupe= 0; //variable qui contien le numÃ©ro du groupe globalement.

	}
   
   
   function select(x,y)
   {
	    //faire les ombres des boules (opacit? 0.5, effet de style^^)
	    /*cette fonction n'affiche l'ombre des pierres que lorsque c'est possible de la posÃ©e.
		le joueur saura intuitivement si le coup est possible, utile pour les dÃ©butants et rend, graphiquement assez bien
		
		elle est appelÃ©e lorsqu'on survole une case.*/
		
		if(x==0|| x==20 || y==0 || y==20) // pr que les bords ne reagissent pas
		{
		}
		else
		{
			if(joueur==1) //si on le joueur est noir on affiche les pierres noires.
			
			{
				if(document.getElementById("idnoire"+x+"_"+y).style.opacity==0 && document.getElementById("idblanche"+x+"_"+y).style.opacity==0 ) //si la case est entiÃ©rement vide 
				{
					document.getElementById("idnoire"+x+"_"+y).style.opacity = 0.5; //on affiche son ombre.
				}
			}
			
			else if(joueur==2)//si on le joueur est blanc on affiche les pierres blanches.
			
			{
				if(document.getElementById("idnoire"+x+"_"+y).style.opacity==0 && document.getElementById("idblanche"+x+"_"+y).style.opacity==0 ) //si la case est entiÃ©rement vide 
				{
					document.getElementById("idblanche"+x+"_"+y).style.opacity = 0.5;//on affiche son ombre.
				}
			}
		}

   }
   
   function deselect(x,y)
   {
	   //pour annuler l'effet de la fonction "selecte" elle est appeler lorsqu'on quitte l'emplacement de l'image. (le survol)
		
		if (document.getElementById("idnoire"+x+"_"+y).style.opacity == 0.5)//si la pierre Ã©tÃ© affichÃ©e
		{
			document.getElementById("idnoire"+x+"_"+y).style.opacity = 0;//on la fait disparaitre.
		}

		else if (document.getElementById("idblanche"+x+"_"+y).style.opacity == 0.5)//si la pierre Ã©tÃ© affichÃ©e
		{
			document.getElementById("idblanche"+x+"_"+y).style.opacity = 0;//on la fait disparaitre.
		}
   }
   
   function joueur_turn() 
	{
		/* affiche le Joueur acutel et le coup actuel en haut du plateau de jeu.
		on l'apellera grace a un setinterval qui apellera la fonction chaque demi seconde.*/
		 
		var mode_text;//variable qui contien le champ de text qui donne la couleur du jouer qui doi jouer.
			
		if (joueur == 1) //si le joueur qui peu jouer est noir
		{
			mode_text= "Windows "; //la viriable prend le champ de text "Windows"
			
		}
		else if (joueur == 2) //si le joueur qui peu jouer est blanc
		{
			mode_text = "Apple";//la viriable prend le champ de text "Apple"
			
		}
		 
		var strS= "Coup: "+coup+" sur "+coup_max_mem+" coups en tout. C'est &agrave; "+mode_text+" de jouer "; //ici on assemble la phrase devant etre affichÃ©e en haut du plaetau de jeu.
		  
		document.getElementById("text_jeu").innerHTML = strS; //ici on l'assigne au div se trouvant en haut du goban.(plateau de jeu)
	}

 function score() 
 {
	 /* affiche le joueur actuel en grand et le joueur a venir en petit.
	on met ainsi en avant les informations du joueur actuel, ainsi que son nom, sa couleur et le nombre de pierres mangÃ©es.
	on apelle cette fonction toute les demisecondes avec setintrevall*/
	
	 var mode_text_J=""; //variable contenant le texte de base.
	 //on rÃ©cupÃ©re les noms dans les input du haut.
	 var Joueur1 = document.getElementById('Joueur1').value;
	 var Joueur2 = document.getElementById('Joueur2').value;
	 
	 
	 if (joueur == 1) //si le joueur joue avec noir
	 {
		mode_text_J= "<b>"+Joueur1+"</b>";// la valeur est en gras.//la valeur est en gras puisqu'il s'agit du jouer actuel
		mode_text_J_1= Joueur2; //la valeur n'est pas en gras.
		
		var image= '<IMG SRC="images/Windows-logo.png" STYLE="width:35px; height:35px;" >'; //la taille de l'image de la couleur du jouer actuel est plus grande.
		var image_1= '<IMG SRC="images/Apple-logo.png" STYLE="width:20px; height:20px;">';//la taille de l'image de la couleur du jouer suivant est moin grande.
	 }
	 else if (joueur == 2) //si le joueur joue avec blanc
	 {
		mode_text_J= "<b>"+Joueur2+"</b>"; //la valeur est en gras puisqu'il s'agit du jouer actuel
		mode_text_J_1= Joueur1; //la valeur n'est pas en gras, il s'agit du jouer suivant.
		
		
		var image= '<IMG SRC="images/Apple-logo.png" STYLE="width:35px; height:35px;">';//la taille de l'image de la couleur du jouer actuel est plus grande.
		var image_1= '<IMG SRC="images/Windows-logo.png" STYLE="width:20px; height:20px;">';//la taille de l'image de la couleur du jouer suivant est moin grande.
	 }
	  
	 var strS_j= "<br><small>"+image_1+"    " + mode_text_J_1 + "    "+image_1+"<br> pierres mang&eacute;es: " +pierres_n+"</small><br><br>"; //joueur qui attend
	 
	 strS_j += "<big>"+image+"    " + mode_text_J + "    "+image+"<br> pierres mang&eacute;es: " +pierres_b+"</big>"; //joueur qui joue actuellement
	 
	 
	  
	 document.getElementById("joueur").innerHTML = strS_j; //on attribue au div qui se trouve en dessous du systÃ¨me de mÃ©moire.
 }
 
 function last_image()
 {
	 /*ici on va affichÃ©e un joli rond rouge, sur la derniÃ¨re pierre.
	cette fonction sera appeler chaque 100 millisecondes avec setintervall*/
	
	if(coup==0) //si on se trouve au dÃ©but de la partie on affiche pas le rond rouge puisque personne n'a encore jouÃ©.
	{
		document.getElementById("idfirst").style.zIndex= -3000;//on cache le rond rouge en dessous du goban.
	}
	else//si un des joueur a deja jouÃ©. on affiche le rond sur le dernier coup.
	{
		for(e=1;e<20;e++)//on parcours le goban sur x
		{
			for(r=1;r<20;r++) //on parcours le goban sur y
			{
				if(memento[e][r][coup] == 2 || memento[e][r][coup] ==1 ) //dÃ¨s que la pierre est trouvÃ©(dans le dernier coup, soi en parcourant soi en jouant) on positionne le rond rouge.
				{
					if(document.getElementById("idblanche"+e+"_"+r).style.opacity==1 || document.getElementById("idnoire"+e+"_"+r).style.opacity==1 ) //il y a aussi dans memento, les pierres qui ont Ã©tÃ© prise qui sont enrigistrÃ©e, donc on doit seulement affichÃ©e le rond a la place des pierres visibles.
					{
						document.getElementById("idfirst").style.zIndex= 3000;//on ressor le rond du dessous du goban si on fait le premier coup de la partie.
						document.getElementById("idfirst").style.left= document.getElementById("idblanche"+e+"_"+r).style.left; //c la position, pas la couleur qui importe!
						document.getElementById("idfirst").style.top= document.getElementById("idblanche"+e+"_"+r).style.top;//idem.
					}
				}
			}
		}
	}
	 
 }
 
 function random_shit()
 {
	/* sur cete fonction on va crÃ©er une option qui n'est normalement pas prÃ©vu pour le go, mais que j'ai trouvÃ© plutot amusant a programmer a utilisÃ©,
	cette fonction consiste a mettre des pierres au hasard sur le goban. comme ca on peu dÃ©buter la partie sur un hasard complet et regarder si on
	est assez bon pour rattraper une partie deja a moitiÃ© jouÃ©e au hasard. le nombre de coup jouÃ©s au hasard peuvent etre choisit.*/
	
	var xD = document.getElementById('random_value').value; //reÃ©cupÃ©rer la valeur dans le bouton.
	
	if(xD > 150) //maximum 150
	{
		xD=150;
	}
	
	while(coup<xD) //force la fonction a aller jusqu'au bout. du nombre de coups chosiit. puisque parvoi la fonction click est annulÃ©e si la pierre se retrouve sur une autre ou si elle joue a un endroit interdit.( par ex: au milieu d'un atari.)
	{
		for(u=0; u<xD;u++)
		{
			
			var z= 1+Math.round(Math.random()*18); //position au hasard sur x
			var s= 1+Math.round(Math.random()*18);//position au hasard sur y.
			
			click(z,s);//on simule le click a un endroit choisit au hasard sur le goban.
			
			if(coup==xD) //on arrÃªte la fonction , on gagne du temps, et on a ainsi le nombre exact de coups choisis.
			{
				return 0;//on arrÃªte la fonction su le champ.
			}
			
		}
	}
 }
 
 
 
 function ko_xy(x,y) //vÃ©rifie si il y a ko.
 {
	 /*le ko consiste a interdire a un joueur de manger une pierre qui vient de manger une pierre du jouer actuel.
	 pour l'interdire on crÃ©e cette fonction qui va vÃ©rifier si la pierre prÃ©cÃ©dant le coup actuel Ã©tÃ© visible ou pas.
	 si elle lÃ©tait, on se retrouve avec un KO. et on retourne la valeur correspondant a la position du ko. a la suite (dans la fonction click)
	 on va assigner a cette position une image qui interdit de rejouer a cet endroit.*/
	 
	 if( memento[x][y][coup]==2)//si la pierre qui joue est blanche (on prend "memento" et non "Couleur" parceque le numÃ©ro du coup importe!)
	 {
		if((memento[x+1][y][coup]==1 && document.getElementById("idnoire"+(x+1)+"_"+y).style.opacity==0) && (Couleur[x-1][y]==1 || x==1) &&(Couleur[x][y+1]==1 || y==19) &&(Couleur[x][y-1]==1 || y==1) ) //premiÃ¨re situation ou le ko se fait d'a droite
		{	
			return 1; //on retourne la valeur 1
		}
		else if((memento[x-1][y][coup]==1 && document.getElementById("idnoire"+(x-1)+"_"+y).style.opacity==0) && (Couleur[x+1][y]==1 || x==19) &&(Couleur[x][y+1]==1 || y==19) &&(Couleur[x][y-1]==1 || y==1) ) //premiÃ¨re situation ou le ko se fait d'a gauche
		{
			return 2;//on retourne la valeur 2
		}
		else if((memento[x][y+1][coup]==1 && document.getElementById("idnoire"+(x)+"_"+(y+1)).style.opacity==0) && (Couleur[x+1][y]==1 || x==19) &&(Couleur[x-1][y]==1 || x==1) &&(Couleur[x][y-1]==1 || y==1) ) //premiÃ¨re situation ou le ko se fait d'en bas
		{
			return 3;//on retourne la valeur 3
		}
		else if((memento[x][y-1][coup]==1 && document.getElementById("idnoire"+(x)+"_"+(y-1)).style.opacity==0) && (Couleur[x+1][y]==1 || x==19) &&(Couleur[x-1][y]==1 || x==1) &&(Couleur[x][y+1]==1 || y==19) ) //premiÃ¨re situation ou le ko se fait d'en haut
		{
			return 4;//on retourne la valeur 4
		}
	 }
	 else if(memento[x][y][coup]==1)//si la pierre qui joue est noire (on prend "memento" et non "Couleur" parceque le numÃ©ro du coup importe!)
	 {
		
		 if((memento[x+1][y][coup]==2 && document.getElementById("idblanche"+(x+1)+"_"+y).style.opacity==0) && (Couleur[x-1][y]==2 || x==1) &&(Couleur[x][y+1]==2 || y==19) &&(Couleur[x][y-1]==2 || y==1) ) //premiÃ¨re situation ou le ko se fait d'a droite
		 {
			return 1;//on retourne la valeur 1
		 }
		else if((memento[x-1][y][coup]==2 && document.getElementById("idblanche"+(x-1)+"_"+y).style.opacity==0) && (Couleur[x+1][y]==2 || x==19) &&(Couleur[x][y+1]==2 || y==19) &&(Couleur[x][y-1]==2 || y==1) ) //premiÃ¨re situation ou le ko se fait d'a gauche
		{
			return 2;//on retourne la valeur 2
		}
		else if((memento[x][y+1][coup]==2 && document.getElementById("idblanche"+(x)+"_"+(y+1)).style.opacity==0) && (Couleur[x+1][y]==2 || x==19) &&(Couleur[x-1][y]==2 || x==1) &&(Couleur[x][y-1]==2 || y==1) ) //premiÃ¨re situation ou le ko se fait d'en bas
		{
			return 3; //on retourne la valeur 3
		}
		else if((memento[x][y-1][coup]==2 && document.getElementById("idblanche"+(x)+"_"+(y-1)).style.opacity==0) && (Couleur[x+1][y]==2 || x==19) &&(Couleur[x-1][y]==2 || x==1) &&(Couleur[x][y+1]==2 || y==19) ) //premiÃ¨re situation ou le ko se fait d'en haut.
		{
			return 4; //on retourne la valeur 4
		}
	 }
	 return 0; //on retourne 0 sinon.
 }
 


   