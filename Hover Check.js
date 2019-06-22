
        function init() {
        var button = document.getElementById("button");
        var state = false;
       button.addEventListener("mouseover", function(e) {
            
            var pathone = document.getElementById("pathone");
            var pathtwo = document.getElementById("pathtwo");
            // Add Drawing Animation Class
            pathone.classList = 'hoverarea__pathone hoverarea__pathone--draw';
            pathtwo.classList = 'hoverarea__pathtwo hoverarea__pathtwo--draw';
            state = false;
        });

        button.addEventListener("mouseleave", function(e) {
            var pathone = document.getElementById("pathone");
            var pathtwo = document.getElementById("pathtwo");
            // Add Drawing Animation Class  
            pathone.classList = 'hoverarea__pathone hoverarea__pathone--remove';
            pathtwo.classList = 'hoverarea__pathtwo hoverarea__pathtwo--remove';
        
        }); 
        // Mobile
        button.addEventListener("click", function(e) {

            if(state === false){
                var pathone = document.getElementById("pathone");
                var pathtwo = document.getElementById("pathtwo");
                // Add Drawing Animation Class
                pathone.classList = 'hoverarea__pathone hoverarea__pathone--draw';
                pathtwo.classList = 'hoverarea__pathtwo hoverarea__pathtwo--draw';
                state = true;   }
            else{
                var pathone = document.getElementById("pathone");
                var pathtwo = document.getElementById("pathtwo");
                // Add Drawing Animation Class
                pathone.classList = 'hoverarea__pathone hoverarea__pathone--remove';
                pathtwo.classList = 'hoverarea__pathtwo hoverarea__pathtwo--remove';
                state= false;     
            }
            
            
            });
            
            
        
        }