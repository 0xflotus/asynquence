/*! asynquence
    v0.2.0-c (c) Kyle Simpson
    MIT License: http://getify.mit-license.org
*/

(function UMD(dependency,definition){
	if (typeof module !== "undefined" && module.exports) { module.exports = definition(require(dependency)); }
	else if (typeof define === "function" && define.amd) { define([dependency],definition); }
	else { definition(dependency); }
})(this.ASQ || "./asq.src.js",function DEF(ASQ){
	"use strict";

	var ARRAY_SLICE = Array.prototype.slice,
		ø = Object.create(null)
	;

/*PLUGINS*/

	// this is an empty module with no API
	return {};
});
