export default {
  model: 'post',
  namespace: '/post',
  options: {
    id: 'id',
    paginate: {
      default: 25,
      max: 50,
    },
  },
};
