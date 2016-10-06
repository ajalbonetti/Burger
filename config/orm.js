var connection = require('../config/connection.js');

var orm = {

	all: function (tableInput, cb) {
		var queryString = 'SELECT * FROM ' + tableInput + ';';
		connection.query(queryString, function (err, result) {
			if (err) throw err;
			cb(result);
		});
	},
	insertOne: function (tableName, columnOne, columnTwo, valueOne ,valueTwo) {
		var queryString = 'INSERT INTO ' + tableName + '(' + columnOne + ',' + columnTwo + ') VALUES (' + valueOne + ',' + valueTwo + ')';
		console.log(queryString);
		connection.query(queryString, function (err, result) {
			console.log(result);
		});
	}, 
	updateOne: function (tableName, columnOne, newValue, columnTwo, currentValue) {
		var queryString = 'UPDATE ' + tableName + 'SET ' + columnOne + '=' + newValue + 'WHERE ' + columnTwo + '=' + currentValue;
		console.log(queryString);
		connection.query(queryString, function (err, result) {
			console.log(result);
		});
	}
};

module.exports = orm;

