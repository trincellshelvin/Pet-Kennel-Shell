const pet = {
    name: 'Phoebe Cinnamon Sunrise',
    species: 'dog',
    breed: 'miniature pitbull terrier',
    happiness: 50,
    playWithPhoebe: function () {
        console.log(`You played with ${this.name}! Happiness is now ${this.happiness + 10}!`);
        this.happiness += 10;
    },
    feedPhoebe: function () {
        console.log(`You fed ${this.name}! Happiness is now ${this.happiness + 20}!`);
        this.happiness += 20;
    },
    status: function () {
        console.log(`Phoebe status...name: ${this.name}, species: ${this.species}, happiness: ${this.happiness}`);
    },
    rename: function (newName) {
        this.name = newName;
        console.log(`The pet's new name is ${this.name}`);
    }
};

pet.status();
console.log(pet.playWithPhoebe());
pet.status();
console.log(pet.feedPhoebe());
pet.status();
pet.rename('Peppermint');
pet.status();

