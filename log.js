global.LOG_INFO  = 0;
global.LOG_DEBUG  = 1;
global.LOG_WARNING  = 2;
global.LOG_ERROR  = 3;

var ansi = require('node-ansi');
var output = console.log;
var useColor = true;

/* do it */
global.log = function(str,lvl) {
	var color = "";
	if(useColor) {
		switch(lvl) {
		case LOG_DEBUG:
			color = ansi.fg.darkgray;
			break;
		case LOG_WARNING:
			color = ansi.fg.lightmagenta;
			break;
		case LOG_ERROR:
			color = ansi.fg.lightred;
			break;
		case LOG_INFO:
		default:
			color = ansi.normal;
			break;
		}
	}
	output(color+str);
};

/* static class shit */
module.exports.__defineSetter__("output",function(opt) {
	if(typeof opt == "function") 
		output = opt;
	else
		throw "invalid output stream";
});
module.exports.__defineGetter__("output",function() {
	return output;
});
module.exports.__defineSetter__("useColor",function(bool) {
	if(typeof bool == "boolean") 
		useColor = bool;
	else
		throw "invalid color toggle";
});
module.exports.__defineGetter__("useColor",function() {
	return useColor;
});

/* export! */
module.exports = global.log;
