// app/models/story.js

var mongoose = require('mongoose');

module.exports = mongoose.model('Story', {
  title: {type: String, default: ''},
  content: { body: String, 
    author: String, 
    date: Date, 
    votes: Number}
});