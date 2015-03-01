"use strict";

/* 
	-- Add Css Class with obj dom passed in parameter -- 
	obj 	  => Object | Object DOM
	className => String | Name of class to add in object passed in parameter
*/

module.exports = function(obj, cssName) {
	var regExp = new RegExp (cssName,"\ig");
	obj.className = obj.className.replace(regExp, "");
}