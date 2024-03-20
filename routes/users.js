const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/FinalPinterest");
  const userScheema = mongoose.Schema({
  username:String,
  name:String,  
  email: String,
  contact:Number,
  password:String,
  profileImage:String,
  boards:{
    type:Array,
    default:[]
  },
  posts:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"post"
  }]

});
userScheema.plugin(plm);

module.exports = mongoose.model("user",userScheema);