"use strict";

// Requires
const express         = require('express');
const app             = express();
const http 			  = require("http").Server(app);
const port            = process.env.PORT || 1337;
const morgan          = require('morgan');
const mongoose        = require('mongoose');
const bodyParser      = require('body-parser');
const methodOverride  = require('method-override');

// Allow headers / datatypes etc to be set
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.urlencoded({extended: true}));               // parse application/x-www-form-urlencoded
app.use(bodyParser.text());                                     // allows bodyParser to look at raw text
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));  // parse application/vnd.api+json as json
app.use(methodOverride());


/*
const db = "mongodb://127.0.0.1/vueTest";

mongoose.connect(db, function(error, response){
	if (error){
		console.log("error: " , error);
	} 
	else {
		console.log("connected to ", db);
	}
});

*/

// Expose the jspm packages + config as well as the client front-end
app.use('/jspm_packages',  express.static(__dirname + '/jspm_packages'));
app.use("/config.js", express.static(__dirname + "/config.js"));
app.use(express.static(__dirname + "/client"));


// Routes
// ------------------------------------------------------
//require('./backend/routes.js')(app);


// Start
// -------------------------------------------------------
http.listen(port, () => {

	console.log("Server is alive on port " + port);

})