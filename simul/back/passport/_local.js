const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');
const bcrypt = require('bcrypt');
const { User } = require('../models');

module.exports = () => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: 'email', //id자리
        passwordField: 'password', //pw자리
      },
      async (email, password, done) => {
        //위에서 정한 id, pw 값을 함수로 정한다.
        try {
          //1.이메일 있는지 검사
          const user = await User.findOne({
            where: { email }, //email로 회원인지 체크
          });
          //1-1.해당 이메일이 없으면
          if (!user) {
            return done(null, false, { reason: '존재하지 않는 이메일입니다.' });
            //done(서버에러, 성공, 클라이언트에러<보내는 쪽에서 뭔가 잘못 보낼때>);
          }

          //2.비밀번호 비교
          const result = await bcrypt.compare(password, user.password); //입력된 비밀번호 서버 저장 비밀번호랑 비교 true/false
          if (result) {
            //2-1.일치 할경우
            return done(null, user); //2번째값에 사용자 정보 넣어줌
          }
          //2-2.불일치
          return done(null, false, { reason: '비밀번호가 틀렸습니다.' });
        } catch (error) {
          console.error(error);
          return done(error);
        }
      }
    )
  );
};
