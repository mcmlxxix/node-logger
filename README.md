node-logger
=========

ANSI colorized logging utility for node.js

---

Loads a global function which takes two arguments:

	str - the string to be displayed
	lvl - the log level
	
Log levels:
	
	LOG_INFO		normal white
	LOG_DEBUG		dark gray
	LOG_WARNING		magenta
	LOG_ERROR		red
	
require('node-logger') also returns an instance of the log function, and exposes two properties:

	useColor		true/false
	output			the output method (default: console.log)
	
