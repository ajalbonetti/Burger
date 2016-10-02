var connection = require('/connection.js');

var orm = {
	selectAll: function (tableName) {
		var queryString = 'SELECT * FROM ' + tableName;
		console.log(queryString);
		connection.query(queryString, function (err, result) {
			console.log(result);
		});
	},
	insertOne: function (tableName, columnOne, columnTwo, valueOne ,valueTwo) {
		var queryString = 'INSERT INTO ' + tableName + '(' + columnOne + ',' + columnTwo + ') VALUES (' + valueOne + ',' + valueTwo + ')';
		console.log(queryString);
		connection.query(queryString, function (err, result) {
			console.log(result);
		});
	}, 
	updateOne: function () {
		var queryString = 'UPDATE ' + tableName + 'SET ' + columnOne + '=' + newValue + 'WHERE ' + columnTwo + '=' + currentValue;
		console.log(queryString);
		connection.query(queryString, function (err, result) {
			console.log(result);
		});
	}
};

module.exports = orm;
