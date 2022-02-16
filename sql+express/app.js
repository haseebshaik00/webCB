const express = require('express'),
      app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set("view engine", "hbs");
app.set();


app.listen(4444, () => {
    console.log("server started");
})