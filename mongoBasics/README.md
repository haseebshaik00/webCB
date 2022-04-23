### to see if mongo is working or not
localhost:27017
It looks like you are trying to access MongoDB over HTTP on the native driver port.


### mongod & mongo
mongod is the primary daemon process for the MongoDB system. It handles data requests, manages data access, and performs background management operations.

mongod is the "Mongo Daemon" it's basically the host process for the database. When you start mongod you're basically saying "start the MongoDB process and run it in the background". mongod has several default parameters, such as storing data in /data/db and running on port 27017.

mongo is the command-line shell that connects to a specific instance of mongod. When you run mongo with no parameters it defaults to connecting to the localhost on port 27017. If you run mongo against an invalid machine:port combination then it will fail to connect (and tell you as much).