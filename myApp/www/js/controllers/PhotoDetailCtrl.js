'use strict';

app.controller('PhotoDetailCtrl', function($scope, Chats, Products) {
 
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };

  // this is a hack
  $scope.image ='http://www.flightclub.com/media/catalog/product/cache/1/image/700x500/9df78eab33525d08d6e5fb8d27136e95/a/d/adidas-yeezy-boost-350-pirate-black-2016-release-pirblk-blugra-cblack-201189_1.jpg'

  $scope.button = function(product){
    console.log('button was clicked', product, $scope.image);
    Products.saveProduct(product, $scope.image);
  }
});