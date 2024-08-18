function createPet(nameInput, speciesInput, happinessInput) {
    let pet = {
        name: nameInput,
        species: speciesInput,
        happiness: happinessInput,
        energy: Math.floor(Math.random() * 51), // random energy between 0 and 50
        
        status() {
            console.log(`Pet name: ${this.name} Species: ${this.species} Happiness: ${this.happiness} Energy: ${this.energy}.`);
        },
        play() {
            this.energy -= 15;
            this.happiness += 10;
            console.log(`You played with ${this.name}! Happiness is now ${this.happiness}, and energy is now ${this.energy}.`);
        },
        feed() {
            if (this.energy < 30) {
                this.energy += 20;
                this.happiness += 20;
                console.log(`You fed ${this.name}! Happiness is now ${this.happiness} and energy is now ${this.energy}.`);
            } else {
                console.log(`${this.name} is not hungry. Energy is still ${this.energy}.`);
            }
        },
        rest() {
            this.energy = 100;
            console.log(`${this.name} has rested. Energy is now fully restored to 100.`);
        }
    }
    return pet;
}
let pet1 = createPet("Pheobe", "Dog", 10, 100);
let pet2 = createPet("Buddy", "Dog", 50, 100);
let pet3 = createPet("Peppermint", "Dog", 100, 100);
let pet4 = createPet("SweetPea", "Dog", 20, 100);
let pet5 = createPet("Kelly", "Dog", 100, 100);
console.log(pet1)

let pets = [];
pets.push(createPet("Pheobe", "Dog", 10));
pets.push(createPet("Buddy", "Dog", 50));
pets.push(createPet("Peppermint", "Dog", 100));
pets.push(createPet("SweetPea", "Dog", 20));
pets.push(createPet("Kelly", "Dog", 100));

console.log(pets);

for (let i = 0; i < pets.length; i++) {
    let pet = pets[i];
    console.log(i);
    console.log(pet.name);
}

pet1.play(); pet1.play(); pet1.play(); pet2.play(); pet2.play(); pet1.status(); pet3.play(); pet2.status();
pet1.feed(); pet1.feed(); pet1.feed(); pet1.feed(); pet1.feed(); pet2.feed(); pet1.status(); pet2.feed();
pet2.feed(); pet2.status(); pet3.feed(); pet3.feed(); pet3.status(); pet3.feed(); pet3.feed(); pet3.status();
pet4.play(); pet1.rest();pet2.rest(); pet3.rest(); pet4.feed(); pet4.feed(); pet4.status(); pet5.play();
pet5.play(); pet4.rest(); pet4.status(); pet5.feed(); pet5.feed(); pet5.feed(); pet5.feed(); pet5.status();
pet5.rest(); pet5.status();

