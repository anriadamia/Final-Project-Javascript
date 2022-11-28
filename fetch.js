const result=document.getElementById("results");
const filter=document.getElementById("filter");
const listItems= [];

getData();

async function getData(){
    const res=await fetch ("https://randomuser.me/api/?results=10")
    const {results}=await res.json()

   result.innerHTML=" "

   results.forEach(members => {
    const li=document.createElement("li")
    listItems.push(li)
    li.innerHTML=`
    <img src="${members.picture.large}" alt=${members.name.first}"
    <div class="members-info">
    <h4>${members.name.first} ${members.name.last}</h4>
    </div>
    `
    result.appendChild(li)
   });
}

function filterData(searchItem){
    listItems.forEach(item =>{
        if(item.innerText.toLowerCase().includes(searchItem.toLowerCase())){
            item.classList.remove("hide")
        }else{
            item.classList.add("hide")
        }
    })
}


filter.addEventListener("keyup",(element) =>filterData(element.target.value))