/**
 * Created by Rui on 17/10/2016.
 */
'use strict';

angular.module("blogList")
    .component("blogList", {
        templateUrl: "/templates/blog-list.html",
        controller: function (Post, $routeParams, $scope, $location, $rootScope) {
            $scope.items = Post.query();

            $scope.orderInput = "id";

            $scope.goToItem = (item)=>{

                $location.path("/blog/" + item.id)

                    // Cannot use this because there is another $apply event
                    /*$scope.$apply(
                        $location.path("/blog/" + item.id)
                    )*/


            }
        }
    })
