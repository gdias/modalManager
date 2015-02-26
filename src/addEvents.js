"use strict";

	/* 
		-- Add all events --
		selector => String | Cibling Css Class of handler element
		target   => String | Cibling container of popin by ID
	*/
	
var gElemCss = require('./modules/ciblingDomClass.js'),
	gElemID = require('./modules/ciblingDomID.js'),
	removeClass = require('./modules/removeCssClassInElem.js'),
	addClass = require('./modules/addCssClassInElem.js'),
	centerE = require('./modules/centerElement.js'),
	toggleHashID = require('./modules/toggleHashForId');
	var _ = require("lodash");

module.exports = function(opts, obj) {
	
	var selector = opts.selector,
        target = opts.containerID,
        layerID = opts.layerID,
        objSelector = gElemCss(selector),
		objLayerT = gElemID(layerID),
		objCloserClass = gElemCss(toggleHashID(target, true)+" .closer"),
		renewPosition = function () {
			centerE(gElemID(target));
		};

		// Attach event for open/close popin 
		objSelector.addEventListener("click", function(e){
            e.preventDefault();

            if (!opts.isOpen) {
                obj.open();
                obj.options.isOpen = true;
            }

        });

		
        
		// Attach event when resize window
		window.addEventListener("resize", _.throttle(renewPosition, 200));
		
		// Attach event for close popin when click on layer
		objLayerT.addEventListener("click", function(e){
            e.preventDefault();

            if (opts.isOpen) {
                obj.close();
                obj.options.isOpen = false;
            }
        });


		if (objCloserClass) // control if exist an element with ".closer" css class
			objCloserClass.addEventListener("click", function(e) { // bind event close (toggle) for 
				e.preventDefault();
				if (opts.isOpen) {
	                obj.close();
	                obj.options.isOpen = false;
	            }
			});

}