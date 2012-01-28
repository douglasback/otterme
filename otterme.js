var express = require("express");
var app = module.exports = express.createServer();
var otters = require("./otters").otters;
var hogan = require("express-hogan.js")

app.configure(function(){
    app.set('views', __dirname + '/views');
    app.register('.html', hogan);
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    return app.use(express.static(__dirname + '/static'));
});

app.get('/', function(req, res){
    res.contentType('text/html');
    res.send("Here be Otters");
});

app.get('/random', function(req, res){
    res.json(otters.random());
});

app.get('/plz', function(req, res){
    var photo = otters.random();
    return res.render('otter.html', {
        locals: {
            otter: photo.otter,
            credit: "Insert Credit Here",
            id: photo.id
            
        }
    });
});
app.get('/plz/:id', function(req, res){
    var photo = otters.fetch(req.param("id"));
    return res.render('otter.html', {
        locals: {
            otter: photo.otter,
            credit: "Insert Credit Here",
            id: photo.id
            
        }
    });
});

app.get('/count', function(req, res){
    res.json({ "otter_count" : otters.photos.length + 1 });
});
app.get('/bomb/:number', function(req,res){
    res.json(otters.bomb(req.param("number")));
});

var port = process.env.PORT || 3000;
app.listen(port);