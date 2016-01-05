 //App/routes.js
 //Grab the Story Model

var Story = require('./models/story');

  module.exports = function(app){
    app.get('/api/story', function(req, res) {
      Story.find(function(err, story) {
     // nothing after res.send(err) will execute
      if (err)
        res.send(err);
      res.json(story); // return all stories in JSON format
      });
    });
      
      // frontend routes =========================================================
      // route to handle all angular requests
    app.get('*', function(req, res) {
      res.sendfile('./public/views/index.html'); // load our public/index.html file
    });
};