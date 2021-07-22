//Import modules
const express = require("express");
const morgan = require("morgan");

//Importing Routers
const breweriesRouter = require("./resources/breweries/router")
const toursRouter =  require("./resources/tours/router")

const app = express();
const port = 4001;


//Decalre middleware
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/breweries", breweriesRouter)
app.use("/tours", toursRouter)

//Initialise the server
app.listen(port, (req, res) => {
	console.log(`Server running  on http://localhost:${port}`);
});
