import hooks from 'feathers-hooks';
const { remove } = require('feathers-hooks-common');
/**
  Hook: after
  Service: post
*/
export default {
  all: [
    remove('__v', '_id')
  ],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: [],
};
