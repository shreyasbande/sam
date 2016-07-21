import shiftController from './controller/shiftController.js';
import infoController from './controller/infoController.js';

var sam = angular.module('sam', ['underscore', 'ngRoute', 'angularMoment']);
sam.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
}]);

sam.controller('shiftController', shiftController);
sam.controller('infoController', infoController);

shiftController.$inject = ['$http', '$q'];
infoController.$inject  = ['$http', '$q'];

