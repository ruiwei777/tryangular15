/**
 * Created by Rui on 17/10/2016.
 */
'use strict';

angular.module("blogDetail")
    .component("blogDetail", {
        templateUrl: "/templates/blog-detail.html",
        controller: function (Post, $http, $location, $routeParams, $scope) {  // service put in param list

            Post.query(function (data) {
                angular.forEach(data, function (blog) {
                    if (blog.id == $routeParams.id) {
                        $scope.post = blog;
                        resetReply();
                    }
                })
            })

            $scope.deleteComment = (comment)=> {
                $scope.$apply(

                    $scope.post.comments.splice(comment, 1)
                )


            }

            $scope.addReply = ()=> {
                console.log($scope.reply);
                $scope.post.comments.push($scope.reply)


                resetReply();
            }

            function resetReply() {
                $scope.reply = {
                    id: $scope.post.comments.length + 1,
                    text: ""
                }
            }


        }
    });
