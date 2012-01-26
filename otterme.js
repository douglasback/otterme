var app = require("express").createServer();
var otters = require("./otters").otters;

otters.random = function(){
    return { "otter" : otters.photos[Math.floor(Math.random() * otters.photos.length)] };
};

otters.bomb = function(){
    
}

app.get('/', function(req, res){
    res.contentType('text/html');
    res.send("Here be Otters");
});

app.get('/random', function(req, res){
    res.contentType('application/json');
    res.send(otters.random());
});

app.get('/plz', function(req, res){
    res.contentType('text/html');
    res.send("<img src='" + otters.random().otter + "' alt='An otter!' />");
});


app.get('/count', function(req, res){
    res.contentType('application/json');
    res.send({ "otter_count" : otters.photos.length + 1 });
});
app.get('/bomb/:number', function(req,res){
    
});

var port = process.env.PORT || 3000;
app.listen(port);