var friends = require("./friends.js");
var htmlRoutes = require(".app/server.js");

// Create New Reservations - takes in JSON input
app.post("/api/new", function(req, res) {
  var addEntry = req.body;
  addEntry.routeName = addEntry.userName;

  console.log(addEntry);

        var test = friends.userEntries.push(userSurveySubmission);

    // posts the object to the json files.
    res.json(addEntry);
})

