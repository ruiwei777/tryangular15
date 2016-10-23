/**
 * Created by Rui on 17/10/2016.
 */
'use strict';

angular.module("try")
    .config(function ($locationProvider,
                      $routeProvider) {
        $locationProvider.html5Mode({
            enabled: true
        });

        $routeProvider
            .when("/", {
                template: "<blog-list></blog-list>"
            })
            .when("/blog/:id", {
                template: "<blog-detail></blog-detail>"
            })
            .otherwise({
                template: "Not Found"
            })
    });