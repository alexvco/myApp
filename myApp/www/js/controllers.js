angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, Products) {
  $scope.products = Products.all();

  console.log('the products', $scope.products);
})

.controller('ChatsCtrl', function($scope, Chats, Products) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

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
})  

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
