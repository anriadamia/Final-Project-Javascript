"use strict"
const footerContainer=document.querySelectorAll(".footerContainer");


footerContainer.forEach(item=>{
    item.addEventListener("click",function(){
        this.classList.toggle("footeractive");
    })
})

