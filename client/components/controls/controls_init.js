define(
	['angular','controls.transport','controls.track','controls.track.settings','controls.sequence_selector'], 
	function (angular, transport, track, track_settings, sequence_selector) {	
	   	angular.module('controls',[])
	   		.directive('mduTransport', transport)
	   		.directive('mduTrack', track)
	   		.directive('mduTrackSettings', track_settings)
	   		.directive('mduSequenceSelector', sequence_selector)
	   		.factory('track', ['$sce', 'step', function($sce, step){
	   			return {
	   				create:function(file){
	   					return {
	   						expanded: false,
	   						steps: init_steps(8),
	   						src: $sce.trustAsResourceUrl(URL.createObjectURL(file)),
	   						toggle_step:function(index){
								this.steps[index].on = !this.steps[index].on; 
	   						},
	   						toggle_settings:function(){
	   							this.expanded = !this.expanded;
	   						}
	   					};
	   				}
	   			}

	   			function init_steps(num){
	   				var steps = [];
	   				for(var i = 0; i < num; i++){
	   					steps.push(step.create())
	   				}
	   				return steps;
	   			}
	   		}])
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
	    return {};
	}
);