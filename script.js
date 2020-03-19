var button = document.getElementById("button");
var userinput = document.getElementById("userInput");
var ul = document.querySelector("ul");
var deleting = document.getElementById("delete");

//get the length of the userinput so we check it later...
function inputLength(){
    return userinput.value.length;
}
//add value to the shopping list
function addToList(){
    if (inputLength() > 0){
        var li = document.createElement("li");
        li.setAttribute("class","liste");
        li.appendChild(document.createTextNode(userinput.value));
        ul.appendChild(li);
        //create delete btn for each list we add
        var deletebtn = document.createElement("button");
        deletebtn.className = "delete";
        deletebtn.setAttribute("id","delete");
        deletebtn.innerHTML = "x";
        li.appendChild(deletebtn);
        // create done btn for each list we add
        var donebtn = document.createElement("button");
        donebtn.className = "done";
        donebtn.innerHTML = "done";
        li.appendChild(donebtn);
        userinput.value ="";
    }
}

//the function to delete an added list

function deletingElement(element){
    if(element.target.classList.contains("delete")){
        if(confirm("Are you sure?")){
            let li = element.target.parentElement;
            ul.removeChild(li);
        }
    }
}

//the function to show that the element is done
function elementIsDone(element){
    var check = false;
    if(element.target.classList.contains("done")){
        let li = element.target.parentElement;
        check = true;
        li.classList.toggle("toggle");
        
    }
}

// Event when we click the Enter button
button.addEventListener("click",addToList);
//Event when we click the deletebtn
ul.addEventListener('click',deletingElement);
//Event when we click the done button
ul.addEventListener('click',elementIsDone);