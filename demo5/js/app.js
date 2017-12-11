   var myApp = angular.module("monApp", []);
                            myApp.controller("maincntrl", function ($scope) {
                                $scope.submit_success = false;
                                $scope.call = function () {
                                    $scope.server = angular.copy($scope.user);
                                    $scope.submit_success = true;
                                }
                            }
                            );