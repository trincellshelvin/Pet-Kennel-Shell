const pet = {
    name: 'Pheobe Cinnamon Sunrise',
    species: 'Dog',
    breed: 'Miniture Pitbull Terrier',
    happiness: 50,

    playwithPheobe: function () {
        console.log(`You played with ${this.name}! Happiness is now ${happiness + this.happiness}!`);
        this.happiness += 10;
    },

    feedPheobe: function(){

    },

    status: function () {
console.log(`Phoebe Status...Name: ${ths.name}, Species: ${this.species}, Happiness: ${this.happiness}`);
    }

}



console.log(pet.name);
console.log(pet.species);
console.log(pet.breed);
console.log(pet.happiness);