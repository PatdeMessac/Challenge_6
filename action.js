var element = document.getElementById("affichage");
var compteur = parseInt(element.innerHTML);
var multi = parseInt(document.getElementById("multiplicateur").innerHTML);
var prix = parseInt(document.getElementById("cout").innerHTML);
var click;

function clicker() {
        compteur += multi;
        element.innerHTML=compteur;
};

function incrementer() {
	if (compteur >= prix) {
		multi ++;
		compteur -= prix;
		prix *= 2;
		element.innerHTML=compteur;
		document.getElementById("multiplicateur").innerHTML=multi;
		document.getElementById("cout").innerHTML=prix;
	}
	else {
		alert("Vous devez avoir un score d'au moins " + prix + " acheter pour le multiplicateur !!!!");
	}
};

function autoclick() {
	click = setInterval(clicker, 1000);
};

