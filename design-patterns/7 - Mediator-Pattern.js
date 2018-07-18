/*
  * A Simple Mediator 
*/

// A Mediator is an object that coordinates interactions (logic and behavior) between multiple objects. It makes decisions on when to call which objects, based on the actions (or inaction) of other objects and input.

var orgChart = {
 
  addNewEmployee: function(){
 
    // getEmployeeDetail provides a view that users interact with
    var employeeDetail = this.getEmployeeDetail();
 
    // when the employee detail is complete, the mediator (the 'orgchart' object)
    // decides what should happen next
    employeeDetail.on("complete", function(employee){
 
      // set up additional objects that have additional events, which are used
      // by the mediator to do additional things
      var managerSelector = this.selectManager(employee);
      managerSelector.on("save", function(employee){
        employee.save();
      });
 
    });
  },
 
  // ...
}


//  Not a "workflow" object, it is an object that handles the workflow between many other objects, aggregating the responsibility of that workflow knowledge into a single object. The result is workflow that is easier to understand and maintain.

/*
  * Similarities And Differences 
*/


// There are similarities between the event aggregator and mediator examples that I’ve shown here. They boil down to two primary items: events and third-party objects.

/*
  * Events
*/

  // - Similarities : They both use events

  // - Differences : The event aggregator, as a pattern, is designed to deal with events. The mediator, though, only uses them because it’s convenient.

/*
  * Third Party Objects 
*/

  // - Similarities : Both use third-party objects to cause things

  // - Differences : The answer largely comes down to where the application logic and workflow is coded.