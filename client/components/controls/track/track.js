define(function(require){
	return function(){
		var directive = {
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

		var factory = function($sce, step){
			return {
				create:function(file){
					return {
						expanded: false,
						steps: init_steps(8),
						src: $sce.trustAsResourceUrl(URL.createObjectURL(file))
					};
				}
			}

			function init_steps(num){
				var steps = [];
				for(var i = 0; i < num; i++){
					steps.push(step.create())
				}
				return steps;
			};
		};

		return {
			directive: directive,
			factory: factory
		};
	};
});