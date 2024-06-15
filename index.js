const inputText=document.querySelector('#inputBox');
const listContainer=document.querySelector('#listContainer');

function addTask(){
    if (inputText.value===''){
        alert("You Must Write Something!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML= inputText.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputText.value="";
    saveData();
}


listContainer.addEventListener("click", (e)=>
{
    if (e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

inputText.addEventListener("keydown", (e)=>{
    if (e.key==='Enter')
        {
            addTask();
        }
}
);

//save data
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML )
}

//showing data when browser is open
function showTask() {
    let savedData = localStorage.getItem("data");

    if (savedData && savedData.trim() !== "") {
        listContainer.innerHTML = savedData;
    } else {
        listContainer.innerHTML = ''; // Set an empty string if no valid data is found
    }
}

document.addEventListener("DOMContentLoaded", showTask);
