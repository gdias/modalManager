"use strict";

/* 
	-- Add Css Class with obj dom passed in parameter -- 
	obj 	  => Object | Object DOM
	className => String | Name of class to add in object passed in parameter
*/

module.exports = function(obj, className) {
    if (obj.className === "")
	    obj.className = className;
    else
        obj.className += " "+className;

}