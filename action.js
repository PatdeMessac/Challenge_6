var compteur = parseInt(document.getElementById("affichage").innerHTML);
var multi = parseInt(document.getElementById("multiplicateur").innerHTML);
var prix = parseInt(document.getElementById("cout").innerHTML);
var prix_auto = parseInt(document.getElementById("cout_auto").innerHTML);
var click;

function clicker() {
        compteur += multi;
        document.getElementById("affichage").innerHTML=compteur;
};

function incrementer() {
	if (compteur >= prix) {
		multi ++;
		compteur -= prix;
		prix *= 2;
		document.getElementById("affichage").innerHTML=compteur;
		document.getElementById("multiplicateur").innerHTML=multi;
		document.getElementById("cout").innerHTML=prix;
	}
	else {
		alert("Vous devez avoir un score d'au moins " + prix + " acheter pour le multiplicateur !!!!");
	}
};

function autoclick() {
	if (compteur >= prix_auto) {
		click = setInterval(clicker, 1000);
		compteur -= prix_auto;
		prix_auto *= 2;
		document.getElementById("affichage").innerHTML=compteur;
		document.getElementById("cout_auto").innerHTML=prix_auto;
	}
	else {
		alert("shoo");
	}
};

