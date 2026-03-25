
// Define a UI Vars

const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#search");


// Load all event listerners

function loadEventListerners() {

    // Add task event
    form.addEventListener("submit", addTask);

    // Clear task lists
    clearBtn.addEventListener("click", clearTask);

    // Remove task list
    taskList.addEventListener("click", removeTask);

    // Filter task event
    filter.addEventListener("keyup", filterTasks);


}



loadEventListerners();


function addTask(e) {
    e.preventDefault();


    if (taskInput.value === "") {
        alert("Please fill the form");
    } else {

        // Create element
        const li = document.createElement("li");

        // Add class
        li.className = "collection-item";

        // Add a inner text
        li.innerText = taskInput.value;

        // Create a new link element
        const link = document.createElement("a");

        // Add class to link
        link.className = "delete-item secondary-content";

        // Add a icon into link
        link.innerHTML = `<i class="fa fa-remove"></i>`;

        // Add a link to li
        li.appendChild(link);

        // Add a li to ul
        taskList.appendChild(li);

    }
}

function removeTask(e) {

    // if(e.target.parentElement.className === "delete-item secondary-content"){
    //     if(confirm("Are you sure?")){
    //         e.target.parentElement.parentElement.remove();
    //     } 
    // }

    if (e.target.parentElement.classList.contains("delete-item")) {
        if (confirm("Are you sure?")) {
            e.target.parentElement.parentElement.remove();
        }
    }

}


function clearTask() {

    // taskList.innerHTML = "";

    const listItems = Array.from(taskList.children);

    console.log(listItems);

    listItems.forEach(function (li, index, arr) {
        li.remove();
    })

}

function filterTasks(e){

    const text = e.target.value.toLowerCase();
 
    document.querySelectorAll(".collection-item").forEach(function(task){
        
        const item = task.innerText;

        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = "block";
        }else{
            task.style.display = "none";
        }

    })

}



// const arr = ["Hello", "Hai", "Bruh"];

// console.log(arr.indexOf("vanakam"));

