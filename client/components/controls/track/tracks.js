define(function(require){
	return {
		factory:function(){
			return {
				create:function(){
					var tracks = [];
					tracks.get_steps = function(){
						var steps = [];
						tracks.forEach(function(track,index){
							steps.push(track.steps);
						});
						return steps;
					}
					tracks.set_steps = function(steps){
						tracks.forEach(function(track,index){
							track.steps = steps[index];
						});
					}
					return tracks;
				}
			}
		}		
	}
});