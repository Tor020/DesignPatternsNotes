/*

  * Testable Facade from the end of the section
  * Module combined with facade interface
  
*/

var module = (function() {
 
    var _private = {
        i: 5,
        get: function() {
            console.log( "current value:" + this.i);
        },
        set: function( val ) {
            this.i = val;
        },
        run: function() {
            console.log( "run'ning" );
        },
        jump: function(){
            console.log( "jumping" );
        }
    };
 
    return {
 
        facade: function( args ) {
            _private.set(args.val);
            _private.get();
            if ( args.run ) {
                _private.run();
            }
        }
    };
}());
 
 
// Outputs: "current value: 10" and "running"
module.facade( {run: true, val: 10} );


// Let’s take a look at the pattern in action. This is an unoptimized code example, but here we're utilizing a Facade to simplify an interface for listening to events cross-browser. We do this by creating a common method that can be used in one’s code which does the task of checking for the existence of features so that it can provide a safe and cross-browser compatible solution.

var addMyEvent = function( el,ev,fn ){
 
   if( el.addEventListener ){
            el.addEventListener( ev,fn, false );
      }else if(el.attachEvent){
            el.attachEvent( "on" + ev, fn );
      } else{
           el["on" + ev] = fn;
    }
 
};


// In a similar manner, we're all familiar with jQuery's $(document).ready(..). Internally, this is actually being powered by a method called bindReady(), which is doing this:

bindReady: function() {
    if ( document.addEventListener ) {
      // Use the handy event callback
      document.addEventListener( "DOMContentLoaded", DOMContentLoaded, false );
 
      // A fallback to window.onload, that will always work
      window.addEventListener( "load", jQuery.ready, false );
 
    // If IE event model is used
    } else if ( document.attachEvent ) {
 
      document.attachEvent( "onreadystatechange", DOMContentLoaded );
 
      // A fallback to window.onload, that will always work
      window.attachEvent( "onload", jQuery.ready );
    }
}


// Facades don't just have to be used on their own, however. They can also be integrated with other patterns such as the Module pattern. As we can see below, our instance of the module patterns contains a number of methods which have been privately defined. A Facade is then used to supply a much simpler API to accessing these methods: