/*global requirejs */

// Ensure any request for this webjar brings in dependencies.
requirejs.config({
    shim: {
        'ui-bootstrap': [ 'webjars!angular.js', 'webjars!bootstrap.js' ],
        'ui-bootstrap-tpls': [ 'webjars!angular.js', 'webjars!bootstrap.js' ]
    }
});
