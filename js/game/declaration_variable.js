
//variable de creation des images.
var strS=""; //chaine de caractère.
   
//variable pr l'utilisation du random
var z= 0; // la position en x
var s= 0; //la position en y
   

//tableaude mémoire à 3 dimension, dimension 1=x dimesion2=y dimension 3= coup!   (3dimensions: 21*21*coups actuel)
//dans le tableau, 1=noir 2= blanc.

var memento= new Array(); //première création du tableau.
for( i=0; i<21; i++) //dasn chacune des table créées on crée un nouveau  tableau, on a donc un tableau a deux dimensions. on en fait 21
{
	memento[i] = new Array(); //dasn chacune des table créées on crée un nouveau  tableau, on a donc un tableau a deux dimensions. on en fait 21
		
	for( j=0; j<21; j++) //dans chacune de ses 21*21 cases on crée un autre tableau, qui contiendra le numéro du coup.
	{
		memento[i][j] = new Array();//dans chacune de ses 21*21 cases on crée un autre tableau, qui contiendra le numéro du coup.
		
	}
}
   
var coup = 0; //variable qui contien le coup actuel
var coup_max_mem = 0;//variable qui contien le nombre de coups totals de la partie.

// var de la detection de groupes! qui ne doivent pas etre appelés a chaque coup.

// on cree le tableau dimension1, contenant les lignes
var Couleur= new Array();
// on cree les lignes  dimension 2les unes après les autres (2 dimension 21*21)
for( i=0; i<21; i++)
{
	Couleur[i] = new Array();
}



var NoGroupe= new Array(); //tableau de valeur representant le no de groupe de la case. (2 dimension, 21*21)
for(var i=0; i<21; i++)
{
	NoGroupe[i] = new Array();
}



var Liberte= new Array();//tableau de valeur representant le nb de libertée d groupe.


var DejaCompte=new Array(); //tableau de valeur disant si la liberté a deja été comptée pour ce groupe. (3 dimension 21*21*numero du groupe)
for(var i=0; i<21; i++)
{
	DejaCompte[i] = new Array();
	for(var j=0; j<21; j++)
	{
		DejaCompte[i][j] = new Array();
	}
}




var GlobalNoGroupe= 0;//contien la valeur globale du numero du groupe. elle contien la valeur du groupe avant qu'il ne lui soi assigné. c'est cette variable qui s'inccrémente surant la calcul des groupes.



//pierres prises
pierres_n = 0;//pierre blanches prises par blanc 
pierres_b = 0;//pierres blanches prises par noire


//jouer n1 ou n2 1=noir 2=blanc
var joueur= 1; //on commence avec noir.


