(function(){
	init();

	function init(){
		require(
			[
				'angular',
				'video.init',
				'controls.init',
				'time_clock',
				'behaviours.init'
			], 
			function(angular,video,control,time_clock, behaviours){
				angular.module('app', ['video','controls','behaviours'])
					.controller('main',['$scope','track','tracks','sequence',function($scope, track, tracks, sequence){
						$scope.tracks = tracks.create();
						$scope.sequences = sequence.create(8,1);
						$scope.sequences.active = 0;
						$scope.selectVideo = function(){
							document.querySelector('#file_selector').click();
						};
						$scope.addTrack = function(files){
							for(var i = 0, l = files.length; i < l; i++){
								$scope.tracks.push(track.create(files[i]));
							}
							$scope.$apply();
						}
					}])
					.directive('mduTimeClock',time_clock)
					.config(['$compileProvider', function($compileProvider){   
  						$compileProvider.imgSrcSanitizationWhitelist(/^\s*(blob):/);
					}]);
				angular.bootstrap(document,['app']);
			}
		);
	}
})();



