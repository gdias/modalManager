module.exports = function(classCSS) {
	return (classCSS.indexOf(".") !== -1) ? classCSS : "."+classCSS;
} 