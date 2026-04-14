
const posts = [
    {title:"Post one"},
    {title:"Post two"},
];


function createPost(post){

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            posts.push(post);

            const error = true;

            if(!error){
                resolve();
            }else{
                reject("Something went worng");
            }

        }, 2000)
    });


}


function getPosts(){
    setTimeout(() => {
   
        let output = "";

        posts.forEach(function(post){
            output += `<li>${post.title}</li>`
        })

        document.body.innerHTML = output;

    }, 1000)
};

createPost({title:"Post three"})
.then(getPosts)
.catch((err) => {
    document.body.innerHTML = err;
})

