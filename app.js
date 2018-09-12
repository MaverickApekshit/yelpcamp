var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
	res.render("landing");
});

app.get("/campgrounds", function(req, res){
	var campgrounds = [
		{name: "Salmon Creek", image: "https://recreation-acm.activefederal.com/assetfactory.aspx?did=7656"},
		{name: "Granite Hill", image: "https://recreation-acm.activefederal.com/assetfactory.aspx?did=6857"},
		{name: "Mountain Goat's Rest", image: "https://cdn.vox-cdn.com/thumbor/1j72cfH6ka3baNiIvbstiHQbnfo=/0x0:5225x3479/920x613/filters:focal(2195x1322:3031x2158):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/54137643/camping_tents.0.jpg"}
	]

	res.render("campgrounds");
});

app.listen(3000, '127.0.0.1', function(){
	console.log("The YelpCamp server has started!");
});