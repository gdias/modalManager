module.exports = function(vars) {
	return (vars.indexOf("#") !== -1) ? vars : "#"+vars;
}