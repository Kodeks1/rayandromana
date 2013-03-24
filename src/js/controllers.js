'use strict';

function PhotoStreamCtrl($scope, Photo) {
    $scope.photos = Photo.query();
    //$scope.orderProp = 'age';
}

//PhotoStreamCtrl.$inject = ['$scope', 'Photo'];



function PhotoDetailCtrl($scope, $routeParams, Phone) {
    /*$scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
        $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl) {
        $scope.mainImageUrl = imageUrl;
    }*/


    console.log('PhotoDetailCtrl');


}

//PhotoDetailCtrl.$inject = ['$scope', '$routeParams', 'Photo'];







/*angular.module('Image', ['ngResource']);

function ImageController($scope, $resource) {

    var  apiKey = 'fbac1903c65c864cb6b44e2c174a6f57',
        user_id = '49962213@N04';

    $scope.flickr = $resource('http://api.flickr.com/services/rest/?&method=:method&api_key=:api_key&user_id=:user_id&format=:format',
        {
            method:'flickr.people.getPublicPhotos',
            user_id: user_id,
            api_key: apiKey,
            format: 'json',
            callback:'JSON_CALLBACK'
        }
    );

    $scope.doSearch = function () {
        $scope.flickrResult = $scope.flickr.get();
    };

}*/
