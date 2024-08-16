function createDogKennel(numDogs, nameInput, speciesInput, happinessInput, energyInput) {
    let dogKennel = [];
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
let dogKennel1 = createDogKennel("Pheobe", "Dog", 100, 100);
let dogKennel2 = createDogKennel("Buddy", "Dog", 100, 100);
let dogKennel3 = createDogKennel("Peppermint", "Dog", 100, 100);
let dogKennel4 = createDogKennel("SweetPea", "Dog", 100, 100);
let dogKennel5 = createDogKennel("Kelly", "Dog", 100, 100);
// Dog function calls
console.log(dogKennel1); dogKennel1.forEach(dog => dog.status());
console.log(dogKennel2); dogKennel2.forEach(dog => dog.status());
console.log(dogKennel3); dogKennel3.forEach(dog => dog.status());
console.log(dogKennel4); dogKennel4.forEach(dog => dog.status());
console.log(dogKennel5); dogKennel5.forEach(dog => dog.status());

function createCatKennel(numCats, nameInput, speciesInput, happinessInput, energyInput) {
    let catKennel = [];
    for (let i = 0; i < numCats; i++) {
        let petCat = {
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
        catKennel.push(petCat);
    }
    return catKennel;
}
let catKennel = createCatKennel("Stella", "Chloe", "Daisy", "Izzy", "Mr. Rogers", "Cat", 50, 100);

//cats function call
console.log(catKennel); catKennel.forEach(cat => cat.status());


function createFishTank(numFish, nameInput, speciesInput, happinessInput, energyInput) {
    let fishTank = [];
    for (let i = 0; i < numFish; i++) {
        let petFish = {
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
        fishTank.push(petFish);
    }
    return fishTank;
}
//fish and their tank assignments
let fishTank1 = createFishTank("BoomBoom", "Fish", 50, 100);
let fishTank2 = createFishTank("Grant", "Fish", 50, 100);
let fishTank3 = createFishTank("George", "Fish", 50, 100);
let fishTank4 = createFishTank("Dot", "Fish", 50, 100);
let fishTank5 = createFishTank("Gulper", "Fish", 50, 100);
//fish function calls
console.log(fishTank1); fishTank1.forEach(fish => fish.status());
console.log(fishTank2); fishTank2.forEach(fish => fish.status());
console.log(fishTank3); fishTank3.forEach(fish => fish.status());
console.log(fishTank4); fishTank4.forEach(fish => fish.status());
console.log(fishTank5); fishTank5.forEach(fish => fish.status());