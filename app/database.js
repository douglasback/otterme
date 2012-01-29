var Otter;
    
function defineModels(mongoose, callback){
    var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
    
    OtterSchema = new Schema({
        "photo"     : String,
        "credit"    : String,
        "notes"     : String,
        "key"       : Number,
        "random"    : Number
        

    });
    

    OtterSchema.virtual('id').get(function() {
        return this._id.toHexString();
    });

    mongoose.model('Otter', OtterSchema);
    
    callback.call();

}


exports.defineModels = defineModels;