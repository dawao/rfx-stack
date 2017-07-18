import mongoose from 'mongoose';
var ModelBuilder = require('loopback-datasource-juggler').ModelBuilder;
// const Schema = mongoose.Schema;

// export default mongoose.model('user',
//   new Schema({
//     uuid: { type: String, required: true, unique: true },
//     email: { type: String, required: true, unique: true },
//     username: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//     createdAt: { type: Date, default: Date.now },
//     updatedAt: { type: Date, default: Date.now },
//   }));

var modelBuilder = new ModelBuilder();
// define models
export default modelBuilder.define('users', {
  uuid: { type: String, id: true, unique: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: {type: Date, default: function() {
    return new Date();
  }},
  updatedAt: { type: Date, default: function() {
    return new Date();
  }}
});