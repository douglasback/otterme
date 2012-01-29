_ = require("underscore");

var otters = { };
otters.random = function(){
    var i = Math.floor(Math.random() * otters.collection.length);
    return { "otter" : otters.collection[i].photo, "id": i };
};

otters.fetch = function(i){
    return parseInt(i, 10) ? { "otter" : otters.collection[i].photo, "id" : i} : false;
};

otters.bomb = function(num){
    var payload = { "otter_payload" : [] },
        joy = num < otters.collection.length ? num : otters.collection.length,
        tmpOtters = otters.collection.slice(0,otters.collection.length);
        for (var i=0; i < joy; i++){
            payload.otter_payload.push(tmpOtters.splice([Math.floor(Math.random() * tmpOtters.length)], 1)[0].photo);
        }
    return payload.otter_payload.length > 0 ? payload : null;
};
otters.bombMongo = function(num, ott){
    var payload = { "otter_payload" : [] },
        joy = num < ott.length ? num : ott.length,
        tmpOtters = ott.slice(0,ott.length);
        for (var i=0; i < joy; i++){
            payload.otter_payload.push(tmpOtters.splice([Math.floor(Math.random() * tmpOtters.length)], 1)[0].photo);
        }
    return payload.otter_payload.length > 0 ? payload : null;
};
exports.otters = otters;