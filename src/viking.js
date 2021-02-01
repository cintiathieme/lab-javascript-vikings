// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super (health, strength);
        this.name = name;
    }
    
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    }

    battleCry() {
        return 'Odin Owns You All!';
    }
}

// Saxon
class Saxon extends Soldier {
    
    receiveDamage (damage){
        this.health -= damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        } 
            return `A Saxon has died in combat`;
    }
}

// War
class War {
    constructor () {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(Viking) {
        this.vikingArmy.push(Viking);
    }

    addSaxon (Saxon) {
        this.saxonArmy.push(Saxon); 
    }

    vikingAttack () {
        let randomViking = Math.floor(Math.random()*this.vikingArmy.length);
        let randomSaxon = Math.floor(Math.random()*this.saxonArmy.length);

        let viking = this.vikingArmy[randomViking];
        let saxon = this.saxonArmy[randomSaxon];

        let saxonDamage = saxon.receiveDamage(viking.strength);

        if (saxon.health <= 0) {
            this.saxonArmy.splice(randomSaxon,1)
        }
        return saxonDamage
    }

    saxonAttack () {
        let randomViking = Math.floor(Math.random()*this.vikingArmy.length);
        let randomSaxon = Math.floor(Math.random()*this.saxonArmy.length);

        let viking = this.vikingArmy[randomViking];
        let saxon = this.saxonArmy[randomSaxon];

        let vikingDamage = viking.receiveDamage(saxon.strength);

        if (viking.health <= 0) {
            this.vikingArmy.splice(randomViking,1)
        }
       return vikingDamage 
    }

    showStatus () {
        if (this.saxonArmy.length === 0) {
            return 'Vikings have won the war of the century!';
        }
        if (this.vikingArmy.length === 0) {
            return 'Saxons have fought for their lives and survived another day...';
        }
        return 'Vikings and Saxons are still in the thick of battle.'
        
    }
}
  

