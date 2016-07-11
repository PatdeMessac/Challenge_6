var counter = 0;
var multi = 1;
var price = 5;
var price_auto = 20;

//fonction clicker basique : ajoute 1 + le multiplicateur au score quand on clique sur le cookie
function clicker() {
        counter += multi;
        document.getElementById("affichage").innerHTML=counter;
};

//fonction qui incremente le compteur, baisse le score
function incrementer() {

	//si on a un score assez élévé
	if (counter >= price) {
		multi ++;
		counter -= price;
		price *= 2;
		//affiche les changements
		document.getElementById("affichage").innerHTML=counter;
		document.getElementById("multiplicateur").innerHTML=multi;
		document.getElementById("cout").innerHTML=price;
	}
	else {
		alert("Vous devez avoir un score d'au moins " + price + " acheter pour le multiplicateur !!!!");
	}
};


//fonction qui appelle la fonction clicker en fonction d'un timer
function autoclick() {
	var click;	
	//si on a un score assez élévé
	if (counter >= price_auto) {
		click = setInterval(clicker, 1000);
		counter -= prix_auto;
		price_auto *= 2;
		//affiche les changements
		document.getElementById("affichage").innerHTML=counter;
		document.getElementById("cout_auto").innerHTML=price_auto;
	}
	else {
		alert("shoo");
	}
};

