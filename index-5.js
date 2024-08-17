console.log("test")
let dogKennel = [];
function createDogKennel() {
    for (let i = 0; i < kennel.length; i++) {
        //increase happiness by 10. decrease energy by 15.
        //results should be Happiness= 60 and Energy=85
        updatedPlay() {
            this.energy -= 15; // Decrease energy by 15
            this.happiness += Math.floor(Math.random() * 20) + 10; // Increase happiness by 10 to 29
            console.log(`You played with ${this.name}! Happiness is now ${this.happiness}, and energy is now ${this.energy}.`);
        }

        dogKennel.push(petDog);
    }
    return dogKennel;
}
let dogKennel1 = createDogKennel(1, "Pheobe", "Dog", 100, 100);
let dogKennel2 = createDogKennel(1, "Buddy", "Dog", 100, 100);
let dogKennel3 = createDogKennel(1, "Peppermint", "Dog", 100, 100);
let dogKennel4 = createDogKennel(1, "SweetPea", "Dog", 100, 100);
let dogKennel5 = createDogKennel(1, "Kelly", "Dog", 100, 100);
//dog function calls

//cat function
let catKennel = [];
function createCatKennel() {
    for (let i = 0; i < kennel.length; i++) {
        //increase happiness by 10. decrease energy by 15.
        //results should be Happiness= 60 and Energy=85
        updatedPlay() {
            this.energy -= 15; // Decrease energy by 15
            this.happiness += Math.floor(Math.random() * 20) + 10; // Increase happiness by 10 to 29
            console.log(`You played with ${this.name}! Happiness is now ${this.happiness}, and energy is now ${this.energy}.`);
        }

        catKennel.push(petCat);
    }
    return catKennel;
}
let catKennel1 = createCatKennel(1, "Stella", "Cat", 50, 100);
let catKennel2 = createCatKennel(1, "Chloe", "Cat", 50, 100);
let catKennel3 = createCatKennel(1, "Daisy", "Cat", 50, 100);
let catKennel4 = createCatKennel(1, "Izzy", "Cat", 50, 100);
let catKennel5 = createCatKennel(1, "Mr. Rogers", "Cat", 50, 100);
//cat function calls

//fish function
let fishTank = [];
function createFishTank() {
    for (let i = 0; i < tank.length; i++) {
        //increase happiness by 10. decrease energy by 15.
        //results should be Happiness= 60 and Energy=85
        updatedPlay() {
            this.energy -= 15; // Decrease energy by 15
            this.happiness += Math.floor(Math.random() * 20) + 10; // Increase happiness by 10 to 29
            console.log(`You played with ${this.name}! Happiness is now ${this.happiness}, and energy is now ${this.energy}.`);
        }



        fishTank.push(petFish);
    }
    return fishTank;
}
