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


# The Module Pattern - Creational / Structural
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


# The Revealing Module Pattern - Creational / Structural

**Advantages**

- This pattern allows the syntax of our scripts to be more consistent. It also makes it more clear at the end of the module which of our functions and variables may be accessed publicly which eases readability.

**Disadvantages**

-  A disadvantage of this pattern is that if a private function refers to a public function, that public function can't be overridden if a patch is necessary. This is because the private function will continue to refer to the private implementation and the pattern doesn't apply to public members, only to functions.

- Public object members which refer to private variables are also subject to the no-patch rule notes above.

- As a result of this, modules created with the Revealing Module pattern may be more fragile than those created with the original Module pattern, so care should be taken during usage.

# The Singleton Pattern - Creational
      
- Whilst the Singleton has valid uses, often when we find ourselves needing it in JavaScript it's a sign that we may need to re-evaluate our design.

- They're often an indication that modules in a system are either tightly coupled or that logic is overly spread across multiple parts of a codebase. Singletons can be more difficult to test due to issues ranging from hidden dependencies, the difficulty in creating multiple instances, difficulty in stubbing dependencies and so on.
      
- The Singleton pattern is named that way because it restricts instantiation of a class to a single object. 
      
- Singletons differ from static classes (or objects) as we can delay their initialization, generally because they require some information that may not be available during initialization time. They don't provide a way for code that is unaware of a previous reference to them to easily retrieve them. This is because it is neither the object or "class" that's returned by a Singleton, it's a structure. Think of how closured variables aren't actually closures - the function scope that provides the closure is the closure.
      
# The Observer Pattern - Behavioral

- The Observer is a design pattern where an object (known as a subject) maintains a list of objects depending on it (observers), automatically notifying them of any changes to state.

- `"One or more observers are interested in the state of a subject and register their interest with the subject by attaching themselves. When something changes in our subject that the observer may be interested in, a notify message is sent which calls the update method in each observer. When the observer is no longer interested in the subject's state, they can simply detach themselves."`
      
  - **Advantages**

  - The Observer and Publish/Subscribe patterns encourage us to think hard about the relationships between different parts of our application. 
  
    > These patterns remain one of the best tools for designing decoupled systems

  - This effectively could be used to break down an application into smaller, more loosely coupled blocks to improve code management and potentials for re-use.


  - Observer pattern useful when we need to maintain consistency between related objects without making classes tightly coupled
  
    > For example, when an object needs to be able to notify other objects without making assumptions regarding those objects.

  - **Disadvantages**

  - Publish/Subscribe, by decoupling publishers from subscribers, it can sometimes become difficult to obtain guarantees that particular parts of our applications are functioning as we may expect.

  - Another draw-back of the pattern is that subscribers are quite ignorant to the existence of each other and are blind to the cost of switching publishers. Due to the dynamic relationship between subscribers and publishers, the update dependency can be difficult to track.

  - Can be hard to debugger 
    > For example, publishers may make an assumption that one or more subscribers are listening to them. Say that we're using such an assumption to log or output errors regarding some application process. If the subscriber performing the logging crashes (or for some reason fails to function), the publisher won't have a way of seeing this due to the decoupled nature of the system.

  ### Observer Pattern - Publish/Subscribe Implementations

  - Refer to [This](https://github.com/addyosmani/pubsubz) Repo for pubsubz basic implementation example. to find this section in the book, click [this](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#mediatorpatternjavascript) link and scroll up

  - Publish/Subscribe fits in very well in JavaScript ecosystems mostly because ECMAScript implementations are event driven. This is particularly true in browser environments as the DOM uses events as its main interaction API for scripting.

  > That said, neither ECMAScript nor DOM provide core objects or methods for creating custom events systems in implementation code (with the exception of perhaps the DOM3 CustomEvent, which is bound to the DOM and is thus not generically useful).
  
  > Un fucking surprisingly, there's libraries for that, such as dojo, jQuery (custom events) and YUI already have utilities that can assist in easily implementing a Publish/Subscribe system with very little effort. Below we can see some examples of this:

  > For those wishing to use the Publish/Subscribe pattern with another library or vanilla,
  - **BULLSHIT NEEDS JQUERY** AmplifyJS includes a clean, library-agnostic implementation that can be used with any library or toolkit. 
  - Radio.js (http://radio.uxder.com/),
  - PubSubJS (https://github.com/mroderick/PubSubJS) or Pure JS PubSub by Peter Higgins 
    - (https://github.com/phiggins42/bloody-jquery-plugins/blob/55e41df9bf08f42378bb08b93efcb28555b61aeb/pubsub.js) are also similar alternatives worth checking out.
      
# The Mediator Pattern - Behavioral
  - In general, the mediator pattern just provides an alternative to tightly coupled systems

  - Behavioral design pattern that allows us to expose a unified interface through which the different parts of a system may communicate.

  - Promotes loose coupling by ensuring that instead of components referring to each other explicitly, their interaction is handled through this central point.

    >A centralized controller is key to the success of this system and that's really the role a Mediator plays in software design.

  - A Mediator is an object that coordinates interactions (logic and behavior) between multiple objects. It makes decisions on when to call which objects, based on the actions (or inaction) of other objects and input.

- **Advantages**

    - Reduces the communication channels needed from many to one between objects and/or components in a system

    - Relatively easy to add new publishers & subscribers due to decoupling

- **Disadvantages**

    - Can create a single point of failure

    - Impacts performance by creating indirect communication

  ###  Mediator vs Facade
  - Seem similar because :
  
    `They both abstract the functionality of existing modules`
 
  - The Mediator pattern centralizes communication it's an actual controller that can change how objects interact with eachother by understanding what is needed based on the information it is given

  - The Facade pattern just makes a simpler interface to interact with a module or system without adding new functionality

# The Prototype Pattern - Creational

-  The Prototype Pattern is based on prototypal inheritance where we create objects which act as prototypes for other objects. Basically, the prototype object itself is effectively used as a blueprint for each object the constructor creates.

    - `prototypal inheritance avoids using classes altogether. There isn't a "definition" object nor a core object in theory. We're simply creating copies of existing functional objects.`

-  Not only is the pattern an easy way to implement inheritance, but it can also come with a performance boost as well: when defining a function in an object, they're all created by reference (so all child objects point to the same function) instead of creating their own individual copies.

# The Command Pattern - Behavioral

  The general idea behind the Command pattern is that it provides us a means to separate the responsibilities of issuing commands from anything executing commands, delegating this responsibility to different objects instead.

- They consistently include an execution operation ```(such as run() or execute())```

- Command objects with the same interface can easily be swapped as needed and this is considered one of the larger benefits of the pattern.

# The Facade Pattern - Structural

  The Facade pattern both simplifies the interface of a class and it also decouples the class from the code that utilizes it. This gives us the ability to indirectly interact with subsystems in a way that can sometimes be less prone to error than accessing the subsystem directly. 

  - This pattern provides a convenient higher-level interface to a larger body of code, hiding its true underlying complexity. Think of it as simplifying the API being presented to other developers, something which almost always improves usability.

    - This allows us to interact with the Facade directly rather than the subsystem behind the scenes. 

- **Disadvantages**

  - Performance cost can be significant since there is always an additional cost in utilizing an abstraction since it is unnecessary by design.

# The Factory Pattern - Creational

Where the factory pattern differs from other creational patterns is in that it doesn't explicitly require us to use a constructor. A Factory can provide a generic interface for creating objects, where we can specify the type of factory object we wish to be created.

  - **When To Use**

    - When our object or component setup involves a high level of complexity
    - When we need to easily generate different instances of objects depending on the environment we are in
    - When we're working with many small objects or components that share the same properties
    - When composing objects with instances of other objects that need only satisfy an API contract (aka, duck typing) to work. This is useful for decoupling.
  
  - **Possible Problems**

    - When applied to the wrong type of problem, this pattern can introduce an unnecessarily great deal of complexity to an application. Unless providing an interface for object creation is a design goal for the library or framework we are writing, I would suggest sticking to explicit constructors to avoid the unnecessary overhead.

    - Due to the fact that the process of object creation is effectively abstracted behind an interface, this can also introduce problems with unit testing depending on just how complex this process might be.

### The Factory Pattern - Abstract Factories
  
Aims to encapsulate a group of individual factories with a common goal. It separates the details of implementation of a set of objects from their general usage. An Abstract Factory should be used where a system must be independent from the way the objects it creates are generated or it needs to work with multiple types of objects.

# The Mixin Pattern - Structural

  - Mixins in Javascript means collecting functionality through extension of predefined object methods.

    - Each new object we define has a prototype from which it can inherit further properties. Prototypes can inherit from other object prototypes but, even more importantly, can define properties for any number of object instances. We can leverage this fact to promote function re-use.

    - Mixins allow objects to borrow (or inherit) functionality from them with a minimal amount of complexity. As the pattern works well with JavaScripts object prototypes, it gives us a fairly flexible way to share functionality from not just one Mixin, but effectively many through multiple inheritance.

  - **Criticisms**

    - That said, the downsides to Mixins are a little more debatable. Some developers feel that injecting functionality into an object prototype is a bad idea as it leads to both prototype pollution and a level of uncertainty regarding the origin of our functions.
      
      - **This is the argument against extending classes as well.** 

      - True in large systems but good documentation helps mitigate this    

# The Decorator Pattern - Structural

  Decorators are a structural design pattern that aim to promote code re-use. Similar to Mixins, they can be considered another viable alternative to object sub-classing.

# The Flyweight pattern - Structural

  There are two ways to use

  - The first is at the data-layer, where we deal with the concept of sharing data between large quantities of similar objects stored in memory.

  - The second is at the DOM-layer where the Flyweight can be used as a central event-manager to avoid attaching event handlers to every child element in a parent container we wish to have some similar behavior.
