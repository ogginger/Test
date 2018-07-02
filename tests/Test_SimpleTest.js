//Test_SimpleTest.js: Testing logic.

define([
	"Test"
], function(
	Test
) {
	return {
		"Name":"Test_SimpleTest",
		"Input": {
			"Name": "SimpleTest",
			"Input": undefined,
			"Function": function() {},
			"ExpectedOutput": undefined
		},
		"Function": Test,
		"ExpectedOutput": {
			"Name": "SimpleTest",
			"Run": function() {}
		},
		"Comparator": {
			"Object": true,
			"Debug": false
		}
	};
});
