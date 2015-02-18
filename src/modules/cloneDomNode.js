/* 
 * ****************************************
 * node    => object reprensent node of DOM
 * content => boolean represent if include content of node or not
 * ****************************************
*/
module.exports = function(node, withContent) {
	return node.cloneNode((withContent === undefined) ? true : withContent);
}