/* 
 * ****************************************************************
 * container => Object for target clone Element Dom
 * node      => Object represent node of DOM moved
 * content   => Boolean represent if include content of node or not
 * ****************************************************************
*/

var cloneMod = require('./cloneDomNode.js');

module.exports = function(container, node, withcontent) {
	var nodeTemp = node;
	document.body.removeChild(node); // remove node
	container.appendChild(cloneMod(nodeTemp, withcontent)); // clone node 
}