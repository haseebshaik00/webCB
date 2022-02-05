const fs = require('fs');

fs.writeFile(__dirname + "/myFile.txt", "haseeb", function(err){
    if(err) throw err;
    console.log("wrote the file successfully");
})

fs.readFile(__dirname + "/myFile.txt", function(err, data){
    if(err) throw err;
    console.log(data); // gives binary data of the file
    console.log(data.toString());
})