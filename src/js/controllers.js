'use strict';

var PhotoStreamCtrl = ['$scope', 'Photo', function($scope, Photo) {
    $scope.photos = Photo.query();
    //$scope.orderProp = 'age';
}];

var PhotoDetailCtrl = ['$scope', '$routeParams', 'Phone', function($scope, $routeParams, Phone) {

    /*$scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
        $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl) {
        $scope.mainImageUrl = imageUrl;
    }*/


    console.log('PhotoDetailCtrl');

}];