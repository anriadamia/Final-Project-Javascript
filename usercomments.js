   let clientImage=document.getElementById("clientReviewImage");
let clientName=document.getElementById("clientName");
let clientCountry=document.getElementById("clientCountry");

let request=new XMLHttpRequest();
request.open("GET","https://randomuser.me/api/");
request.send()
request.addEventListener("load",function(){

let answerText=this.responseText;
let answerJs=JSON.parse(answerText);
answerJs.results.forEach(element => {
    clientName.textContent=`${element.name.first} ${element.name.last}`
    let img=document.createElement("img")
        img.src = element.picture.large;
        img.alt = "avatar of users";
    clientCountry.textContent=`${element.location.country}`
    clientImage.appendChild(img)
})
})     



