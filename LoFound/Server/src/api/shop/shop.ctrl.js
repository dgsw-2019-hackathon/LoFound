const model = require('../../models');
const mail = require('../../lib/mailer');
const uuidv4 = require('uuid/v4');

exports.getItem = async (ctx) => {
  const items = await model.shop.findAll();
  ctx.status = 200;
  ctx.body = {
    status: 200,
    message: '성공적으로 조회하였습니다.',
    data: items,
  };

  return;
};

exports.buyItem = async (ctx) => {
  const { idx } = ctx.request.body;
  const { memberId } = ctx.decoded;

  const item = await model.shop.findOne({
    where: {
      idx
    },
    raw: true,
  });

  const memberObject = await model.member.findOne({
    where: {
      id: memberId,
    },
    raw: true,
  });

  if(Number(memberObject.points) < Number(item.price)){
    ctx.status = 400;
    ctx.body = {
      status: 400,
      message: '잔고 부족',
    };

    return;
  }

  const totalBalance = Number(memberObject.points) - Number(item.price);
  
  await model.member.update({ points: totalBalance }, { where: {id: memberId }});

  // Send E-Mail
  mail.sendMail({
    to: memberObject.email,
    title: '[로습득] 포인트 상점에서 주문하신 상품이 배송되었습니다.',
    content: `${memberObject.name}님, 구매하여 주셔서 감사합니다.<br /><h2>주문하신 ${item.name}상품의 배송이 완료되었습니다.</h2><br /><br />${item.name} 활성화 키: <b>${uuidv4()}</b>`,
  });

  ctx.status = 200;
  ctx.body = {
    status: 200,
    message: '성공적으로 처리되었습니다.',
  };

  return;
}
