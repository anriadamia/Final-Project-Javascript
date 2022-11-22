let toggleBurgerbar=document.getElementById("burgerbar-container");
let navigationToggle=document.getElementById("navigation");
let main=document.querySelector("main");

toggleBurgerbar.addEventListener("click",()=>{
  toggleBurgerbar.classList.toggle("active");
  navigationToggle.classList.toggle("navactive");
 main.classList.toggle("disable");
})