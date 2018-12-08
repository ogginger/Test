//Test.js: Class constructor for a Test.

define([
	"Setup",
	"Assertion",
	"Debug",
	"log",
	"Action"
], function(
	Setup,
	Assertion,
	Debug,
	log,
	Action
) {
  return function( Input ) {
	return {
		"Name": Input.Name,
		"Run": function() {
			//Setup
			Input.Input = Setup( Input.Input );
			//Action
			Input.Result = Action( Input );
			//Debug
			Debug( Input );
			//Assertion
			return Assertion( Input );
		}
	};
  };
});
