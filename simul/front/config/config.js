const production = process.env.NODE_ENV === 'production';
module.exports = {
  backURL: production ? 'https://api.grah.shop' : 'http://localhost:3065',
};
