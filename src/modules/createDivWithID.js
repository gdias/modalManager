"use strict";
/* This module create a new DIV element with ID passed in parameter. */

module.exports = function(id_param) {  
	var div = document.createElement('div');
	div.id = id_param;
	return div;
}