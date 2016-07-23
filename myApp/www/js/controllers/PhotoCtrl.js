'use strict';

app.controller('PhotoCtrl', function($scope,  $cordovaCamera, $rootScope, $state) {
 
  $scope.takePhoto = function(){
    console.log("takePhoto clickec");
      // Camera Plugin

      var options = {
        quality: 75,
        destinationType: Camera.destinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.CAMERA,
        allowEdit: true,
        encodingType: Camera.EncodingType.JPEG,
        popoverOptions: CameraPopoverOptions,
        targetWidth: 500,
        targetHeight: 500,
        saveToPhotoAlbum: false,
      };

      $cordovaCamera.getPicture(options).then(function(photo){
        $rootScope.imgURI = "data:imagee/jpeg:base64," +photo;
        $state.go('tab.photo-detail');
      })

  }



  $scope.choosePhoto = function(){
    console.log("choosePhoto was clicked");


    var options = {
        quality: 75,
        destinationType: Camera.destinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
        allowEdit: true,
        encodingType: Camera.EncodingType.JPEG,
        popoverOptions: CameraPopoverOptions,
        targetWidth: 500,
        targetHeight: 500,
        saveToPhotoAlbum: false,
      };

      $cordovaCamera.getPicture(options).then(function(photo){
        $rootScope.imgURI = "data:imagee/jpeg:base64," +photo;
        $state.go('tab.photo-detail');
      })

  }

});