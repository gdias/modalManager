"use strict";
/*
	-- add new div in DOM after all element of <body /> --
	------------------------------------------------------
	id => id of div created and inserted in DOM
*/

var createDivObj = require('./createDivWithID.js');

module.exports = function(id) {
	document.body.appendChild(createDivObj(id));
}