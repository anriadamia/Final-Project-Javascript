"use strict"
const accordion=document.querySelectorAll(".accordionContainer");


accordion.forEach(item=>{
    item.addEventListener("click",function(){
        this.classList.toggle("active");
       
    })
})

