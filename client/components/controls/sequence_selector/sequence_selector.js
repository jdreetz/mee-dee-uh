define(function(require){
	return function(){
		var directive = {
			restrict: 'E',
			scope:{
				sequences:'=',
				tracks:'=',
				visible:false
			},
			controller:function($scope){
				$scope.choose_sequence = function(index){
					this.tracks = this.sequences[index];
				};	 
			},
    		templateUrl: 'components/controls/sequence_selector/sequence_selector.html',
    		replace:true
		};

		var factory = function(){};
		return {
			directive:directive,
			factory:factory
		};
	};
});