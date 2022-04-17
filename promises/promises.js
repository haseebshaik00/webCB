// promises : used with fetch apis, axios, mongoose e.t.c
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

createPost({title: "post3", body: "Hey"})
    .then(getPost)
    .catch((e) => console.log(e));
