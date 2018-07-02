//Test.js: Class constructor for a Test.

define([
	"Setup",
	"Assertion"
], function(
	Setup,
	Assertion
) {
  return function( Input ) {
	return {
		"Name": Input.Name,
		"Run": function() {
			//Setup
			Input.Input = Setup( Input.Input );
			//Action
			Input.Result = Input.Function( Input.Input );
			//Assertion
			return Assertion( Input );
		}
	};
  };
});
