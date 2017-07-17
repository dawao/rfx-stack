import mongoose from 'mongoose';
var DataSource = require('loopback-datasource-juggler').DataSource;
// export function connector(config) {
//   const { host, port, name } = config;
//   const uri = ['mongodb://', host, ':', port, '/', name].join('');
//   mongoose.Promise = global.Promise;
//   return mongoose.connect(uri);
// }

export function connector(config) {
  const { host, port, name } = config;
  return new DataSource({
    connector: require('loopback-connector-mongodb'),
    host: host,
    port: port,
    database: name
  });
}
/* MongoDB connector Example
var ds = new DataSource({
    connector: require('loopback-connector-mongodb'),
    host: 'localhost',
    port: 27017,
    database: 'mydb'
});
*/