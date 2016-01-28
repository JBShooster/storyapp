// public/js/controllers/StoryCtrl.js
angular.module('StoryCtrl', []).controller('StoryController', function($scope) {
    $scope.tagline = 'Where your words get parsed...';
    $("#blurb").keydown(function(){
      $(".tagline").hide();
    });
});