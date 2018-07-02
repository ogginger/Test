//build.js: Configuration file for optimizing the ifSetup function. 
/*
	Dependencies: 
		1. Underscore.

		2. Setup.
		3. Assertion.
*/ 
({
    paths: {
	"underscore": "lib/underscore.min",
	"Setup": "lib/setup.min",
	"Assertion": "lib/assertion.min"
    },
    exclude: [ "underscore" ],
    name: "Test",
    out: "test.min.js"
})
