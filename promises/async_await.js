// promises with async await
// The keyword async before a function makes the function return a promise:

posts = [{title: "post1", body: "Hey"}, 
        {title: "post2", body: "Hi!"}];

getPost = () => {
    setTimeout( ()=> {
        posts.forEach( (e) => {
            console.log(e.title);
        });
    }, 2000);
};

createPost = (post) => {
    return new Promise((resolve, reject) => {
        setTimeout( ()=> {
            posts.push(post);
            const error = false;
            if(error) {
                resolve();
            }
            else {
                reject("Something went wrong!");
            }
        }, 2000);
    });
}

async function init() {
    // add try catch block for await
    try{
        await createPost({title: "post3", body: "Hey"});
        getPost();
    }
    catch (error) {
        console.log(error);
    }
    //  or do this
    // log the error on the parent
    // await b().catch((err)=>console.log('b.failed'))
}

init();
