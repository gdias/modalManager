"use strict";

	/*
		-- This Script Generate comportments of Modal --
		config : Object | JSON Object contain options for object
	*/


var prepareDom, addEvents, extend, removeClass, addClass, gElemID;

    prepareDom = require('./init');
	addEvents = require('./addEvents');

    // load modules
    extend = require('./modules/extends');
    removeClass = require('./modules/removeCssClassInElem');
    addClass = require('./modules/addCssClassInElem');
    gElemID = require('./modules/ciblingDomID');

var modalManager = function(opts) { 

    if (!opts.selector || !opts.target) {
        console.error("Can't be started whithout selector or target options.");
        return;
    }

    // configuration module
    this.options = {
        selector : "",
        target : "",
        idContainer : "containerID_",
        layerID : "modalLayer",
        withLayer : true,
        eventStart : "click",
        cssToContainer : "",
        isOpen : false
    };

    modalManager.prototype.init = function(){

        extend(this.options, opts); // merge with options passed in parameter

        prepareDom(this.options); // Prepare DOM with options

        addEvents(this.options, this); // Add events on elements
    }



    modalManager.prototype.open = function(){
        removeClass(gElemID(this.options.idContainer), 'hidden'); // show popin
        removeClass(gElemID(this.options.layerID), 'hide');// show grey layer
        opts.isOpen = true;
    }

    modalManager.prototype.close = function(){
        addClass(gElemID(this.options.idContainer), 'hidden');
        addClass(gElemID(this.options.layerID), 'hide');// show grey layer
        opts.isOpen = false;
    }

   
    // start
    this.init();


}


module.exports = modalManager;