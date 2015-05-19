	var minimum = 0;
	var maximum = 100;
 

	$(document).ready(function() {
    
            $("#plus").click(function(){
				input = $("#total")
				value = parseInt(input.val());
	
				//If the value isn't a number of exceeds the maximum value just set it to the max
				if( isNaN(value) || value >= maximum){
					input.val(maximum);
				} else {
					input.val(value + 1);
				}
            });
    
            $("#minus").click(function(){
				input = $("#total")
				value = parseInt(input.val());
	
				//Assuming they're not sending you beer they should not go beleow the minimum
				if( isNaN(value) || value <= minimum){
					input.val(minimum);
				} else {
					input.val(value - 1);
				}
            });
			
			$("#total").change(function() {
				input = $("#total")
				value = parseInt(input.val());
				
				//Maybe this should be minimum instead?
				if(isNaN(value)){
					input.val(maximum);
				}
			});

        });