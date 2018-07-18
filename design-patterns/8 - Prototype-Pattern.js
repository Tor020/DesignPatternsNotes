/*
  * Real ECMAScript 5 standard prototypal inheritance requires the use of Object.create 
  * Object.create creates an object which has a specified prototype 
  * it optionally contains specified properties as well 
  * (e.g Object.create( prototype, optionalDescriptorObjects )).
*/
// We can see this demonstrated in the example below

var myCar = {
 
  name: "Ford Escort",
 
  drive: function () {
    console.log( "Weeee. I'm driving!" );
  },
 
  panic: function () {
    console.log( "Wait. How do you stop this thing?" );
  }
 
};
 
// Use Object.create to instantiate a new car
var yourCar = Object.create( myCar );
 
// Now we can see that one is a prototype of the other
console.log( yourCar.name );


/*
  * Object.create also allows us to easily implement advanced concepts such as differential inheritance where objects are able to directly inherit from other objects.
  * We saw earlier that Object.create allows us to initialise object properties using the second supplied argument. 

  For example: 
*/
var vehicle = {
  getModel: function () {
    console.log( "The model of this vehicle is.." + this.model );
  }
};
 
var car = Object.create(vehicle, {
 
  "id": {
    value: MY_GLOBAL.nextId(),
    // writable:false, configurable:false by default
    enumerable: true
  },
 
  "model": {
    value: "Ford",
    enumerable: true
  }
 
});


// Here the properties can be initialized on the second argument of Object.create using an object literal with a syntax that is similar to methods previously discussed, and used by the Object.defineProperties and Object.defineProperty.

// It is worth noting that prototypal relationships can cause trouble when enumerating properties of objects
// It's a good idea to wrap the contents of the loop in a hasOwnProperty() check.


  // If we wish to implement the prototype pattern without directly using Object.create, we can simulate the pattern as per the above example as follows:

var vehiclePrototype = {
 
  init: function ( carModel ) {
    this.model = carModel;
  },
 
  getModel: function () {
    console.log( "The model of this vehicle is.." + this.model);
  }
};
 
 
function vehicle( model ) {
 
  function F() {};
  F.prototype = vehiclePrototype;
 
  var f = new F();
 
  f.init( model );
  return f;
 
}
 
var car = vehicle( "Ford Escort" );
car.getModel();

// Note: This alternative does not allow the user to define read-only properties in the same manner (as the vehiclePrototype may be altered if not careful).

// A final alternative implementation of the Prototype pattern could be the following:

var beget = (function () {
 
    function F() {}
 
    return function ( proto ) {
        F.prototype = proto;
        return new F();
    };
})();