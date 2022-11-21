let toggleBurgerbar=document.getElementById("burgerbar-container");
let navigationToggle=document.getElementById("navigation");

toggleBurgerbar.addEventListener("click",()=>{
  toggleBurgerbar.classList.toggle("active");
  navigationToggle.classList.toggle("navactive");
})