var mongoose = require('mongoose');
var Tweet = require('../models/Tweet.js');
var storage = require('node-persist');
storage.initSync();

module.exports.saveTweet = function(req, res) {
	var searchText = req.body.title;
	var regexp = /\B\#\w\w+\b/g;
	result = searchText.match(regexp);
	req.body.hashtag = result;
	//getting username from local storage
	req.body.userName = storage.getItemSync('username', req.body.userName);
	Tweet.create(req.body, function(err, post) {
		if (err) return next(err);
		res.json(post);
	});
};
