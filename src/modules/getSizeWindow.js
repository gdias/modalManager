"use strict";

/*
	Return object contain Width & Height of Window
*/

module.exports = function() {

	var objSize;

		objSize = {
			width : window.innerWidth,
			height : window.innerHeight
		}

	return objSize;

}