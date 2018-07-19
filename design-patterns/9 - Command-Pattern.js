// To demonstrate the Command pattern we're going to create a simple car purchasing service
(function(){
 
 //
    var carManager = {
  
      // request information
      requestInfo: function( model, id ){
        return "The information for " + model + " with ID " + id + " is foobar";
      },
  
      // purchase the car
      buyVehicle: function( model, id ){
        return "You have successfully purchased Item " + id + ", a " + model;
      },
  
      // arrange a viewing
      arrangeViewing: function( model, id ){
        return "You have successfully booked a viewing of " + model + " ( " + id + " ) ";
      }
  
    };
  
  })();


/* 
Taking a look at the above code, it would be trivial to invoke our carManager methods by directly accessing the object. We would all be forgiven for thinking there is nothing wrong with this - technically, it's completely valid JavaScript. There are however scenarios where this may be disadvantageous.
For example, imagine if the core API behind the carManager changed. This would require all objects directly accessing these methods within our application to also be modified. This could be viewed as a layer of coupling which effectively goes against the OOP methodology of loosely coupling objects as much as possible. Instead, we could solve this problem by abstracting the API away further.
Let's now expand on our carManager so that our application of the Command pattern results in the following: accept any named methods that can be performed on the carManager object, passing along any data that might be used such as the Car model and ID.
*/


//  carManager.run( "buyVehicle", "Ford Escort", "453543" );  ideal call setup 

/*
 * Working example modified from book
*/
(function(){

  return carManager = {
    
    //command pattern implementation
    run:function ( name ) {
      return carManager[name] && carManager[name].apply( carManager, [].slice.call(arguments, 1) );
    },
    // request information
    requestInfo: function( model, id ){
      return "The information for " + model + " with ID " + id + " is foobar";
    },
    // purchase the car
    buyVehicle: function( model, id ){
      return "You have successfully purchased Item " + id + ", a " + model;
    },
    // arrange a viewing
    arrangeViewing: function( model, id ){
      return "You have successfully booked a viewing of " + model + " ( " + id + " ) ";
    },
 

  };
 
})();

// l means log, it console logs the return value
l(carManager.run("arrangeViewing", "Ferrari", "14523" ))
l(carManager.run( "requestInfo", "Ford Mondeo", "54323" ))
l(carManager.run( "requestInfo", "Ford Escort", "34232" ))
l(carManager.run( "buyVehicle", "Ford Escort", "34232" ))