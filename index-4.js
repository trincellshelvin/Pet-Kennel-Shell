function createDogKennel(nameInput, speciesInput, happinessInput, energyInput){
    let petDog = {
        name: nameInput,
        species: speciesInput,
        happiness: happinessInput,
        energy: energyInput,
        
        status() {
            console.log(`Pet name: ${this.name} Species: ${this.species} Happiness: ${this.happiness} Energy: ${this.energy}.`);
        },
        play() {
            this.energy -= 20;
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
    return petDog;
};

function createLizardTank(nameInput, speciesInput, happinessInput, energyInput){
    let petLizard = {
        name: nameInput,
        species: speciesInput,
        happiness: happinessInput,
        energy: energyInput,
        
        status() {
            console.log(`Pet name: ${this.name} Species: ${this.species} Happiness: ${this.happiness} Energy: ${this.energy}.`);
        },
        play() {
            this.energy -= 20;
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
    return petLizard;
};

function createPigPen(nameInput, speciesInput, happinessInput, energyInput){
    let petPig = {
        name: nameInput,
        species: speciesInput,
        happiness: happinessInput,
        energy: energyInput,
        
        status() {
            console.log(`Pet name: ${this.name} Species: ${this.species} Happiness: ${this.happiness} Energy: ${this.energy}.`);
        },
        play() {
            this.energy -= 20;
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
    return petPig;
};


function createCatKennel(nameInput, speciesInput, happinessInput, energyInput){
    let petCat = {
        name: nameInput,
        species: speciesInput,
        happiness: happinessInput,
        energy: energyInput,
        
        status() {
            console.log(`Pet name: ${this.name} Species: ${this.species} Happiness: ${this.happiness} Energy: ${this.energy}.`);
        },
        play() {
            this.energy -= 20;
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
    return petCat;
};


function createFishTank(nameInput, speciesInput, happinessInput, energyInput){
    let petFish = {
        name: nameInput,
        species: speciesInput,
        happiness: happinessInput,
        energy: energyInput,
        
        status() {
            console.log(`Pet name: ${this.name} Species: ${this.species} Happiness: ${this.happiness} Energy: ${this.energy}.`);
        },
        play() {
            this.energy -= 20;
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
    return petFish;
};
let petDog = createDogKennel("Pheobe", "Dog", 100, 100);
let petDog2 = creatDogKennel("Buddy", "Dog", 100, 100);
let petDog3 = createDogKennel("Peppermint", "Dog", 100, 100);
let petLizard = createLizardTank("Johnny", "Lizard", 70, 100);
let petLizard2 = createLizardTank("Izzy", "Lizard", 70, 100);
let petLizard3= createLizardTank("Breezy", "Lizard", 70, 100);
let petPig = createPigPen("Bella", "Pig", 100, 100);
let petPig2 = createPigPen("Igor", "Pig", 100, 100 );
let petPig3 = createPigPen("Titan", "Pig", 100, 100);
let petCat = createCatKennel("Stella", "Cat", 50, 100);
let petCat2 = createCatKennel("Chole", "Cat", 50, 100);
let petCat3 = createCatKennel("Daisy", "Cat", 50, 100);
let petFish = createFish("BoomBoom", "Fish", 50, 100);
let petFish2 = createFish("Grant", "Fish", 50, 100);
let petFish3 = createFish("George", "Fish", 50, 100);
let kennelDog = [];
let tankLizard = [];
let tankFish = [];
let penPig = [];
let kennelCat = [];

kennel.push(petDog);
kennel.push(petLizard);
kennel[kennel.length] = petPig
console.log(kennelDog);
console.log(tankLizard);
console.log(kennelPig);
kennel.forEach(petDog => petDog.rest());
tank.forEach(petLizard => petLizard.rest());
pen.forEach(petPig => petPig.rest());

console.log(kennel);
console.log(kennel);
console.log(kennel);
kennel[0].play()