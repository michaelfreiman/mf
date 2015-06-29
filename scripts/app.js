'use strict';

/* App Module */

var designApp = angular.module('designApp', [
  'ngRoute',
  // 'phonecatAnimations',
  //
  // 'phonecatControllers',
  // 'phonecatFilters',
  // 'phonecatServices'
]);

designApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'views/me.html',
        //controller: 'PhoneListCtrl'
      }).
      when('/art', {
        templateUrl: 'views/art.html',
        //controller: 'PhoneListCtrl'
      });
      // when('/phones/:phoneId', {
      //   templateUrl: 'partials/phone-detail.html',
      //   controller: 'PhoneDetailCtrl'
      // }).
      // otherwise({
      //   redirectTo: '/phones'
      // });
  }]);
