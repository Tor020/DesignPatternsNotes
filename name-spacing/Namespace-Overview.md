
<!-- INCOMPLETE NOTES, just look at the section pls -->


<!-- https://addyosmani.com/resources/essentialjsdesignpatterns/book/#detailnamespacing -->


# Single global variables

```js
var myApplication = (function () {
  function() {
    //...
  },
  return {
    //...
  }
})();

```

# Prefix namespacing

```js

var myApplication_propertyA = {};
var myApplication_propertyB = {};
function myApplication_myMethod() {
  //...
}

```

# Object literal notation

  **Several Different options** just look at this section to see some specifics

```js

```

# Nested namespacing

```js

```

# Immediately-invoked Function Expressions

```js

```

# Namespace injection

```js

```
____

# Advanced namespacing patterns


```js

// An example of such a namespace could be the following: application.utilities.drawing.canvas.2d. This can also be expanded using the object literal pattern to be:

var application = {
  utilities: {
    drawing: {
      canvas: {
        2d:{
          //...
        }
      }
    }
  }
};

```
This can become particularly laborious when multiple depths are required as our application increases in complexity.

How can this problem be better solved? In JavaScript Patterns, Stoyan Stefanov presents a very-clever approach for automatically defining nested namespaces under an existing global variable. He suggests a convenience method that takes a single string argument for a nest, parses this and automatically populates our base namespace with the objects required.

The method he suggests using is the following, which I've updated it to be a generic function for easier re-use with multiple namespaces:


```js

// top-level namespace being assigned an object literal
var myApp = myApp || {};
 
// a convenience function for parsing string namespaces and
// automatically generating nested namespaces
function extend( ns, ns_string ) {
  var parts = ns_string.split("."),
      parent = ns,
      pl;
 
  pl = parts.length;
 
  for ( var i = 0; i < pl; i++ ) {
    // create a property if it doesn't exist
    if ( typeof parent[parts[i]] === "undefined" ) {
      parent[parts[i]] = {};
    }
 
    parent = parent[parts[i]];
  }
 
  return parent;
}
 
// Usage:
// extend myApp with a deeply nested namespace
var mod = extend(myApp, "modules.module2");
 
// the correct object with nested depths is output
console.log(mod);
 
// minor test to check the instance of mod can also
// be used outside of the myApp namesapce as a clone
// that includes the extensions
 
// Outputs: true
console.log(mod == myApp.modules.module2);
 
// further demonstration of easier nested namespace
// assignment using extend
extend(myApp, "moduleA.moduleB.moduleC.moduleD");
extend(myApp, "longer.version.looks.like.this");
console.log(myApp);

```