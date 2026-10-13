var mongoose = require('mongoose');

module.exports = await mongoose.connect('mongodb://localhost/test');
