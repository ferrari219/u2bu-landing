const { createWrapper } = require('next-redux-wrapper');

const isDev = process.env.NODE_ENV === 'development';
const createStore = () => {};
const wrapper = createWrapper(createStore, { debug: isDev });
