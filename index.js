class Animal {
    constructor(name, species, age, gender) {
        this.name = name;
        this.species = species;
        this.age = age;
        this.gender = gender;
    }

    describe() {
        console.log(this);
    }
    feed() {
        console.log(`${this.name} is eating`);
    }
    makeSound() {
        console.log(`${this.name} is making a sound`);
    }
    move() {
        console.log(`${this.name} is moving`);
    }

}

class Mammal extends Animal {
    constructor(name, species, age, gender, furColor) {
        super(name, species, age, gender);
        this.furColor = furColor;
    }

    feed() {
        console.log(`${this.name} drinks milk when feeding`);
    }
    move() {
        console.log(`${this.name} walks when moving`);
    }
    makeSound() {
        console.log(`${this.name} growls when making a sound`);
    }
}

class Bird extends Animal {
    constructor(name, species, age, gender, wingspan) {
        super(name, species, age, gender);
        this.wingspan = wingspan;
    }

    feed() {
        console.log(`&{this.name} drinks nectar when feeding`);
    }
    move() {
        console.log(`${this.name} flies when moving`);
    }
    makeSound() {
        console.log(`${this.name} chirps when making a sound`);
    }
}

class Reptile extends Animal {
    constructor(name, species, age, gender, scaleColor) {
        super(name, species, age, gender);
        this.scaleColor = scaleColor;
    }

    feed() {
        console.log(`&{this.name} eats insects when feeding`);
    }
    move() {
        console.log(`${this.name} slithers when moving`);
    }
    makeSound() {
        console.log(`${this.name} hisses when making a sound`);
    }
}

class Zoo {
    constructor(animals) {
        this.animals = [];
        this.fed = false;
        this.listen = false;
        this.watch = false;
        console.log(this);
    }

    addAnimal(animal) {
        this.animals.push(animal);
    }
    displayAnimals() {
        console.log(this.animals);
    }
    feedAnimals() {
        this.fed = true;
        console.log(`${this.animals} are fed`)
    }
    listenToAnimals() {
        this.listen = true;
        console.log(`${this.animals} are being listened to`)
    }
    watchAnimals() {
        this.watch = true;
        console.log(`${this.animals} are being watched`)
    }
}

const myZoo = new Zoo ()
myZoo.addAnimal('tigers');
myZoo.displayAnimals();
myZoo.feedAnimals();
myZoo.listenToAnimals();
myZoo.watchAnimals();


const lion = new Mammal("Simba", "Lion", 5, "male", "golden");
const snake = new Reptile("Kaa", "Snake", 4, "female", "green");

lion.describe();
lion.feed();
lion.move();
lion.makeSound();