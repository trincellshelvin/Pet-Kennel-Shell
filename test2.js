function createPet(nameInput, speciesInput, happinessInput, energyInput){
    let pet = {
        name: nameInput,
        species: speciesInput,
        happiness: happinessInput,
        energy: energyInput,
        
        status() {
            console.log(`Pet name: ${this.name} Species: ${this.species} Happiness: ${this.happiness} Energy: ${this.energy}.`);
        },
        play() {
            this.energy -= 15;
            this.happiness += 10;
            console.log(`You played with ${this.name}! Happiness is now ${this.happiness}, and energy is now ${this.energy}.`);
        },
        feed() {
            this.energy += 20;
            this.happiness += 20;
            console.log(`You fed ${this.name}! Happiness is now ${this.happiness} and energy is now ${this.energy}.`);
        },
        rest() {
            this.energy = 100;
            console.log(`${this.name} has rested. Energy is now fully restored to 100.`);
        }
    }
    return pet;
};

let pet1 = createPet("Pheobe", "Dog", 10, 100);
let pet2 = createPet("Buddy", "Dog", 50, 100);
let pet3 = createPet("Peppermint", "Dog", 100, 100);
let pet4 = createPet("SweetPea", "Dog", 20, 100);
let pet5 = createPet("Kelly", "Dog", 100, 100);
console.log(pet1)
pets = []
pets.push(createPet("Pheobe", "Dog", 10, 100));
pets.push(createPet("Buddy", "Dog", 50, 100));
pets.push(createPet("Peppermint", "Dog", 100, 100));
pets.push(createPet("SweetPea", "Dog", 20, 100));
pets.push(createPet("Kelly", "Dog", 100, 100));
console.table(pets);
for (let i = 0; i < pets.length; i ++){
    //access pet in array
    let pet = pets[i]  
    console.log(i); 
    console.log(pet.name);
}