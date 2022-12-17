class CompteBancaire:
    def __init__(self,numeroCompte,nom,solde):
        self.numeroCompte=numeroCompte
        self.nom=nom
        self.solde=solde
    def Versement(self,somme):
        self.solde = self.solde + somme
    def Retrait(self,somme):
        if self.solde<somme:
            print("votre solde est insuffisant :( ")
        else:
            self.solde -= somme
    def Agios(self):
        self.solde +=0.05*self.solde 
    def affiche(self):
        print("votre numero :",self.numeroCompte)
        print("votre nom :",self.nom)
        print("votre solde :",self.solde)
p1 = CompteBancaire(129856,"Mohamed",100)
p1.affiche()
p1.Versement(1000)
p1.Retrait(1200)
p1.Agios()
p1.affiche()
