_ = require("underscore");

var otters = { "collection": [
    {
        "photo" :  "http://dl.dropbox.com/u/14236910/otters/848px-LutraCanadensis_fullres.jpg",
        "credit" : null,
        "notes" : null,
        "id" : 1
    },
    {
        "photo" :  "http://dl.dropbox.com/u/14236910/otters/bTol3.jpg",
        "credit" : null,
        "notes" : null,
        "id" : 2
    },
    {
        "photo" :  "http://dl.dropbox.com/u/14236910/otters/enhanced-buzz-440-1305902425-8.jpg",
        "credit" : null,
        "notes" : null,
        "id" : 3
    },
    {
        "photo" :  "http://dl.dropbox.com/u/14236910/otters/Milo-and-Tanu-Otters-rafting-holding-hands-John-Healey-110803_DSC6427-750x440.jpg",
        "credit" : null,
        "notes" : null,
        "id" : 4
    },
    {
        "photo" :  "http://dl.dropbox.com/u/14236910/otters/PamYM.jpg",
        "credit" : null,
        "notes" : null,
        "id" : 5
    },
    {
        "photo" :  "http://dl.dropbox.com/u/14236910/otters/September-01-2011-22-25-00-photo.jpeg",
        "credit" : null,
        "notes" : null,
        "id" : 6
    },
    {
        "photo" :  "http://dl.dropbox.com/u/14236910/otters/tumblr_lxoxhwkWIq1qzs75go1_500.jpg",
        "credit" : null,
        "notes" : null,
        "id" : 7
    },
    {
        "photo" :  "http://dl.dropbox.com/u/14236910/otters/utI2U.jpg",
        "credit" : null,
        "notes" : null,
        "id" : 8
    },
    {
        "photo" :  "http://utterlycute.com/wp-content/uploads/2011/09/Otters.jpg",
        "credit" : null,
        "notes" : null,
        "id" : 9
    },
    {
        "photo" :  "http://chelseasthoughts.files.wordpress.com/2010/12/otters.jpg",
        "credit" : null,
        "notes" : null,
        "id" : 10
    },
    {
        "photo" :  "http://www.kindredspiritsproject.com/wp-content/uploads/2011/05/Sea_otters_holding_hands.jpg",
        "credit" : null,
        "notes" : null,
        "id" : 11
    },
    {
        "photo" :  "http://www.factzoo.com/sites/all/img/mammals/north_american_river_otter_face.jpg",
        "credit" : null,
        "notes" : null,
        "id" : 12
    },
    {
        "photo" :  "http://www.otterproject.org/atf/cf/%7B1032ABCB-19F9-4CB6-8364-2F74F73B3013%7D/Otter_Image1.jpg",
        "credit" : null,
        "notes" : null,
        "id" : 13
    },
    {
        "photo" :  "http://www.eaglewingtours.com/userimages/Image/sea-otter.jpg",
        "credit" : null,
        "notes" : null,
        "id" : 14
    },
    {
        "photo" :  "http://www.otterproject.org/atf/cf/%7B1032ABCB-19F9-4CB6-8364-2F74F73B3013%7D/OTTER02.JPG",
        "credit" : null,
        "notes" : null,
        "id" : 15
    },
    {
        "photo" :  "http://www.splashswimschool.com/Portals/81129/images/RIver%20Otter-resized-600.jpg",
        "credit" : null,
        "notes" : null,
        "id" : 16
    }
]};

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
exports.otters = otters;