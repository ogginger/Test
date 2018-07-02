//Test_InputIsSetupFunction_ReturnsTestUsingSetupFunction.js: Testing logic.

define([
	"Test"
], function(
	Test
) {
	return {
		"Name":"Test_InputIsSetupFunction_ReturnsTestUsingSetupFunction",
		"Input": {
			"Name": "SimpleTestUsingSetup",
			"Input": function() {
				return true;
			},
			"Function": function( Input ) {
				var bResult = false;
				if ( 
					typeof Input === "boolean" &&
					Input === true
				) {
					bResult = true;
				}
				
				return bResult;
			},
			"ExpectedOutput": true
		},
		"Function": function( Input ) {
			var xTest = Test( Input );
			return xTest.Run();
		},
		"ExpectedOutput": true,
		"Comparator": {
			"Debug": false
		}
	};
});
