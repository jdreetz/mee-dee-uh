define(function(require){
	return {
		directive:function(){
			return {
				restrict: 'E',
				scope:{
					sequences:'=',
					tracks:'='
				},
				controller:function($scope){
					$scope.choose_sequence = function(index,$event){
						$scope.tracks = $scope.sequences[index];
						$scope.sequences.active = index;
					};	 
					$scope.new_sequence = function(){
						$scope.tracks = [];
						$scope.sequences.push($scope.tracks);
					};
					$scope.$on('toggle_sequence',function(){
						$scope.visible = !$scope.visible;
					});
				},
	    		templateUrl: 'components/controls/sequence_selector/sequence_selector.html',
	    		replace:true
			};
		},
		factory:function(){
			return {}
		}
	};
});