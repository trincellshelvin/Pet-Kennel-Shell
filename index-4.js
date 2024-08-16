console.log("test");
let dogKennel = [];
function createDogKennel(numDogs, nameInput, speciesInput, happinessInput, energyInput) {
    for (let i = 0; i < numDogs; i++) {
        let petDog = {
            name: nameInput + i,
            species: speciesInput,
            happiness: happinessInput,
            energy: energyInput,

            status() {
                console.log(`Pet name: ${this.name} Species: ${this.species} Happiness: ${this.happiness} Energy: ${this.energy}.`);
            },
            play() {
                this.energy -= Math.floor(Math.random() * 30) + 10; // Random energy decrease between 10 and 40
                this.happiness += Math.floor(Math.random() * 20) + 5; // Random happiness increase between 5 and 25
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
            },
            randomEvent() {
                this.energy += Math.floor(Math.random() * 20) - 10; // Random energy change between -10 and +10
                this.happiness += Math.floor(Math.random() * 20) - 10; // Random happiness change between -10 and +10
                console.log(`Random event for ${this.name}! Happiness is now ${this.happiness}, and energy is now ${this.energy}.`);
            }
        };
        dogKennel.push(petDog);
    }
    return dogKennel;
}
let dogKennel1 = createDogKennel(1,"Pheobe", "Dog", 100, 100);
let dogKennel2 = createDogKennel(1, "Buddy", "Dog", 100, 100);
let dogKennel3 = createDogKennel(1, "Peppermint", "Dog", 100, 100);
let dogKennel4 = createDogKennel(1, "SweetPea", "Dog", 100, 100);
let dogKennel5 = createDogKennel(1, "Kelly", "Dog", 100, 100);
// Dog function calls
console.log(dogKennel1); dogKennel1[0].play(); 
 dogKennel1.forEach(dog => dog.status());
console.log(dogKennel2); dogKennel2.forEach(dog => dog.status());
console.log(dogKennel3); dogKennel3.forEach(dog => dog.status());
console.log(dogKennel4); dogKennel4.forEach(dog => dog.status());
console.log(dogKennel5); dogKennel5.forEach(dog => dog.status());



