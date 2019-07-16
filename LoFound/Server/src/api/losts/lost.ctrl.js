const models = require('../../models');
const validation = require('../../lib/validation');
const serverIp = require('../../../config/base').ip;
const { asyncForeach } = require('../../lib/method');

exports.getLosts = async (ctx) => {
  const result = await models.losts.findAll({
    where: {
      isCompleted: false,
    },
    raw: true,
  });

  await asyncForeach(result, async (resultValue) => {
    let { idx } = resultValue;
    const fileResult = await models.lostfile.findAll({
      where: {
        lostIdx: idx,
      },
      raw: true,
    });

    await asyncForeach(fileResult, (fileElement) => {
      const uploadName = fileElement.uploadName;
      let fileType = fileElement.type;

      if (fileType.startsWith('.')) {
        fileType = fileType.substring('1', fileType.length);
      }
      if (String(fileType).toLowerCase() === 'jpg') {
        fileType = 'jpeg';
      } else {
        fileType = String(fileType).toLowerCase();
      }

      const fileExtIndex = uploadName.indexOf('.');
      const thumbnailName = `${uploadName.slice(0, fileExtIndex)}_thumbnail${uploadName.slice(fileExtIndex)}`;
      const thumbnailUrl = `http://${serverIp}:7777/image/${fileType}/${thumbnailName}`;
      const url = `http://${serverIp}:7777/image/${fileType}/${uploadName}`;

      delete fileElement.lostIdx;
      fileElement.thumbnail = thumbnailUrl;
      fileElement.type = fileType;
      fileElement.url = url;
    });

    // 파일이 존재 한다면, Data 에 파일 정보를 저장
    if (fileResult.length > 0) {
      resultValue.picture = fileResult;
    } else {
      resultValue.picture = null;
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

exports.addLosts = (ctx) => {
  const { body } = ctx.request;
  validation.validateLost(body).catch(() => {
    ctx.status = 400;
    ctx.body = {
      status: 400,
      message: '검증 오류.',
    };
  });


  const createLost = async (body) => {
    const { memberId } = ctx.decoded;
    const { title, content, startPlaceId, endPlaceId } = body;

    const result = models.losts.create({
      memberId, title, content, startPlaceId, endPlaceId,
      isCompleted: false,
    });

    return result.idx;
  }

  if (body.picture) {
    let validate = true;
    for (let index = 0; index < body.picture.length; index++) {
      try {
        validation.validateLostFile(body.picture[index]);
      } catch (err) {
        ctx.status = 400;
        ctx.body = {
          status: 400,
          message: '파일 검증 오류',
        };

        validate = false;
        break;
      }
    }

    if (validate) {
      const LFindex = createLost(body);
      for (let index = 0; index < body.picture.length; index++) {
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

exports.delLosts = () => {
  
}
