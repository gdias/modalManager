"use strict";

	/* 
		-- Add all events --
		selector => String | Cibling Css Class of handler element
		target   => String | Cibling container of popin by ID
	*/
var gElemCss, gElemID, addClass, removeClass, isOpen, centerE, objLayerT, objCloserClass, toggleHashID;
	
	gElemCss = require('./modules/ciblingDomClass.js'),
	gElemID = require('./modules/ciblingDomID.js'),
	removeClass = require('./modules/removeCssClassInElem.js'),
	addClass = require('./modules/addCssClassInElem.js'),
	centerE = require('./modules/centerElement.js'),
	toggleHashID = require('./modules/toggleHashForId');

module.exports = function(opts, obj) {
	
	var objSelector, selector, target, layerID;

        selector = opts.selector;
        target = opts.containerID;
        layerID = opts.layerID; 

		objSelector = gElemCss(selector);
		objLayerT = gElemID(layerID);
		objCloserClass = gElemCss(toggleHashID(target, true)+" .closer");

		// Attach event for open/close popin 
		objSelector.addEventListener("click", function(e){
            e.preventDefault();

            if (!opts.isOpen) {
                obj.open();
                obj.options.isOpen = true;
            }

        });

		// Attach event when resize window
		window.addEventListener("resize", function(){
			centerE(gElemID(target));
		})

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