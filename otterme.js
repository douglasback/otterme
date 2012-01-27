var app = require("express").createServer();
var otters = require("./otters").otters;

otters.random = function(){
    return { "otter" : otters.photos[Math.floor(Math.random() * otters.photos.length)] };
};

otters.bomb = function(num){
    var payload = { "otter_payload" : [] },
        joy = num < otters.photos.length ? num : otters.photos.length,
        tmpOtters = otters.photos.slice(0,otters.photos.length);
    
        for (var i=0; i < joy; i++){
            payload.otter_payload.push(tmpOtters.splice([Math.floor(Math.random() * tmpOtters.length)], 1)[0]);
        }
    return payload.otter_payload.length > 0 ? payload : null;
};

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
    res.contentType('application/json');
    res.send(otters.bomb(req.param("number")));
    console.log("Length of otters: " + otters.photos.length);
});

var port = process.env.PORT || 3000;
app.listen(port);