(function(){

    // Query for iframe and link items
    function bootstrap(){
        var content = document.getElementById("content");
        var menuLinks = document.querySelectorAll("li a");
        
        // Update iframe depending on menu link clicked
        function changePage(li){
            return function(e){
                e.preventDefault();
                var page = li.href.split("#")[1];
                content.src = page;
            }
        }

        // Bind function to each link item
        for(var i = 0; i < menuLinks.length; i++ ){
            menuLinks[i].addEventListener("click", changePage(menuLinks[i]), true);
        }    
    }
    
    // Fire on page load
    window.onload = bootstrap;

})();
