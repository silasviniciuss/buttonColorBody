var change = document.getElementById("button");
var dark_theme = false;

function change_background(){
    if (dark_theme == false){
        dark_theme = true;
        document.body.style.background = "black";
    }
    else{
        dark_theme = false;
        document.body.style.background = "white";
    }

}