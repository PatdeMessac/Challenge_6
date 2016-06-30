var compteur = parseInt(document.getElementById("affichage").innerHTML);
var multi = parseInt(document.getElementById("multiplicateur").innerHTML);
var prix = parseInt(document.getElementById("cout").innerHTML);
var prix_auto = parseInt(document.getElementById("cout_auto").innerHTML);
var click;

//fonction clicker basique : ajoute 1 au score quand on clique sur le cookie
function clicker() {
        compteur += multi;
        document.getElementById("affichage").innerHTML=compteur;
};

//fonction qui incremente le compteur, baisse le score
function incrementer() {

	//si on a un score assez élévé
	if (compteur >= prix) {
		multi ++;
		compteur -= prix;
		prix *= 2;
		//affiche les changements
		document.getElementById("affichage").innerHTML=compteur;
		document.getElementById("multiplicateur").innerHTML=multi;
		document.getElementById("cout").innerHTML=prix;
	}
	else {
		alert("Vous devez avoir un score d'au moins " + prix + " acheter pour le multiplicateur !!!!");
	}
};


//fonction qui appelle la fonction clicker en fonction d'un timer
function autoclick() {
	//si on a un score assez élévé
	if (compteur >= prix_auto) {
		click = setInterval(clicker, 1000);
		compteur -= prix_auto;
		prix_auto *= 2;
		//affiche les changements
		document.getElementById("affichage").innerHTML=compteur;
		document.getElementById("cout_auto").innerHTML=prix_auto;
	}
	else {
		alert("shoo");
	}
};

