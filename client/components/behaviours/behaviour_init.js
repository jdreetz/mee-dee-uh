define(
	['angular'], 
	function (angular) {	
	   	angular.module('behaviours',[])
	   		.directive('mduDropTarget',function(){
	   			return {
	   				restrict: 'A',
	   				link: function(scope, el, attr){
	   					var handler = attr.mduDropTarget;

		                el.bind('dragover', function(e) {
		                	e.preventDefault && e.preventDefault();
		                	angular.element(e.target).addClass('dragover');
		                	return false;
		                });

		                el.bind('drop', function(e){
		                	e.preventDefault && e.preventDefault();
		                	e.stopPropagation && e.stopPropagation();
		                	scope[handler](e.dataTransfer.files);
		                	angular.element(e.target).removeClass('dragover');
		                });
	   				}
	   			}
	   		})
	   		.directive('mduFileSelect', function(){
	   			return {
	   				restrict: 'A',
	   				link: function(scope, el, attr){
	   					var handler = attr.mduFileSelect;

	   					el.bind('change', function(e){
	   						scope[handler](e.target.files);
	   					});
	   				}
	   			}
	   		});
	    return {};
	}
);