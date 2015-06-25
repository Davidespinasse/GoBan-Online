 function tellerror(msg, url, linenumber)
 {
	//=======================================
	// Indique le type d'erreur, le fichier ou a eu lieu l'erreur et la ligne de l'erreur.

	alert('Error message= ' + msg + '\nURL= ' + url + '\nLine Number= ' + linenumber);
	return true;
 }
 
window.onerror=tellerror; //affiche l'erreur la ligne et le fichier dans la quelle , l'erreur se trouve.