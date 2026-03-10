

// document.getElementsByClassName();

// const items = document.getElementsByClassName("collection-item"); // HTMLCOLLECTION


// console.log(items);

// console.log(items[0]);
// console.log(items[1]);

// items[0].style.color = "blue";

// console.log(Array.isArray(items));

// for(let i = 0; i < items.length; i++){
//     items[i].style.color = "blue";
// }

// items.forEach(function(item){
//     console.log(item);
// })

// Convert HTMLcolletion to array

// let lists = Array.from(items);

// lists.forEach(function(li){
//     li.style.color = "green"
// })


// const arr = [1,2,3];


// arr.forEach(function(num, index, orgArray){
//     console.log(`${num} - ${index}`);
//     console.log(orgArray);
// })


const listItems = document.querySelectorAll(".collection-item"); // Nodelist

listItems.forEach(function(li){
     li.style.color = "green"
})

