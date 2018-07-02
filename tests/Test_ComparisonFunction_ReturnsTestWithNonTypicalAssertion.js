//Test_ComparisonFunction_ReturnsTestWithNonTypicalAssertion.js: Testing logic.

define([
	"Test"
], function(
	Test
) {
	return {
		"Name":"Test_ComparisonFunction_ReturnsTestWithNonTypicalAssertion",
		"Input": {
			"Name": "SimpleTestWithComparisonFunction",
			"Input": undefined,
			"Function": function( Input ) {
				return "abc";
			},
			"ExpectedOutput": "abc",
			"ComparisonFunction": function( Input ) {
				return Input.Result === Input.ExpectedOutput; 
			}
		},
		"Function": function( Input ) {
			var bTestResult = false;
			var xTest = Test( Input );
			return xTest.Run();
		},
		"ExpectedOutput": true,
		"Comparator": {
			"Debug": false
		}
		
	};
});
