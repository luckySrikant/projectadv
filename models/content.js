let mongoose=require('mongoose');
let contentschema=mongoose.Schema({
    author:{
        type:String,
        required:true
    }
});
let content=module.exports=mongoose.model('content',contentschema);