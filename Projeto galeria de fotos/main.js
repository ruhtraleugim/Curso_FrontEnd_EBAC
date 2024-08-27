$(document).ready(function() {

    
$("header button").click(function(){
    alert("clickou");
//como seria feito com javascript normal; 
    // var btn = document.querySelector("header button");
    // btn.addEventListener("click", function(){
    //     alert("clickou");
    // });
})
$("form").on("submit", function(e){
    e.preventDefault();
})
})
