// Constructor function
function Animal(){};
Animal.prototype = {
    constructor: Animal,
    numberLeg : 2,
    eat: function (){
        console.log(this.numberLeg);
        console.log("I'm happy");
    }
};

function Bird(){};
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird; //This reset the lost consructor to the new constructor
Bird.prototype.drink = function(){
    console.log("I'm drinking")
}

// Mixin
function getMixin(obj){
    obj.prototype.fly = function() {
        console.log("I.m flying");
    }
};
// Passing object to Mixin
getMixin(Bird);

let parrot = new Bird();
parrot.fly();

if (Bird.prototype.isPrototypeOf(parrot)){
    console.log('true and i\'m glad')
}

if (parrot instanceof Bird){
    console.log("I'm an instancs of Bird");
}
parrot.eat();
parrot.drink();
console.log(parrot.constructor);

//Mixin

// function getMixin(obj){
    // obj.fly = function() {
        // console.log("I.m flying");
    // }
// };
// getMixin(Bird);
// parrot.fly();

