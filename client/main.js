(function(){
	init();

	function init(){
		require.config({
			paths:{
				'angular':'bower_components/angular/angular.min',
				'video.init':'components/video/video_init',
				'video.loader':'components/video/loader/loader',
				'video.player':'components/video/player/player',
				'video.mixer':'components/video/mixer/mixer',
				'audio.init':'components/audio/audio_init',
				'audio.waveform':'components/audio/waveform/waveform',
				'time_clock':'components/time_clock/time_clock',
				'controls.init':'components/controls/controls_init',
				'controls.transport':'components/controls/transport/transport',
				'controls.track':'components/controls/track/track',
				'controls.tracks':'components/controls/track/tracks',
				'controls.track.settings':'components/controls/track/settings',
				'controls.sequence_selector':'components/controls/sequence_selector/sequence_selector',
				'behaviours.init':'components/behaviours/behaviour_init'
			},
			shim:{
				'angular':{
					exports: 'angular'
				}
			}
		});
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



