
var express = require("express"),
    app = module.exports = express.createServer(),
    otters = require("./otters").otters,
    hogan = require("express-hogan.js"),
    models = require("./app/database.js"),
    mongoose = require('mongoose'),
    db,
    Otter;


app.configure(function(){
    app.set('views', __dirname + '/views');
    app.register('.html', hogan);
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    return app.use(express.static(__dirname + '/static'));
});



app.configure('production', function(){
    app.set('db-url', process.env.MONGOHQ_URL);
});
app.configure('dev', function(){
    app.set('db-url', process.env.OTTER_MONGO);
});


models.defineModels(mongoose, function(){
    app.Otter = Otter = mongoose.model('Otter');
    db = mongoose.connect(app.set('db-url'));
});




app.get('/', function(req, res){
    res.send("Here be otters");
});


app.get('/plz', function(req, res){
    otters.random(Otter, function(err, data){
        var otter = data.map(function(d){
            return { "otter"    : d.photo,
                     "credit"   : d.credit };
        });
        console.log(otter);
        return res.render('otter.html', {
            locals: {
                otter: otter[0].otter,
                credit: otter[0].credit,
            }
        });
    });
});
app.get('/plz/:id', function(req, res){
    var photo = otters.fetch(req.param("id"));
    return res.render('otter.html', {
        locals: {
            title: "Otter " + photo.id,
            otter: photo.otter,
            credit: "Insert Credit Here",
            id: photo.id
            
        }
    });
});


// ==================
// = API v1 Methods =
// ==================
app.get('(?:/api/v1)?/random', function(req, res){
    otters.random(Otter, function(err, data){
        var otter = data.map(function(d){
            return { "otter"    : d.photo,
                     "credit"   : d.credit };
        });
        res.json(otter[0]);
    });
});
app.get('(?:/api/v1)?/count', function(req, res){
    Otter.count({}, function(err, c){
        res.json({ "otter_count" : c });
    });
});
app.get('(?:/api/v1)?/bomb/:number', function(req,res){
    Otter.find({}, function(err, data){
        res.send(otters.bomb(req.param("number"), data));
    });
});

var port = process.env.PORT || 3000;
app.listen(port);