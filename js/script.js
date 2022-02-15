// document.audioElement.play("audio/ff5.mp3");

// Profil type
class Personnage {
	_nom;
	_sante;
	_force;

	constructor(nouveauNom) {
		this._nom = nouveauNom;
		this._sante = 100;
		this._force = 10;
		this._evasion = 10;
	}
	getNom() {
		return this._nom;
	}
	setNom(valeur) {
		this._nom = valeur;
	}
	getSante() {
		return this._sante;
	}
	getForce() {
		return this._force;
	}


	subirDegat(valeur) {
		this._sante -= valeur;
		if (this._sante < 0) {
			this._sante = 0;
			alert(adversaire+" est mort.");
		} //mort
	}
	getRandomIntInclusive(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min +1)) + min;
	}
	attack(adversaire) {
		adversaire.subirDegat(this._force);
		//adversaire.subirDegat(getRandomIntInclusive(1, this.getForce()));
	}
	defend() {

	}
	escape() {

	}
}


// Class de personnages
class Guerrier extends Personnage {

	constructor(nouveauNom) {
		super(nouveauNom);
		this._sante = 150;
		this._force = 20;
	}
	infligerDegat(adversaire) {
		adversaire.subirDegat(this._force);
	}
}
class Magicien extends Personnage {
	_magie;

	constructor(nouveauNom) {
		super(nouveauNom);
		this._sante = 70;
		this._magie = 30;
	}
	infligerDegat(adversaire) {
		adversaire.subirDegat(this._magie);
	}
}
class Artiste_Martial extends Personnage {

	constructor(nouveauNom) {
		super(nouveauNom);
		this._sante = 200;
		this._force = 15;
	}
	infligerDegat(adversaire) {
		adversaire.subirDegat(this._force);
	}
}
class ennemi extends Personnage {

	constructor(nouveauNom) {
		super(nouveauNom);
		this._sante = 300;
		this._force = 30;
	}
	infligerDegat(adversaire) {
		adversaire.subirDegat(this._force);
	}
}




function attack() {
	joueur1.attack(adversaire1);
	alert(joueur1.getNom()+" inflige "+joueur1.getForce()+" degats a "+adversaire1.getNom()+". "+adversaire1.getNom()+" n'a plus que "+adversaire1.getSante()+" points de vie.");
	adversaire1.attack(joueur1);
	alert(adversaire1.getNom()+" inflige "+adversaire1.getForce()+" degats a "+joueur1.getNom()+". "+joueur1.getNom()+" n'a plus que "+joueur1.getSante()+" points de vie.");
}

function defend() {

}

function escape() {
	
}

joueur1 = new Guerrier('Butz');
joueur2 = new Magicien('Lenna');
joueur3 = new Artiste_Martial('Galuf');
joueur4 = new Magicien('Faris');
adversaire1 = new ennemi('Rokh');