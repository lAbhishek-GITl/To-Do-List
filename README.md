The dependencies used here are: 
_______________________________

1. **body-parser**: A middleware for parsing the body of incoming request objects. It's used to handle data sent in POST requests. Note that in your code, you imported body-parser but didn't actually use it, since express.urlencoded is used instead.

2. **ejs**: A simple templating language that lets you generate HTML markup with plain JavaScript. You used it as the view engine for rendering dynamic content on the server-side.

3. **express**: A web framework for Node.js, designed for building web applications and APIs. It's used to create and configure your web server.

4. **mongoose**: An Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a straightforward, schema-based solution to model your application data. You used it to connect to your MongoDB database, define schemas, and create models for your tasks.


Install the dependencies with following command:
_______________________________________________

1. **Navigate to your project directory :** cd <path>
2. **Initialize a new Node.js project :** npm init -y
3. **Install the required dependencies :** npm install body-parser ejs express mongoose
4. **Start the server :** node app.js
