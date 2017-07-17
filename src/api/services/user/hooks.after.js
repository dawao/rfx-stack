import hooks from 'feathers-hooks';
const { remove } = require('feathers-hooks-common');

/**
  Hook: after
  Service: user
*/
export default {
  all: [
    remove('__v', 'password')
  ],
  find: [
  ],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: [],
};
