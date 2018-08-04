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
	"Assertion": "lib/assertion.min",
	"Debug": "lib/debug.min",
	"log": "lib/log.min"
    },
    exclude: [ "underscore", "log" ],
    name: "Test",
    out: "test.min.js"
})
