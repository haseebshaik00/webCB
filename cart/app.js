const express = require('express'),
      app = express(),
      path = require('path');

app.use('/', express.static(path.join(__dirname, 'public')));

app.listen(3137, () => {
    console.log("server started at https://localhost:3137")
})