var x = 0;
var y = 0; 

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
var table = new Array();
var x_joueur = 0 ;
var y_joueur = 0 ;
function clic(x, y)
    {  x_joueur = x;
       y_joueur = y;
     if ( joueur == 1 ) {
     document.getElementById('x1').innerHTML = x_joueur;
     document.getElementById('y1').innerHTML = y_joueur;   
         }
     else{
    document.getElementById('x2').innerHTML = x_joueur;
     document.getElementById('y2').innerHTML = y_joueur;  
     } /* ceci sert juste a afficher les axes x et y des joueurs */
	    /*
		CEtte fonction, est la fonction principale, elle se declanche lors du click, et apelle presque toutes les autres fonctions
		pr vÃ©rifier les atari, ko , groupes entourÃ©s, etc...
		*/
		//on initialise une premiÃ¨re fois, les variable qui doivent etre initialisÃ©s a chaque click
        
		initialisations();
		
		if(x==0|| x==20 || y==0 || y==20) // pr que les bords ne reagissent pas
		{
		}
		else //tout apart les rebords.
		{
		
			if(Couleur[x][y]== 5) //si on se trouve sur un ko, rien ne se passe
			{
				//ne rien faire
			}
			else//si on se trouve sur autre chose q'un ko. on continue...
			{
				if(Couleur[x][y] == 2 || Couleur[x][y] == 1) //si la case est prise, on ne fait rien
				{
					//ne rien faire
				}	
				
				else//si on se trouve sur une case pas prise, on continue.
				{
					//on commence par supprimer le ko si il y en a un.
					for(i=0;i<21;i++)//on parcours sur x
					{
						for(j=0;j<21;j++)//on parcours sur y
						{
							if(Couleur[i][j]==5)//si on trouve un atari
							{
								Couleur[i][j]==0;//on le supprime.
							}
						}
					}
					//on cache le signe de ko a chaque debut du coup, pr le rÃ©afficher aprÃ¨s si il est actif et valable.
					document.getElementById("idforbidden").style.zIndex= -3000;
					
					
					if(joueur==1) // si c'est a noir de jouer.
					{
	
						document.getElementById("idnoire"+x+"_"+y).style.opacity=1; //on rend la pierre a l'emplacement du coup visible.
							
						joueur=2; //on change de joueur.
		
						coup++; //on augment le coup actuel.
						
						if(coup<=coup_max_mem) //si on se trouve dans la navigation et qu'on joue, il ne faut pas augmenter le nombre de coup max jusqu'a ce qu'on arrive au dernier coup et qu'on ai remplacÃ© tout les autres coups en memoire.
						{
							//on ne fait rien
						}
						else //si on se trouve au dernier coup en memoire
						{
							coup_max_mem++; //pr savoir combien de coup il y a en tout dnas la partie. on l'augmente a chaque coup.
						}
						
						//on supprime le coup en mÃ©moire, si il y en a un dans ce "coup". pr ensuite le remplacer ( permet de retourner dans la partie et de rejouer a un endroit si on veu reprendre)
						for(i=0;i<21;i++)//on parcours sur x
						{
							for(j=0;j<21;j++)//on parcours sur y dans le XÃ¨me tableau.
							{
								if(memento[i][j][coup]==1 || memento[i][j][coup]==2)//on supprime toutes les pierres sur ce coup.
								{
									memento[i][j][coup]=0;//on met zÃ©ro a la place.
								}
							}
						}
						memento[x][y][coup] = 1; //et on remplace par la nouvelle pierre, noire.
						
						
						
						if(coup==coup_max_mem) //encore pour eviter les bugs.on bloque les boutons de navigation quand on pose la derniÃ¨re pierre.
						{
							document.getElementById('avant_mem').disabled=true;//bloquer le bouton avant!
							document.getElementById('last_mem').disabled=true;//bloquer le bouton last!
						}
						
						//premier joueur qui dï¿½clanche le degrisement des buttons pr avancer dnas la partie!
						document.getElementById('arriere_mem').disabled=false; 
						document.getElementById('first_mem').disabled=false; 
						
					}
					
					else if(joueur==2)//si c'est au blanc de jouer.
					{
					
						document.getElementById("idblanche"+x+"_"+y).style.opacity=1; //on affiche la pierre blanche a l'endroit clickÃ©
						
						joueur=1; //on change de joueur.
						
						coup++;
						if(coup<=coup_max_mem) //si on se trouve dans la navigation et qu'on joue, il ne faut pas augmenter le nombre de coup max jusqu'a ce qu'on arrive au dernier coup et qu'on ai remplacÃ© tout les autres coups en memoire.
						{
							//on ne fait rien
						}
						else //si on se trouve au dernier coup en memoire
						{
							coup_max_mem++; //pr savoir combien de coup il y a en tout dnas la partie. on l'augmente a chaque coup.
						}
						
						for(i=0;i<21;i++)
						{
							for(j=0;j<21;j++)
							{
								if(memento[i][j][coup]==1 || memento[i][j][coup]==2)//on supprime toutes les pierres sur ce coup.
								{
									memento[i][j][coup]=0;//on met zÃ©ro a la place.
								}
							}
						}
						
						memento[x][y][coup] = 2; //on remplace par la nouvelle pierre en mÃ©moire.
							
						if(coup==coup_max_mem) //encore pour eviter les bugs. on bloque les boutons de navigation quand on pose la derniÃ¨re pierre.
						{
							document.getElementById('avant_mem').disabled=true;//bloquer le bouton avant!
							document.getElementById('last_mem').disabled=true;//bloquer le bouton last!
						}
						
					}
					
					
					/* ici, il fallait Ãªtre ingÃ©nieux, je m'explique. Quand on joue au go dans un endroit deja en atari, la pierre doit disparaitre et on ne change pas de joueur,
					parceque ce coup est "interdit". Mais si la pierre jouÃ©e dans un atari prend une autre pierre, alors le coup est permis.
					ainsi, la fonction "detect_atari" a Ã©tÃ© faite de facon a ce que si elle prend la valeur 1, elle Ã©limine seulement les pierres prises, si la pierre a mangÃ©e une autre pierre
					en jouant. Parcontre si elle prend en argument 2 , elle Ã©limine les autre pierres qui sont en atari et qui sont appelÃ©e interdites.
					il faut donc initialiser entre ses deux etapes.*/
					
					//on initialise d'abord!
					initialisations();
					
					var continu=detect_atari(1); //on applique la fonction et on donne la valeur de retour dans continu
						
					
					//on rÃ©initianilise, pr le bon fonctionnement de la suite.
					initialisations();
					
					var continu= detect_atari(2); //on refait pr savoir si il y a des pierres dechets.
						
					if(continu ==0) //si il y a des pierres dechets, on les suppriment.
					{
						if(joueur==1)//si c'est a noir de jouer.
						{
							document.getElementById("idblanche"+x+"_"+y).style.opacity=0;//on supprime la pierre, on laisse pas le joueur jouer.
							coup--; //on supprime le coup dans la memoire
							coup_max_mem--; //on supprime le coup dans la memoire
							memento[x][y][coup] = 0; //supprime lecoup dansla memoire
							joueur=2;//on annule le changement de joueur.
						}
						else if(joueur==2)//si c'est a blanc de jouer.
						{
							document.getElementById("idnoire"+x+"_"+y).style.opacity=0; //on supprime la pierre, on laisse pas le joueur jouer.
							coup--; //on supprime le coup dans la memoire
							coup_max_mem--; //on supprime le coup dans la memoire
							memento[x][y][coup] = 0; //supprime lecoup dansla memoire
							joueur=1;//on annule le changement de joueur.
						}
						
					}
					
					var verif_ko = ko_xy(x,y); //tout en exÃ©cutant la fonction, on donne la valeur du return a la variable "verif_ko"
						
					if(verif_ko == 1) //on a un ko. a droite.
					{
						Couleur[x+1][y]= 5; //le numero 5 est assignÃ© a la couleur du coup. Ca signifie qu'il y a un k o en cette case.
						document.getElementById("idforbidden").style.zIndex= 3000;//on remet l'image au dessus du goban.
						document.getElementById("idforbidden").style.left= document.getElementById("idblanche"+(x+1)+"_"+y).style.left; //c la position en x, pas la couleur qui importe!
						document.getElementById("idforbidden").style.top= document.getElementById("idblanche"+(x+1)+"_"+y).style.top;//c la position en y, pas la couleur qui importe!
					}
					else if(verif_ko == 2) //on a un ko. a gauche
					{
						Couleur[x-1][y]= 5; //5= ko //on remet l'image au dessus du goban.
						document.getElementById("idforbidden").style.zIndex= 3000;//on remet l'image au dessus du goban.
						document.getElementById("idforbidden").style.left= document.getElementById("idblanche"+(x-1)+"_"+y).style.left; //c la position x, pas la couleur qui importe!
						document.getElementById("idforbidden").style.top= document.getElementById("idblanche"+(x-1)+"_"+y).style.top;//c la position en y, pas la couleur qui importe!
					}
					else if(verif_ko == 3) //on a un ko. en bas
					{
						Couleur[x][y+1]= 5; //5= ko //on remet l'image au dessus du goban.
						document.getElementById("idforbidden").style.zIndex= 3000;//on remet l'image au dessus du goban.
						document.getElementById("idforbidden").style.left= document.getElementById("idblanche"+(x)+"_"+(y+1)).style.left; //c la position x, pas la couleur qui importe!
						document.getElementById("idforbidden").style.top= document.getElementById("idblanche"+(x)+"_"+(y+1)).style.top;//c la position en y, pas la couleur qui importe!
					}
					else if(verif_ko == 4) //on a un ko. en haut
					{
						Couleur[x][y-1]= 5; //5= ko //on remet l'image au dessus du goban.
						document.getElementById("idforbidden").style.zIndex= 3000;//on remet l'image au dessus du goban.
						document.getElementById("idforbidden").style.left= document.getElementById("idblanche"+(x)+"_"+(y-1)).style.left; //c la position x, pas la couleur qui importe!
						document.getElementById("idforbidden").style.top= document.getElementById("idblanche"+(x)+"_"+(y-1)).style.top;//c la position en y, pas la couleur qui importe!
					}
				}
			}
		}
    }
   
  