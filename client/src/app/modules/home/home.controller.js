(function () {
    'use strict';
    /**
    * @ngdoc object
    * @name home.controller:HomeCtrl
    * @requires appfy.page.factory:$page
    * @requires setting
    **/
    angular.module('home').controller('HomeCtrl', /*@ngInject*/ function ($page, $state, setting) {
        var vm = this;
        /**
         *
         * SEO
         * 
         **/
        $page.title($state.current.title + ' ' + setting.titleSeparator + setting.name);
        boot();

        function boot() { }
    });
})();