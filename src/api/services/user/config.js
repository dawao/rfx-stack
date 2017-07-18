export default {
  model: 'user',
  namespace: '/user',
  options: {
    id: 'id',
    paginate: {
      default: 25,
      max: 50,
    },
  },
};
