// using getpost as a callback
posts = [{title: "post1", body: "Hey"}, 
        {title: "post2", body: "Hi!"}];

getPost = () => {
    setTimeout( ()=> {
        posts.forEach( (e) => {
            console.log(e.title);
        });
    }, 2000);
};

createPost = (post, callback) => {
    setTimeout( ()=> {
        posts.push(post);
        callback();
    }, 2000);
}

createPost({title: "post3", body: "Hey"}, getPost);
// here first the post is created then the getpost function is used in the callback
