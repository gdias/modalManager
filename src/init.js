"use strict";

/*	
	-- Prepare a perfect ground for generate a modal --
	---------------------------------------------------
	+ opts => Object | contain config object

*/

var addDiv = require('./modules/addDivInDom'),
	moveElem = require('./modules/moveDomNode'),
	gElemID = require('./modules/ciblingDomID'),
	addClass = require('./modules/addCssClassInElem'),
	centerE = require('./modules/centerElement'),
	toggleHashID = require('./modules/toggleHashForId');

module.exports = function(opts) {

    opts.containerID = opts.containerID + toggleHashID(opts.target, false);

    var containID = opts.containerID,
        targetID = toggleHashID(opts.target, false),
        gLayerID = opts.layerID,
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