"use strict";
/* This module create a new DIV element with CSS class passed in parameter. */

module.exports = function(classCSS) {  
	var div = document.createElement('div');
	div.className = classCSS;
	return div;
}