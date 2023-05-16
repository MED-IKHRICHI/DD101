// ex 1
/*var Person = function (nom, age) {
    this.nom = nom
    this.age = age

    this.Decrire = function() {
        return this.nom+', '+this.age+' ans'
    }
}


var persone = new Person('Ali', 19)
console.log(persone.Decrire())

// ex 2
var Personne = function () { };
Personne.prototype.initialize = function (nom, age) {
    this.nom = nom;
    this.age = age;
}
var Formateur = function () {
    this.former = function (sujet) {
        console.log(this.nom + " enseigne " + sujet);
    }
}
Formateur.prototype = new Personne();
var obj = new Formateur();
obj.initialize('ahmed', 20)
obj.former("JavaScript"); 

// ex 3

var livre = function (titre, genre, auteur, lu, dateLecture) {
    this.titre = titre || 'sans titre'
    this.genre = genre || "Fiction";
    this.auteur = auteur || "Sans auteur";
    this.lu = lu || false;
    this.dateLecture = new Date(dateLecture);
}

var ListeLivres = function (livres){
    if(!typeof livres == 'array'){
        livres = false
    }

    this.tousLivres = livres || []

    if (this.tousLivres.length > 0) {
        console.log(this.tousLivres)
    }

    this.livresLus = function(){
        var length = 0
        this.tousLivres.forEach(livre => {
            console.log(livre.lu)
            length += (livre.lu) ? +1 : 0
        });
        console.log('Nombre de livres marqués comme lus: ' + length)
    }

    this.livresNonLus = () => {
        var length = 0
        this.tousLivres.forEach(livre => {
            console.log(livre.lu)
            length += (!livre.lu) ? +1 : 0
        });
        console.log('Nombre de livres marqués comme lus: ' + length)
    }

    this.livreNext = () => {
        var livreNextObj = null
        this.tousLivres.forEach(livre => {
            if(livre.dateLecture > new Date()) {
                livreNextObj = livre
            }
        });
        return livreNextObj
    }
    this.LivreEnCour = () => {
        var LivreEnCourObj = null
        const newDate = new Date()
        this.tousLivres.forEach(livre => {
            if (livre.dateLecture.getDate() == newDate.getDate() && livre.dateLecture.getMonth() == newDate.getMonth() && livre.dateLecture.getFullYear() == newDate.getFullYear() && !livre.lu) {
                LivreEnCourObj = livre
            }
        });
        return LivreEnCourObj
    }

    this.LivrePrev = () => {
        var LivrePrevObj = null
        const newDate = new Date()
        this.tousLivres.forEach(livre => {
            if (livre.dateLecture.getDate() == newDate.getDate() - 1) {
                LivrePrevObj = livre
            }
        });
        return LivrePrevObj
    }

    this.allLivres = () => {
        console.log('Un tableau de tous les livres', this.tousLivres)
    }

    this.ajouterLivre = (livre) => {
        this.tousLivres.push(livre)
    }

    this.terminerLivreEnCours = () => {
        const index =  this.tousLivres.indexOf(this.LivreEnCour())
        if(index == -1) {
            return "Il faut se mettre à la lecture"
        } else {
            this.tousLivres[index].lu = !this.tousLivres[index].lu
            return this.tousLivres
        }
    }
}

var obj = new livre(null, null, null, true, '2023/03/24');
var obj2 = new livre(null, null, null, null, '2023/06/25');
var obj3 = new livre(null, null, null, null, '2023/03/25');



console.log('list')
var list = new ListeLivres([obj, obj2, obj3])

console.log(list.livresLus())
console.log(list.livresNonLus())
console.log(list.livreNext())
console.log(list.LivreEnCour())
console.log(list.LivrePrev())
console.log(list.allLivres())
console.log(list.ajouterLivre(new livre(null, null, null, null, '2023/03/26')))
console.log(list.allLivres())
console.log(list.terminerLivreEnCours())
console.log(list.livresLus())


*/

// reponse

var Calcul = function(n1, n2){
    this.n1 = n1
    this.n2 = n2

    this.add = () => {
        return this.n1+this.n2
    }
    
    this.multiplie = () => {
        return this.n1*this.n2
    }
}

const calcul = new Calcul(5,4)

console.log('add: ' + calcul.add())
console.log('multiplie:' + calcul.multiplie())


const Calculator = function (num1, num2) {
    this.num1 = num1;
    this.num2 = num2;

    this.add = () => {
        console.log(this.num1 + this.num2);
    };

    this.multiply = () => {
        console.log(this.num1 * this.num2);
    };
};

const calc = new Calculator(2, 3);

calc.add();
calc.multiply();