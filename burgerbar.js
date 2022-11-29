"use strict"
let toggleBurgerbar=document.getElementById("burgerbar-container");
let navigationToggle=document.getElementById("navigation");
let main=document.querySelector("main");
let footer=document.querySelector("footer")

toggleBurgerbar.addEventListener("click",()=>{
  toggleBurgerbar.classList.toggle("active");
  navigationToggle.classList.toggle("navactive");
 main.classList.toggle("disable");
 footer.classList.toggle("disable");
})