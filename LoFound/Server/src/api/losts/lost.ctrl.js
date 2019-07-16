const models = require('../../models');
const validation = require('../../lib/validation');

exports.getLosts = async (ctx) => {
  const result = await models.losts.findAll({
    where: {
      isCompleted: false,
    }
  });

  ctx.status = 200;
  ctx.body = {
    status: 200,
    message: '성공적으로 조회하였습니다.',
    data: result,
  };

  return;
}

exports.addLosts = async (ctx) => {
  const { body } = ctx.request;
  try {
    validation.validateLost(body);
  } catch (err) {
    ctx.status = 400;
    ctx.body = {
      status: 400,
      message: '검증 오류.',
    };
  }

  const createLost = async (body) => {
    const { memberId } = ctx.decoded;
    const { title, content } = body;

    const result = await models.losts.create({
      memberId, title, content,
      isCompleted: false,
    });

    return result.idx;
  }

  if(body.picture){
    let validate = true;
    for(let index = 0; index < body.picture.length; index++){
      try {
        validation.validateLostFile(body.picture[index]);
      } catch (err){
        ctx.status = 400;
        ctx.body = {
          status: 400,
          message: '파일 검증 오류',
        };

        validate = false;
        break;
      }
    }

    if(validate){
      const LFindex = createLost(body);
      for(let index = 0; index < body.picture.length; index++){
        const { type, uploadName } = body.picture[index];
        models.lostfoundfile.create({
          lostIdx: LFindex,
          type, uploadName,
        });
      }
    }
  }

  createLost(body);

  ctx.status = 200;
  ctx.body = {
    status: 200,
    message: '성공적으로 분실이 작성되었습니다.',
  }
}
