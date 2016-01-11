//public/js/services/StoryService.js
angular.module('StoryService', []).factory('Story', ['$http', function($http){
  return {
        // call to get all stories
        get : function() {
            return $http.get('/api/stories');
        },


        // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new story
        create : function(storyData) {
            return $http.post('/api/stories', storyData);
        },

        // call to DELETE a story
        delete : function(id) {
            return $http.delete('/api/stories/' + id);
        }
    };       

}]);