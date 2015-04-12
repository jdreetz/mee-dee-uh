define(function(){
	return function($rootScope){
		return {
			restrict: 'E',
			scope:{},
			controller:function($scope){
				$scope.toggle_sequence_selector = function(){
					$rootScope.$broadcast('toggle_sequence');
				};
			},
    		templateUrl: 'components/controls/transport/transport.html',
    		replace:true
		};
	};	
});