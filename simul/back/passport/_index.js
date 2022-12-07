const passport = require('passport');
const { User } = require('../models');
const local = require('./local');

module.exports = () => {
  // /routes/user.js에서 받아온 정보
  passport.serializeUser((user, done) => {
    //서버쪽에 [{id:1, cookie: 'clhxy'}]
    done(null, user.id); //세션에 저장할 정보가 너무 많으므로 id만 기억
  });
  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findOne({ where: { id } }); //id를 통해 db정보 열람
      done(null, user);
    } catch (error) {
      console.error(error);
      done(error);
    }
  });
  local();
};
