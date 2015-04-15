define(['angular','angular-mocks','controls.track'],function(angular,ngMock,track){
	describe('Controls Tests',function(){
		'use strict';

		angular.module('app',[])
			.directive('mduTrack',track.directive);

		beforeEach(module('app'));

		var $scope,
			$compile,
			element,
			source = '<mdu-track steps="track.steps" src="track.src" expanded="track.expanded"></mdu-track>';

		beforeEach(inject(function(_$compile_, $rootScope, $templateCache){
			$scope  = $rootScope.$new();
			$compile = _$compile_;
			$templateCache.put('client/components/controls/track/track.html');
			
		}));

		afterEach(function(){});

		describe('Controls Test 01', function(){
			it('A', function(){
				$scope.track = {
					steps:[],
					src:'http://www.w3schools.com/html/mov_bbb.mp4',
					expanded: false
				};

				element = $compile(source)($scope);
				expect(element.find('video').src()).to.equal($scope.track.src);
			});
		});
	});
});