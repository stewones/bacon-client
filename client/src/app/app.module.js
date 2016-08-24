(function () {
    'use strict';
    /**
     * @ngdoc overview
     * @name bacon
     * @requires appfy.core
     * @requires appfy.module
     * @description
     * The app modules
     **/
    angular.module('bacon', [
        'appfy.core',
        'appfy.module',
        //
        // Load 3rd party below
        // like bootstrap, material, etc
        //
        'appfy.error'
    ]);
})();