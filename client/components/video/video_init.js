define(
	['require','angular','video.player','video.loader','video.mixer'], 
	function (require, angular, player, loader, mixer) {	
	   	angular.module('video',[])
	   		.factory('video.player', player)
	   		.factory('video.loader', loader)
	   		.factory('video.mixer',  mixer);
	    return {};
	}
);