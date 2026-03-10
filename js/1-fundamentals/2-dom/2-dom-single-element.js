

// document.getElementById();


// console.log(document.getElementById("task-title"));

const taskTitle = document.getElementById("task-title");

// Change style

taskTitle.style.backgroundColor = "blue";
taskTitle.style.color = "#ffffff";
taskTitle.style.padding = "10px";

// Change content
taskTitle.innerText = "Javid";
taskTitle.innerHTML = "<span>Javid</span>";

// console.log(
//     document.querySelector("#task-title"));
// const taskTitle1 = document.querySelector("#task-title");

// console.log(taskTitle1);

console.log(document.querySelector(".collection-item"));