/*
  * Basic Constructors
  * 
  * Prefixing a call to a constructor function with the keyword "new", instructs JavaScript to behave like a constructor and instantiate a new object with the members defined by that function 
  * Inside a constructor, the keyword this references the new object that's being created
*/

function Car( model, year, miles ) {
 
  this.model = model;
  this.year = year;
  this.miles = miles;
 
  // This isn't very optimal as the function should ideally be shared between all of the instances of the Car type.
  this.toString = function () {
    return this.model + " has done " + this.miles + " miles";
  };
}
 
// Usage:
 
// We can create new instances of the car
var civic = new Car( "Honda Civic", 2009, 20000 );
var mondeo = new Car( "Ford Mondeo", 2010, 5000 );
 
// and then open our browser console to view the
// output of the toString() method being called on
// these objects
console.log( civic.toString() );
console.log( mondeo.toString() );


/*
  * Constructors With Prototypes 
  * Calling a JavaScript constructor to create an object, all the properties of the constructor's prototype are available to the new object.
  * 
*/

function Car( model, year, miles ) {
 
  this.model = model;
  this.year = year;
  this.miles = miles;
 
}


// Note here that we are using Object.prototype.newMethod rather than
// Object.prototype so as to avoid redefining the prototype object
Car.prototype.toString = function () {
  return this.model + " has done " + this.miles + " miles";
};
 //Above, a single instance of toString() will now be shared between all of the Car objects.

// Usage:
 
var civic = new Car( "Honda Civic", 2009, 20000 );
var mondeo = new Car( "Ford Mondeo", 2010, 5000 );
 
console.log( civic.toString() );
console.log( mondeo.toString() );