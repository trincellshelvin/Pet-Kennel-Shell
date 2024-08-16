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
//dogs and their kennel assignments
let petDog1 = createDogKennel("Pheobe", "Dog", 100, 100); let dogKennel1 = createDogKennel("Pheobe", "Dog", 100, 100);
let petDog2 = createDogKennel("Buddy", "Dog", 100, 100); let dogKennel2 = createDogKennel("Buddy", "Dog", 100, 100);
let petDog3 = createDogKennel("Peppermint", "Dog", 100, 100); let dogKennel3 = createDogKennel("Peppermint", "Dog", 100, 100);
let petDog4 = createDogKennel("SweetPea", "Dog", 100, 100); let dogKennel4 = createDogKennel("SweetPea", "Dog", 100, 100);
let petDog5 = createDogKennel("Kelly", "Dog", 100, 100);let dogKennel5 = createDogKennel("Kelly", "Dog", 100, 100);
//cats and their kennel assignments
let petCat1 = createCatKennel("Stella", "Cat", 50, 100); let catKennel1 = createCatKennel("Stella", "Cat", 50, 100);
let petCat2 = createCatKennel("Chole", "Cat", 50, 100); let catKennel2 = createCatKennel("Chole", "Cat", 50, 100);
let petCat3 = createCatKennel("Daisy", "Cat", 50, 100); let catKennel3 = createCatKennel("Daisy", "Cat", 50, 100);
let petCat4  = createCatKennel("Izzy", "Cat", 50, 100); let catKennel4 = createCatKennel("Izzy", "Cat", 50, 100);
let petCat5  = createCatKennel("Mr.Rogers", "Cat", 50, 100); let catKennel5 = createCatKennel("Mr.Rogers", "Cat", 50, 100);
//fish and their tank assignments
let petFish1 = createFishTank("BoomBoom", "Fish", 50, 100); let fishTank1 = createFishTank("BoomBoom", "Fish", 50, 100);
let petFish2 = createFishTank("Grant", "Fish", 50, 100); let fishTank2 = createFishTank("Grant", "Fish", 50, 100);
let petFish3 = createFishTank("George", "Fish", 50, 100); let fishTank3 = createFishTank("George", "Fish", 50, 100);
let petFish4  = createFishTank("Dot", "Fish", 50, 100); let fishTank4 = createFishTank("Dot", "Fish", 50, 100);
let petFish5  = createFishTank("Gulper", "Fish", 50, 100); let fishTank5 = createFishTank("Gulper", "Fish", 50, 100);

// dogs function calls
dogKennel1.push(petDog1); console.log(dogKennel1); dogKennel1.forEach(dog => dog.status());
dogKennel2.push(petDog2); console.log(dogKennel2); dogKennel2.forEach(dog => dog.status());
dogKennel3.push(petDog3); console.log(dogKennel3); dogKennel3.forEach(dog => dog.status());
dogKennel4.push(petDog4); console.log(dogKennel4); dogKennel4.forEach(dog => dog.status());
dogKennel5.push(petDog5); console.log(dogKennel5); dogKennel5.forEach(dog => dog.status());
//cats function calls
catKennel1.push(petCat1); console.log(catKennel1); catKennel1.forEach(cat => cat.status());
catKennel2.push(petCat2); console.log(catKennel2); catKennel2.forEach(cat => cat.status()); 
catKennel3.push(petCat3); console.log(catKennel3); catKennel3.forEach(cat => cat.status());
catKennel4.push(petCat4); console.log(catKennel4); catKennel4.forEach(cat => cat.status());
catKennel5.push(petCat5); console.log(catKennel5); catKennel5.forEach(cat => cat.status());
//fish function calls
fishTank1.push(petFish1); console.log(fishTank1); fishTank1.forEach(fish => fish.status());
fishTank2.push(petFish2); console.log(fishTank2); fishTank2.forEach(fish => fish.status()); 
fishTank3.push(petFish3); console.log(fishTank3); fishTank3.forEach(fish => fish.status());
fishTank4.push(petFish4); console.log(fishTank4); fishTank4.forEach(fish => fish.status());
fishTank5.push(petFish5); console.log(fishTank5); fishTank5.forEach(fish => fish.status());