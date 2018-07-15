<!-- https://addyosmani.com/resources/essentialjsdesignpatterns/book/#designpatternsjavascript -->
# Behavioral

| Name                    | Usage                                                                                                                                         |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| **Interpreter**         | A way to include language elements in an application to match the grammar of the intended language                                            |
| **Template Method**     | Creates the shell of an algorithm in a method, then defer the exact steps to a subclass.                                                      |
| Chain of Responsibility | A way of passing a request between a chain of objects to find the object that can handle the request.                                         |
| Command                 | Encapsulate a command request as an object to enable, logging and/or queuing of requests, and provides error-handling for unhandled requests. |
| Iterator                | Sequentially access the elements of a collection without knowing the inner workings of the collection.                                        |
| Mediator                | Defines simplified communication between classes to prevent a group of classes from referring explicitly to each other.                       |
| Memento                 | Capture an object's internal state to be able to restore it later.                                                                            |
| Observer                | A way of notifying change to a number of classes to ensure consistency between the classes.                                                   |
| State                   | Alter an object's behavior when its state changes.                                                                                            |
| Strategy                | Encapsulates an algorithm inside a class separating the selection from the implementation.                                                    |
| Visitor                 | Adds a new operation to a class without changing the class.                                                                                   |


# Creational

| Name               | Usage                                                                                          |
| ------------------ | ---------------------------------------------------------------------------------------------- |
| **Factory Method** | This makes an instance of several derived classes based on interfaced data or events.          |
| Abstract Factory   | Creates an instance of several families of classes without detailing concrete classes.         |
| Builder            | Separates object construction from its representation, always creates the same type of object. |
| Prototype          | A fully initialized instance used for copying or cloning.                                      |
| Singleton          | A class with only a single instance with global access points.                                 |
|                    |                                                                                                |
      

# Structural 

| Name        | Usage                                                                                                         |
| ----------- | ------------------------------------------------------------------------------------------------------------- |
| **Adapter** | Match interfaces of different classes therefore classes can work together despite incompatible interfaces.    |
| Bridge      | Separates an object's interface from its implementation so the two can vary independently.                    |
| Composite   | A structure of simple and composite objects which makes the total object more than just the sum of its parts. |
| Decorator   | Dynamically add alternate processing to objects.                                                              |
| Facade      | A single class that hides the complexity of an entire subsystem.                                              |
| Flyweight   | A fine-grained instance used for efficient sharing of information that is contained elsewhere.                |
| Proxy       | A place holder object representing the true object.                                                           |


# The Module Pattern
<!-- Does let eliminate the need for module pattern? -->

Modules are an integral piece of any robust application's architecture and typically help in keeping the units of code for a project both cleanly separated and organized.

- Partially based on Object Literals
- Utilizes an immediately-invoked function expression
- **Privacy** 
  - Emulate the concept of classes in such a way that we're able to include both public/private methods and variables inside a single object, thus shielding particular parts from the global scope.
  - With this pattern, only a public API is returned, keeping everything else within the closure private.
  - Variables can't technically be declared as being public nor private and so we use function scope to simulate this concept. Within the Module pattern, variables or methods declared are only available inside the module itself thanks to closure. Variables or methods defined within the returning object however are available to everyone.
- **Advantages**
        	
- The freedom to have private functions and private members which can only be consumed by our module. As they aren't exposed to the rest of the page (only our exported API is), they're considered truly private.

- Given that functions are declared normally and are named, it can be easier to show call stacks in a debugger when we're attempting to discover what function(s) threw an exception.

- As T.J Crowder has pointed out in the past, it also enables us to return different functions depending on the environment. In the past, I've seen developers use this to perform UA testing in order to provide a code-path in their module specific to IE, but we can easily opt for feature detection these days to achieve a similar goal.




      
      
      
      
      
      
      
      
      