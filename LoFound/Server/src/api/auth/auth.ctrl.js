const models = require('../../models');
const tokenLib = require('../../lib/token');

exports.login = async (ctx) => {
  const { id, pw } = ctx.request.body;
  if(!id || !pw){
    console.log(`${id}  ${pw}`);
    ctx.status = 400;
    ctx.body = {
      status: 400,
      message: '아이디와 비밀번호를 전송하십시오.',
    };

    return;
  }

  const memberResult = await models.member.getMemberLogin(id, pw);
  if(!memberResult){
    ctx.status = 450;
    ctx.body = {
      status: 450,
      message: '아이디 또는 비밀번호가 일치 하지 않습니다.',
    };

    return;
  }

  const token = await tokenLib.createToken(memberResult.id, memberResult.auth);
  const refreshToken = await tokenLib.createRefreshToken(memberResult.id, memberResult.auth);

  ctx.status = 200;
  ctx.body = {
    status: 200,
    message: '로그인 성공!',
    token,
    refresh_token: refreshToken,
  };

  return;
}