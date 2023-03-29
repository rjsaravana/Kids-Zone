/*-------------------------------------------Section-Boxes-----------------------------------*/

var section = document.getElementById("selectbox");
var btns = section.getElementsByClassName("text-boxes");
for( var i=0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = 
        document.getElementsByClassName("active");
        current[1].className = 
        current[1].className.replace("active","");
        this.className += " active";
    });
}