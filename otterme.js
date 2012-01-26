var app = require("express").createServer();
var otters = require("./otters").otters;

otters.random = function(){
    return { "otter" : otters.photos[Math.floor(Math.random() * otters.photos.length)] };
}

app.get('/', function(req, res){
    res.contentType('text/plain');
    res.send("Here be Otters");
});
app.get('/random', function(req, res){
    res.contentType('application/json');
    res.send(otters.random());
});


app.get('/count', function(req, res){
    res.contentType('text/plain');
    res.send("Here be " + otters.photos.length + " otters.");
});

var port = process.env.PORT || 3000;
app.listen(port);