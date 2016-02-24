exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
	var interval = 600,
		counter = start,
		increment = window.setInterval(function(){
			if(counter > end) {
				window.clearInterval(increment);
			} else {				
				console.log(counter);				
				alert(counter);
				counter++;
			}
		},interval); 
	var cancel = function(){
		window.clearInterval(increment);
	};
	return {cancel:cancel};
  }
  
};
