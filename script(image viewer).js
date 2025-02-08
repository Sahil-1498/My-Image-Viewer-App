let logo = document.getElementById("logo");
let top_left_logo = document.getElementById("top-left-logo");
let img_area = document.getElementById("img-area");
let img_overflow = document.getElementById("img-overflow");
let imgs = document.getElementById("img");

/*............................................*/ 
img_area.style.display = "none";
img_overflow.style.display = "none";
/*............................................*/
logo.onclick = function()
{   
    logo.style.display = "flex"
    
    logo.style.display = "none";
    
}
// ..........................................


logo.onclick = function() {
    top_left_logo.style.display = "flex";
    logo.style.display = "none";
    img_area.style.display = "flex";
    img_overflow.style.display = "flex";
    imgs.style.backgroundImage="URL("+"12.png"+")";
    imgs.style.backgroundSize="contain";
    imgs.style.backgroundRepeat="no-repeat";
}

imgs.onclick = function(){
    img_overflow.style.display = "none";
    imgs.onclick = function()
    {img_overflow.style.display = "flex";}
}

