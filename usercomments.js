let img=document.getElementById("img");
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
        img.src = element.picture.large;
        img.alt = "avatar of users";
    clientCountry.textContent=`${element.location.country}`
})
loadMore.addEventListener("click",function(){
    clientReviewContainer.innerHTML=" "
    request();
})
})     



