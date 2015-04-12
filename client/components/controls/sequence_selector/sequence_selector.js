define(['controls.track'],function(track){
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
						$scope.tracks.set_steps($scope.sequences[index]);
						$scope.sequences.active = index;
					};	 
					$scope.new_sequence = function(){
						$scope.sequences[$scope.sequences.active] = $scope.tracks.get_steps();
						$scope.sequences.push(track.static.init_steps(8,$scope.tracks.length));
						$scope.sequences.active++;
						$scope.tracks.set_steps($scope.sequences[$scope.sequences.active]);
					};
					$scope.$on('toggle_sequence',function(){
						$scope.visible = !$scope.visible;
					});
				},
	    		templateUrl: 'components/controls/sequence_selector/sequence_selector.html',
	    		replace:true
			};
		},
		factory:function(tracks){
			return {
				create:function(num_steps,num_tracks){
					return track.static.init_steps(num_steps,num_tracks);
				}
			}
		}
	};
});