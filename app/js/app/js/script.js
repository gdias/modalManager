(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./src/main.js":[function(require,module,exports){
(function (global){
// main.js

var popinGen = require('./popinGen.js');


global.modal = new popinGen();
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./popinGen.js":"/Users/gdias/www/popinJS/src/popinGen.js"}],"/Users/gdias/www/popinJS/src/popinGen.js":[function(require,module,exports){
"use strict";

	/*
		-- This Script Generate a comportment of Popin
		config : Object | Object Contain all variable necessary
	*/

/*
var init, addEvents;

	init = require('./init.js');
	addEvents = require('./addEvents.js');
*/
var popinGen = function(config) {

    popinGen.prototype.init = function(){

        console.log(config);

    }


	/*
	
	if (!config) {
		console.error("Can't be started whithout config Object");
		return;
	}

	popinGen.prototype.init = init(config.idContainer, config.target, true, config.idOfLayer);

	popinGen.prototype.addEvents = addEvents(config.selector, config.idContainer, config.idOfLayer);
	
	*/

}


module.exports = popinGen;
},{}]},{},["./src/main.js"]);
