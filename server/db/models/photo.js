var mongoose = require('mongoose');

var schema = new mongoose.Schema({
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
	path: String,
    dominant_color: Array,
    secondary_colors: Array,
});

module.exports = mongoose.model('Photo', schema);