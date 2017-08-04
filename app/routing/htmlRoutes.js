var path = require("path");

module.exports = function(app) {
	// Basic route that sends the user first to the AJAX Page
	app.get("/", function(req, res) {
	  res.sendFile(path.join(__dirname, "../public/home.html"));
	});

	app.get("/survey", function(req, res) {
	  res.sendFile(path.join(__dirname, "../public/survey.html"));
	});

	app.get("/main.js", function(req, res) {
	  res.sendFile(path.join(__dirname, "../public/main.js"));
	});

	app.get("/style.css", function(req, res) {
	  res.sendFile(path.join(__dirname, "../public/style.css"));
	});

	app.get("/match", function(req, res) {
	  res.sendFile(path.join(__dirname, "../public/match.html"));
	});
}

