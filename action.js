var element = document.getElementById("affichage");
var compteur = parseInt(element.innerHTML);
var multi = parseInt(document.getElementById("multiplicateur").innerHTML);


function clicker() {
        compteur += multi;
        element.innerHTML=compteur;
};

function incrementer() {
	if (compteur >= 50) {
		multi ++;
		compteur -= 50;
		element.innerHTML=compteur;
		document.getElementById("multiplicateur").innerHTML=multi;
	}
	else {
		alert("Vous devez avoir un score d'au moins 50 pour acheter le multiplicateur !!!!");
	}
};

