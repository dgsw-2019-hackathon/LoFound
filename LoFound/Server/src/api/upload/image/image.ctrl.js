const upload = require('../../../lib/upload');

exports.imageUpload = async (ctx) => {
  const { image } = ctx.request.files;
  const { name } = ctx.request.body;

  try {
    if (upload.checkImage(image)) {
      if (Array.isArray(image)) {
        ctx.status = 500;
        ctx.body = {
          status: 500,
          messagea: '배열 이미지 업로드는 아직 지원하지 않습니다.',
        };
      } else {
        upload.uploadSingle(image, name);
      }
    } else {
      ctx.status = 400;
      ctx.body = {
        status: 400,
        message: '업로드 할 수 있는 이미지가 아닙니다.',
      };

      return;
    }

    ctx.staus = 200;
    ctx.body = {
      status: 200,
      message: '이미지 업로드 성공!',
    };
  } catch (error) {
    console.log(error.message);
    ctx.staus = 500;
    ctx.body = {
      status: 500,
      message: '이미지 업로드 실패!',
    };
  }
};
