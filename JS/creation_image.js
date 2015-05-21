  
 
  
  function CreationImages_demarreJeu() 
 {
		//=========================
	// Adjonction de code HTML pour ins?rer TOUTES les images!!
	numerox= 0;
	numeroy= 0;
	 
		strS = strS +'<IMG SRC="images/goban.png"  BORDER=3 WIDTH='+T_goban+' HEIGHT='+T_goban+' name="fond" id="idfond" STYLE="position:absolute;  z-index:-100; visibility:visible;">';
		strS = strS +'<IMG SRC="images/first.png"  BORDER=0 WIDTH=25px HEIGHT=25px name="premier" id="idfirst" STYLE="position:absolute; top:240px; left:240px; z-index:-300; visibility:visible;">';
		strS = strS +'<IMG SRC="images/forbidden.png"  BORDER=0 WIDTH=25px HEIGHT=25px name="forbidden" id="idforbidden" STYLE="position:absolute; top:240px; left:240px; z-index:-300; visibility:visible;">';
		
		
		var y= -23.5;
		
		for(ns=0; ns<21; ns++)
		{
		
		
			var x= -23.5;
			
			numerox = 0;
			
			for(nn=0; nn<21; nn++)
			{
			
			
				
				strS = strS +'<IMG SRC="images/Apple-logo.png"   BORDER=0 WIDTH='+T_pierre+' HEIGHT='+T_pierre+'  id="idblanche'+numerox+'_'+numeroy+'" STYLE="position:absolute; left:'+x+'px; top:'+y+'px; z-index:0; visibility:visible; opacity:0; ">';
				strS = strS +'<IMG SRC="images/Windows-logo.png"  onMouseOver="select('+numerox+','+numeroy+')"; onMouseOut="deselect('+numerox+','+numeroy+')"; onClick="clic('+numerox+','+numeroy+')"; BORDER=0 WIDTH='+T_pierre+' HEIGHT='+T_pierre+'  id="idnoire'+numerox+'_'+numeroy+'" STYLE="position:absolute; left:'+x+'px; top:'+y+'px; z-index:0; visibility:visible; opacity:0; ">';
				x= x+ (26.3);
				numerox++;
			}
			
			numeroy++;
			y= y+   (26.3);
		}

	// Adjonction du code HTML
	document.getElementById("goban").innerHTML = strS;

} // CreationImages
