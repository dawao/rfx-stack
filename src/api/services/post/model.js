import mongoose, { Schema } from 'mongoose';

var ModelBuilder = require('loopback-datasource-juggler').ModelBuilder;

// const PostSchema = new Schema(
//   {
//     uuid: { type: String, required: true, unique: true },
//     title: { type: String, required: true },
//     completed: { type: Boolean, default: false },
//   },
//   {
//     timestamps: true, // Will automatically create and update updatedAt and createdAt Fields
//   });

// export default mongoose.model('post', PostSchema);
var modelBuilder = new ModelBuilder();
// define models
export default modelBuilder.define('posts', {
  id: { type: String, id:true, unique: true },
  uuid: { type: String, unique: true },
  title: { type: String, length: 255, required: true},
  //content: {type: ModelBuilder.Text},
  createdAt: { type: Date, default: function() {
    return new Date();
  }},
  updatedAt: { type: Date, default: function() {
    return new Date();
  }},
  completed: {type: Boolean, default: false, index: true}
});