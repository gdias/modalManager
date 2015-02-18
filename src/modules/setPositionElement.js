"use strict";
	
/*
	Set position Element of DOM
	objElem => Object | Object of DOM
	objElem => Object | Object contain position at set
*/

module.exports = function(objElem, objPosition) {
	objElem.style.top = objPosition.top+"px";
	objElem.style.left = objPosition.left+"px";
}