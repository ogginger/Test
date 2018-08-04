//Test.js: Class constructor for a Test.

define([
	"Setup",
	"Assertion",
	"Debug"
], function(
	Setup,
	Assertion,
	Debug
) {
  return function( Input ) {
	return {
		"Name": Input.Name,
		"Run": function() {
			//Setup
			Input.Input = Setup( Input.Input );
			//Action
			Input.Result = Input.Function( Input.Input );
			//Debug
			Debug( Input );
			//Assertion
			return Assertion( Input );
		}
	};
  };
});
