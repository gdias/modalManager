"use strict";

/* 
	-- Calcul center of page --
	objElem => Object | 
*/

var objWindow, gSizeElem, setPos;

	objWindow = require('./getSizeWindow.js');
	gSizeElem = require('./getSizeElement.js');
	setPos = require('./setPositionElement.js')

module.exports = function(objElem){


	var objSizeElem = gSizeElem(objElem);
	
	var posLeft = (parseInt(objWindow().width - objSizeElem.width) / 2);
	var posTop = (parseInt(objWindow().height - objSizeElem.height) / 2);
	
	var posPopin = {
		left : posLeft,
		top : posTop
	}
	
    setPos(objElem, posPopin);



}