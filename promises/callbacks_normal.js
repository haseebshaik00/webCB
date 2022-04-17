// normal server functioning
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
    setTimeout( ()=> {
        posts.push(post);
    }, 2000);
}

getPost(); // here setTimeout acts like a server, when this is called createPost is not called yet, so post3 isn't printed
createPost({title: "post3", body: "Hey"});
getPost(); // but when this is called createPost has created a new post and hence post3 is printed


