var otters = { };

otters.random = function(Model, callback){ //
    return Model.count({}, function(err, count){
        var i = Math.floor(Math.random() * count);
        Model.where({})
        .select()
        .skip(i)
        .limit(1)
        .run(function(err, data){
            callback(err, data);
        });
    });
};

otters.bomb = function(num, ott){
    var payload = { "otter_payload" : [] },
        joy = num < ott.length ? num : ott.length,
        tmpOtters = ott.slice(0,ott.length);
        for (var i=0; i < joy; i++){
            payload.otter_payload.push(tmpOtters.splice([Math.floor(Math.random() * tmpOtters.length)], 1)[0].photo);
        }
    return payload.otter_payload.length > 0 ? payload : null;
};
exports.otters = otters;