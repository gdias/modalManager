"use strict";
/*
	-- Return object by cssClass --
	classCSS : String | Selector 
*/

module.exports = function(classCSS) {
	return document.querySelector(classCSS);
}