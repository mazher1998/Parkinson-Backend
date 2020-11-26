const mongoose=require("mongoose");
const ProfileSchema= new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    result:[
        {
            title:{
                type:String,
                requried:true
            },
            date:{
                type:Date,
                default:Date.now
            }
        }],

})
module.exports=Profile=mongoose.model('profile',ProfileSchema);