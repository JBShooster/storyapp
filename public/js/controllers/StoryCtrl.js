// public/js/controllers/StoryCtrl.js
angular.module('StoryCtrl', []).controller('StoryController', function($scope) {
    $scope.tagline = 'Where your names will show up...';
    $("#blurb").keydown(function(){
      $(".tagline").hide();
      var testText = $("#blurb").val();
      var textRegex = /([A-Z]\.?\w*\-?[A-Z]?\w*)\s?([A-Z]\w+|[A-Z]?\.?)\s([A-Z]?\w{0,3}[A-Z]\w+\-?[A-Z]?\w*)(?:,\s|)(Jr\.|Sr\.|IV|III|II|)\w+/g;
      results = testText.match(textRegex);
      console.log("Results: ", results);
      $scope.results = results;
    });
});