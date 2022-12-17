class Person:
    def __init__(self, nom, cin):
        self.nom = nom
        self.cin= cin
    
    def Afficher(self):
        print('Nom: ', self.nom)
        print('CIN: ', self.cin)

class Etudiant(Person):
    def __init__(self, nom, cin, note1, note2):
        super().__init__(nom, cin)
        self.note1 = note1
        self.note2= note2

    def Afficher(self):
        super().Afficher()
        print('note1: ', self.note1)
        print('note2: ', self.note2)
    
    def Moyenne(self):
        return (self.note1 + self.note2) / 2

    def result(self):
        print('Moyenne: ', self.Moyenne())
        if(self.Moyenne()>= 10):
            print('Admis')
        else:
            print('No admis')
            

etudiant = Etudiant('Said', 'JE0123', 3, 16)
etudiant.Afficher()
etudiant.result()


