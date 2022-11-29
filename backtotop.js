"use strict"
let backtoTop=document.getElementById("backtoTop");
backtoTop.addEventListener("click",function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});