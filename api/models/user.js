var mongoose = require('mongoose');

var Schema = mongoose.Schema
var UserSchema = new Schema(
  {
    email: {type: String, required: true,min :3, max: 100},
    password : {type:String,required:true,min:3,max:100},
    firstname:{type:String},
    lastname:{type:String}
  },
  {
    toJSON: {
    virtuals: true 
    }
  });


// Virtual for author's URL
UserSchema
.virtual('url')
.get(function () {
  return ('/user/' + this._id);
});

//Export model
module.exports = mongoose.model('user',UserSchema)