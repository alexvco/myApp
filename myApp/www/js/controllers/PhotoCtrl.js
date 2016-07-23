'use strict';

app.controller('PhotoCtrl', function($scope) {
 
  $scope.takePhoto = function(){
    console.log("take")
  }
  $scope.choosePhoto = function(){
    console.log("choose")
  }

});