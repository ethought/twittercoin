var tcApp = angular.module( 'tcApp', [
	'ngRoute',
	'ngResource'
] )

tcApp.config( function( $httpProvider ) {
	var authToken;
	authToken = $( "meta[name=\"csrf-token\"]" ).attr( "content" );
	return $httpProvider.defaults.headers.common[ "X-CSRF-TOKEN" ] = authToken;
} );

tcApp.config( function( $routeProvider ) {

	$routeProvider.when( "/", {
		templateUrl: "/templates/index.html",
		controller: "indexCtrl"
	} )

	$routeProvider.otherwise( {
		redirectTo: '/'
	} );

} )