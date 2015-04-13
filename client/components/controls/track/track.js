define(function(require){
	var track = {
		step:{
			factory:function(){
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
			}
		},
		directive:function(){
			return {
				restrict: 'E',
				scope:{
					src: '=',
					steps: '=',				
		   			expanded: '='				
				},
				controller: function($scope){
					$scope.toggle_settings = function(){
		   				this.expanded = !this.expanded;
		   			};
		   			$scope.toggle_step = function(idx){
		   				this.steps[idx].on = !this.steps[idx].on;
		   			}
				},
	    		templateUrl: 'components/controls/track/track.html',
	    		replace:true
	    	};
		},
		factory:function($sce, step){
			return {
				create:function(file){
					return {
						expanded: false,
						steps: track.static.init_steps(8),
						src: $sce.trustAsResourceUrl(URL.createObjectURL(file))
					};
				}
			}
		},
		'static':{
			init_steps: function(num_steps,num_tracks){
				if(num_tracks){
					var tracks = [], i = 0;
					for(; i < num_tracks; i++){
						var steps = [], j = 0;
						for(; j < num_steps; j++){
							steps.push(track.step.factory().create())
						}
						tracks.push(steps);
					}
					return tracks;
				}
				else{
					var steps = [];
					for(var i = 0; i < num_steps; i++){
						steps.push(track.step.factory().create())
					}
					return steps;
				}				
			}
		}
	};

	return track;
});