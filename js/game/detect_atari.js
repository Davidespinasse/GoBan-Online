   function detect_atari(times)
    {
		/* CEtte fonctino, est la fonction la plus importante du logiciel, elle detecte et supprime les groupes de pierres (ou pierres seules) 
		qui sont entourées. pour les détecter elle vérifie toute les peirres sur le goban. dès qu'elle detecte une pierre elle vérifie si sa voisine
		est de la meme couleur, si c'est le cas elle continue, mais cette fois avec la pierres voisine. et aisni de suite on a une mise en abimes de fonction,
		on rapelle la fonction dasn chacune d'entre elles, jusqu'a ce que sache exactement quelle pierres appartiennent au groupe. Lorsque la fonction tombe sur
		une pierre de la couleure voisine, la fonction ne fait rien. si parcontre elle tombe sur un endroit vide a proximité du groupe, elle incrémente la variable "liberte"
		ainsi, si elle detecte ne serai-ce qu'une libertée, la groupe reste intact, mais si "liberté" reste egale à 0, alors on supprime toutes les pierres correspondant a ce 
		dernier groupe.
		
		
		enssuite, pr supprimer les peirres entourées. la fonction est séparer. une facon pr supprimer les pierres prises normalement, une autre facon 
		pr  supprimer les pierres dechets.
		*/
		
		for(y=0; y<21; y++)
		{
			
			for(x=0; x<21; x++)
			{
				
				
				if((Couleur[x][y] != 0) && (NoGroupe[x][y]==0)) //on vérifie si la case est bien remplie et qu'il n'y a été encore rien assigné.
				{
					GlobalNoGroupe++;//on augmente la variable pr l'assigner au groupe qui va suivre.
					GroupeAdjacent(GlobalNoGroupe, Couleur[x][y] , x, y); //on lance la fonction qui va detecter les groupes en mettant en abime, et en détectant les libertés.
				}
					
			}
		}
		
		for(i=1; i<= GlobalNoGroupe; i++)
		{
			if (Liberte[i]==0) // atari!
			{	
				for(y=0; y< 21; y++)
				{
				
					for(x=0; x< 21; x++)
					{
						if(NoGroupe[x][y]== i)
						{
							if(times==1) //ici on procède a une elimination de pierres mangées par un atari.
							{
								if((Couleur[x][y] == 1) && joueur==1)
								{
									document.getElementById("idnoire"+x+"_"+y).style.opacity=0;
									pierres_b ++;
									memento[x][y][coup]=1; //se rappeler des pierres disparues dans un meme coup.
									
								}
								
								else if((Couleur[x][y] == 2) &&joueur==2)
								{
									document.getElementById("idblanche"+x+"_"+y).style.opacity=0;
									pierres_n++;
									memento[x][y][coup]=2; //se rappeler des pierres disparues dans un meme coup.
								}
							}
							
							else if(times==2) //le faire après la première prise de pierres, comme ca on peu enelever les pierres de trop, les "dechets" qui restent 
							{
								
								if(Couleur[x][y] == 1)
								{
									return 0; //vérifie si il y a des pierres déchets.
								}
								
								else if(Couleur[x][y] == 2)
								{
									return 0; //vérifie si il y a des pierres dechets.
								}
							}
							
						}
					}
			
				}
			}
		}
		return 1;
	}
	
	
	function GroupeAdjacent(ParamNoGroupe, ParamCouleur,ParamX, ParamY)
    {
		/* Cette fontion detecte les groupe tout en mettant en memoire leur nombre de libertés., sont fonctionnement est expliqué dans la suite.*/
		
		if((Couleur[ParamX][ParamY] == 0)&& (DejaCompte[ParamX][ParamY][ParamNoGroupe] == false)) //si la case est vide et que la liberté n'a pas encore été comptée pour ce groupe.
		{
			
			Liberte[ParamNoGroupe] = Liberte[ParamNoGroupe]+1;//on rajoute une libertée a se groupe.
			DejaCompte[ParamX][ParamY][ParamNoGroupe] = true; //on rend la variable true, donc on considère que le cette libertée a deja été comptée.
		}
		
		
		else if (Couleur[ParamX][ParamY] != ParamCouleur) //autre couleur ou interdi(bords!)--> ne rien faire.!
		{
			//ne rien faire.
		}
		
		else //si la pierre a la meme couleure!
		{
			
			if( NoGroupe[ParamX][ParamY] > 0) //si la pierre a deja été assignée au numéro d'un groupe, on ne fait rien.
			{
				//on ne fait rien
			}
			
			else //si la pierre n'a pas encore été assignée a un numéro d'un des groupes.
			{
				
				NoGroupe[ParamX][ParamY] = ParamNoGroupe; //on assigne a la pierre le numéro du groupe.
				GroupeAdjacent(ParamNoGroupe, ParamCouleur, (ParamX+1), ParamY);//on recommence la fonction avec la pierre a droite	
				GroupeAdjacent(ParamNoGroupe, ParamCouleur, (ParamX-1), ParamY);//on recommence la fonction avec la pierre a gauche	
				GroupeAdjacent(ParamNoGroupe, ParamCouleur, ParamX, (ParamY+1));//on recommence la fonction avec la pierre en bas
				GroupeAdjacent(ParamNoGroupe, ParamCouleur, ParamX, (ParamY-1));//on recommence la fonction avec la pierre en dessus.	
			}
		}

	
    }
