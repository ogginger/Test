//test_Test.js: Testing Logic.

define([
  "TestSuite",
  "log",
  "Test",
  "tests/Test_SimpleTest",
  "tests/Test_ComparisonFunction_ReturnsTestWithNonTypicalAssertion",
  "tests/Test_InputIsSetupFunction_ReturnsTestUsingSetupFunction"
], function(
  TestSuite,
  log,
  Test,
  test_SimpleTest,
  Test_ComparisonFunction_ReturnsTestWithNonTypicalAssertion,
  Test_InputIsSetupFunction_ReturnsTestUsingSetupFunction
) {
  return TestSuite.extend({
    "initialize": function() {
      log("test_Test initialized successfully!");
      var xTestSuite = this;
      xTestSuite.set( "MethodUnderTest", "Test" );
            

	xTestSuite.add( test_SimpleTest );
	xTestSuite.add( Test_ComparisonFunction_ReturnsTestWithNonTypicalAssertion );
	xTestSuite.add( Test_InputIsSetupFunction_ReturnsTestUsingSetupFunction );

      xTestSuite.test();
    }
  });
});
