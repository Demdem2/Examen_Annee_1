#include<ctype.h>
#include <stdio.h>
#include <stdlib.h>
#include<string.h>


int main(){
	int jeu = 0;
	printf_s("Quel mode de jeu? \n1.Affronter des amis \n2. Affronter l'ordinateur \n3.Quitter\n");
	scanf_s("%d", &jeu);

	if (jeu==1)
	{
		printf_s("Vous avez choisi Affronter un ami\n");
	}
	else if (jeu == 2) {
		printf_s("Vous avez choisi Affronter un ordinateur\n");
	}
	else if (jeu==3) {
		printf_s("Vous avez choisi Quitter\n");
	}
	else {
		printf_s("choisissez entre 1 et 3\n");
	}
		





}