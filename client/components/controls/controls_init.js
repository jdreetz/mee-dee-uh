define(
	['angular','controls.transport','controls.track','controls.tracks','controls.track.settings','controls.sequence_selector'], 
	function (angular, transport, track, tracks, track_settings, sequence) {	
	   	angular.module('controls',[])
	   		.directive('mduTransport',['$rootScope',transport])
	   		.directive('mduTrack', track.directive)
	   		.directive('mduTrackSettings', track_settings)
	   		.directive('mduSequenceSelector', sequence.directive)
	   		.factory('track', ['$sce', 'step', track.factory])
	   		.factory('sequence', ['tracks', sequence.factory])
	   		.factory('step', track.step.factory)	   		
	   		.factory('tracks', tracks.factory);
	    return {};
	}
);