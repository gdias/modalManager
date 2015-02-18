"use strict";

/*	
	-- Prepare a perfect ground for generate a popin --
	containID  => String | ID for container
	targetID  => String | ID of DIV contain popin
	withLayer => Boolean | Generate or not a transparency layer
*/
	var addDiv, moveElem, gElemID, addClass, centerE;

	addDiv = require('./modules/addDivInDom'),
	moveElem = require('./modules/moveDomNode'),
	gElemID = require('./modules/ciblingDomID'),
	addClass = require('./modules/addCssClassInElem');
	centerE = require('./modules/centerElement');


module.exports = function(opts) {

    var containID, targetID, gLayerID, withLayer;
        opts.idContainer = opts.idContainer + opts.target;

        containID = opts.idContainer;
        targetID = opts.target;
        gLayerID = opts.layerID;
        withLayer = opts.withLayer;

	addDiv(containID); // add new container in DOM
	
	moveElem(gElemID(containID), gElemID(targetID), true); // Move container popin in new container (with content)

    if (opts.cssToContainer) // insert css class on container
        addClass(gElemID(containID), opts.cssToContainer);


	if (withLayer && !gElemID(gLayerID)){ // Create a transparency layer
		addDiv(gLayerID);
        addClass(gElemID(gLayerID), "hide");
    }

	addClass(gElemID(containID), "hidden"); // hidden popin and move outside screen for getSize()

	// call method for centered popin
	centerE(gElemID(containID));

}