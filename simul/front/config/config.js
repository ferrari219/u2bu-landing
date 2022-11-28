const prod = process.env.NODE_ENV === 'production';
module.exports = {
  backURL: prod ? 'https://api.grah.shop' : 'http://localhost:3065',
};
