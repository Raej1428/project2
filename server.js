// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var mysql = require("mysql");
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;
var connection = mysql.createConnection(process.env.JAWSDB_URL);
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});
// Requiring our models for syncing
var db = require("./models");
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static(__dirname + '/public/'));

// Routes
// =============================================================
require("./routes/html-routes.js")(app);
require("./routes/chef-api-routes.js")(app);
require("./routes/recipes-api-routes.js")(app);
require("./routes/comment-api-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});