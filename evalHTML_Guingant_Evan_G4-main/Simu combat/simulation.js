class Guerrier{
    constructor(Name,PV,ATK,Précision) {

    
    this.Name = Name
    this.PV = PV
    this.ATK = ATK
    this.Précision = Précision 
    }
        

        getName() {
        console.log(this.Name);
         }



        

        getPV() {
        console.log(this.PV);
        }


        

        getATK() {
        console.log(this.ATK);
        }

        getPrécision() {
            return Math.random() < this.Précision
        }

        ATK(fighter) {
            fighter.PV = fighter.PV - this.ATK
        }
}



let fighter1 = new Guerrier('Gérard', 60, 6, 0.8)
console.log(fighter1)
let fighter2 = new Guerrier('stephane', 80, 4, 0.7)
console.log(fighter2)

function fight(fighter1, fighter2) {
    console.log("Le combat commence !")
    while (fighter1.life >0 ||  fighter2.life >0);   {

    fighter1.ATK(fighter2); 
    if (fighter2.PV <= 0) {
        console.log("Mordicus est vaincu ! Gérard à gagné le combat !");
        return

    }     
}   
}
    



function fight(fighter1, fighter2) {
    console.log("Le combat commence !")
    while (fighter1.life >0 ||  fighter2.life >0);   {

    fighter2.ATK(fighter1); 
    if (fighter1.PV <= 0) {
        console.log("Gérard est vaincu ! Mordicus à gagné le combat !");
        return
    }
}   
}


console.log(`${fighter1.Name} a ${fighter1.pointsDeVie} points de vie.`);
console.log(`${fighter2.Name} a ${fighter2.pointsDeVie} points de vie.`);

fight(fighter1, fighter2);