var orm = require('./config/orm.js');

// Select all the data from the burgers table
orm.selectAll('burgers');

// Insert user inputted burger into the database 
orm.insertOne('burgers', 'burger_name', 'devoured', burgerInput, burgerDevoured);

// Updates the value of the devoured column to true
orm.updateOne('burgers', 'devoured', true, 'burger_name', burgerInput);

module.exports = burger;