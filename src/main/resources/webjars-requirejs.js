/*global requirejs */

// Ensure any request for this webjar brings in dependencies.
requirejs.config({
    shim: {
        'ui-bootstrap': [ 'webjars!angular.js', 'webjars!bootstrap.js' ],
        'ui-bootstrap-tpl': [ 'webjars!angular.js', 'webjars!bootstrap.js' ]
    }
});
