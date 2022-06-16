function efface(){ 				 //permet d'effacer ce qui se trouve dans le formulaire
	for (i=0;i<=10;i++){ 		 // ici il efface les zones de textes
		document.getElementById('clear'+i).value = '';
		
	}
	for (i=0;i<=4;i++){			 //ici il remet les sélécteur par la valeur par défaut
		
		document.getElementById('neutre'+i).value = '0';
	}
	
}

function emailjuste(){ 			 //on verifie si les 2 emails rentrés sont bien les mêmes
	var email1=document.getElementById('clear2').value
	var emailconfirm=document.getElementById('clear7').value
	
	if (email1==emailconfirm){	 //si ce sont les mêmes, on indique à l'utilisateur que c'est juste en mettant en vert
		document.getElementById('clear2').style.color= "green";
		document.getElementById('clear7').style.color= "green";

	}else{						 //sinon on met le 2ème email en rouge pour montrer qu'il est faux
		document.getElementById('clear2').style.color= "black";
		document.getElementById('clear7').style.color= "red";
	}
}


function verification(){

	if (document.getElementById('clear0').value==''){
		alert("Vous n'avez pas compléter la section Nom")
	}
	if (document.getElementById('clear1').value==''){
		alert("Vous n'avez pas compléter la section Prénom")
	}

	if (document.getElementById('clear2').value==''){
		alert("Vous n'avez pas compléter la section email")
	}

	if (document.getElementById('clear7').value==''){
		alert("Vous n'avez pas compléter la section confirmation de l'email")
	}

	if (document.getElementById('clear3').value==''){
		alert("Vous n'avez pas compléter la section Date de naissance")
	}

	if (document.getElementById('clear4').value==''){
		alert("Vous n'avez pas compléter la section Adresse postale")
	}

	if (document.getElementById('clear5').value==''){
		alert("Vous n'avez pas compléter la section Téléphone")
	}

	if (document.getElementById('neutre0').value=='0'){
		alert("Vous n'avez pas compléter la section catégorie de jeux préférés")
	}

	if (document.getElementById('neutre1').value=='0'){
		alert("Vous n'avez pas compléter la section Jeu préféré")
	}


	if (document.getElementById('clear6').value==''){
		alert("Vous n'avez pas compléter la section Votre Avis")
	}

	if (document.getElementById('neutre3').value=='0'){
		alert("Vous n'avez pas compléter la section Votre note")
	}

}