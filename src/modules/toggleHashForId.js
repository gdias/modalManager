module.exports = function(id, toggle) {
	return (toggle) ? ((id.indexOf("#") === -1) ? "#"+id : id) : ((id.indexOf("#") > -1) ? id.substr(1,id.length) : id);
}