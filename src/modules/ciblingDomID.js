var th = require('./toggleHashForId')

module.exports = function(id) {
	return document.getElementById(th(id,false));
}
