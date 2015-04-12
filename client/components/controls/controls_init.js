define(
	['angular','controls.transport','controls.track','controls.track.settings','controls.sequence_selector'], 
	function (angular, transport, track, track_settings, sequence) {	
	   	angular.module('controls',[])
	   		.directive('mduTransport',['$rootScope',transport])
	   		.directive('mduTrack', track.directive)
	   		.directive('mduTrackSettings', track_settings)
	   		.directive('mduSequenceSelector', sequence.directive)
	   		.factory('track', ['$sce', 'step', track.factory])
	   		.factory('step', function(){
	   			var STEP_MODES = {
	   				TIME_SLICE:'time_slice'
	   			};

	   			return {
	   				create: function(){
	   					return {
	   						on: false,
	   						mode: STEP_MODES.TIME_SLICE
	   					};
	   				},
	   				MODES: STEP_MODES
	   			};
	   		});
	   		// .factory('sequence', sequence.factory);
	    return {};
	}
);