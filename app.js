const count = document.getElementById("count")
const elementCounter = document.getElementById("elementCounter")
let counter = 0;


count.addEventListener('click',()=>{
    elementCounter.innerHTML = counter++ 
})