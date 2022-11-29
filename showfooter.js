const footerContainer=document.querySelectorAll(".footerContainer");
// const arrow=document.querySelectorAll(".fa-angle-down")

footerContainer.forEach(item=>{
    item.addEventListener("click",function(){
        this.classList.toggle("footeractive");
    })
})

