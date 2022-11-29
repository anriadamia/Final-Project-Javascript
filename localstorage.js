"use strict"
const cookieWrapper=document.querySelector(".cookie-wrapper");
const cookieButton=document.querySelector(".cookiebtn")

cookieButton.addEventListener("click",function(){
    cookieWrapper.classList.remove("active");
    localStorage.setItem("cookieDisplayed","true")
});

setTimeout(()=>{
    if(!localStorage.getItem("cookieDisplayed"))
    cookieWrapper.classList.add("active")
},2000);

