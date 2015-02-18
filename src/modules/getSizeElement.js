"use strict";

/*
	getSize() : Return width and height of Object passed in parameter
	objElem => Object | Object of DOM
*/

module.exports = function(objElem) {

	var widthElem, heightElem, objSize;

		widthElem = objElem.offsetWidth;
		heightElem = objElem.offsetHeight;

		objSize = {
			width: widthElem, 
			height: heightElem
		}
		
	return objSize;
}