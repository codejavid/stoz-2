

// Two Phases

// 1 - Creatation
// 2 - Excutation


// Function statement 


function greet(firstName = "Jhon", lastName = "Doe"){


    // Default parameter

    // if(typeof firstName === "undefined"){
    //     firstName = "John"
    // }

    // if(typeof lastName === "undefined"){
    //     lastName = "Doe"
    // }

    return `${firstName} ${lastName}`;
}


console.log(greet("Jagan", "Javid"));

// Function expression

const add = function(x,y){
    // return x + y;
    return x + y;
}


console.log(add(5, 5));


