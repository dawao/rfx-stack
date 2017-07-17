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
  uuid: { type: String, id: true, required: true, unique: true },
  title: {type: String, length: 255},
  //content: {type: ModelBuilder.Text},
  // date: {type: Date, default: function() {
  //   return new Date();
  // }},
  timestamp: {type: Number, default: Date.now},
  completed: {type: Boolean, default: false, index: true}
});