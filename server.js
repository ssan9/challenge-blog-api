// import the following
const express = require('express');
const morgan = require('morgan');

const app = express();

const blogpostsRouter = require('./blogpostsRouter');

// log the http layer
app.use(morgan('common'));

// when request come into `/blogposts`, we'll
// route them to the express router instances
// we have imported. Remember, these router 
// instances act as modular, mini-express apps.
app.use('/blog-posts', blogpostsRouter);

app.listen(process.env.PORT || 8080, () => {
	console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});