'use strict';

app.controller('PhotoCtrl', function($scope,  $cordovaCamera, $rootScope, $state) {
 
  var options = {
        quality: 75,
        destinationType: Camera.destinationType.DATA_URL,
        allowEdit: true,
        encodingType: Camera.EncodingType.JPEG,
        popoverOptions: CameraPopoverOptions,
        targetWidth: 500,
        targetHeight: 500,
        saveToPhotoAlbum: false,
  };

  $scope.takePhoto = function(){
    console.log("takePhoto clickec");
      // Camera Plugin
      options.sourceType = Camera.PictureSourceType.CAMERA;

      $cordovaCamera.getPicture(options).then(function(photo){
        $rootScope.imgURI = "data:imagee/jpeg:base64," +photo;
        $state.go('tab.photo-detail');
      })
  }

  $scope.choosePhoto = function(){
    console.log("choosePhoto was clicked");
      options.sourceType = Camera.PictureSourceType.PHOTOLIBRARY;

      $cordovaCamera.getPicture(options).then(function(photo){
        $rootScope.imgURI = "data:imagee/jpeg:base64," +photo;
        $state.go('tab.photo-detail');
      })
  }

});