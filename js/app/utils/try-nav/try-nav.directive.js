/**
 * Created by Rui on 22/10/2016.
 */
app = angular.module("tryNav")
    .directive("tryNav", (Post, $location)=>{
        return {
            restrict: "E",
            templateUrl: "/templates/try-nav.html",
            link: (scope, element, attr) =>{
                scope.items = Post.query();
                scope.selectItem = ($item, $model, $label) => {

                }
            }
        }
    });