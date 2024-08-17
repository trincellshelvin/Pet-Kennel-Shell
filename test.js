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
        // Function to feed the pet (conditionally)
        function feed(pet) {
            pet.energy += 20; // Increase energy by 20
            console.log(`${pet.name} has been fed. New energy level: ${pet.energy}`);
        }
        // Iterate through each kennel
        for (let type in kennels) {
            kennels[type].forEach(pet => {
                if (pet.energy < 30) {
                    feed(pet);
                }
            });
        }
        randomPlayAgain(){
            const playCounts = [3, 1, 2]; // Number of times to play with each pet
            for (let i = 0; i < pets.length; i++) {
                for (let j = 0; j < playCounts[i]; j++) {
                    pets[i].play();
                }
                console.log(`After playing, ${pets[i].name}'s status: Happiness is ${pets[i].happiness}, Energy is ${pets[i].energy}.`);
            }
        }
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