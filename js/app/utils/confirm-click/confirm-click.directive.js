/**
 * Created by Rui on 21/10/2016.
 */
"use strict";
angular.module("confirmClick")
    .directive("confirmClick", function ($rootScope, $location) {
        return {

            restrict: "A",
            link: function (scope, element, attr) {
                var msg = attr.confirmClick || "Are you sure?";
                var clickAction = attr.confirmedClick;
                element.bind("click", function (event) {
                    //make $scope.$apply() possible
                    event.stopImmediatePropagation();
                    event.preventDefault();

                    if (window.confirm(msg)) {
                        scope.$eval(clickAction)
                    } else {
                        console.log("Cancelled")
                    }
                });
            }
        }
    })