var element = document.getElementById("affichage");
var compteur = parseInt(element.innerHTML);
var multi = parseInt(document.getElementById("multiplicateur").innerHTML);


function clicker() {
        compteur += multi;
        element.innerHTML=compteur;
};

function incrementer() {
	multi ++;
	document.getElementById("multiplicateur").innerHTML=multi;
	
};

