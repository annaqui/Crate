var counter = 0;
    
        $(document).ready(function() {
    
            $("#plus").click(function(){
                counter++;
                console.log(counter);
    
                $("#total").text(counter);
            });
    
        });