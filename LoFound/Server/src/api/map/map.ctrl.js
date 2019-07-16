const request = require('request-promise');
const key = require('../../../config/googleMaps').key;


exports.addMap = (ctx) => {
  const { startAddress, endAddress } = ctx.request.body;

  if (!startAddress || !endAddress) {
    ctx.status = 400;
    ctx.body = {
      status: 400,
      message: '주소를 전송하십시오',
    };

    return;
  }

  getLocation(startAddress, (startResult) => {
    getLocation(endAddress, (endResult) => {
      console.log(startResult[0].geometry.location);
      console.log(endResult[0].geometry.location);
    });
  });
}

exports.getLocationByPlaceId = async (ctx) => {
  const { placeId } = ctx.request.query;

  if(!placeId){
    ctx.status = 400;
    ctx.body = {
      status: 400,
      message: '조회할 Place ID 를 전송하세요.',
    };

    return;
  }

  const json = JSON.parse(await request.get(`https://maps.googleapis.com/maps/api/geocode/json?key=${key}&place_id=${placeId}`));

  ctx.status = 200;
  ctx.body = {
    status: 200,
    message: '성공적으로 위치 정보를 조회하였습니다.',
    data : json.results[0].geometry.location,
  }
}


exports.getPlaceId = async (ctx) => {
  const { address } = ctx.request.query;

  if (!address) {
    ctx.status = 400;
    ctx.body = {
      status: 400,
      message: '조회할 주소를 전송하세요.',
    };

    return;
  }

  const json = JSON.parse(await request.get('https://maps.googleapis.com/maps/api/geocode/json', {
    qs: {
      address,
      key,
    }
  }));

  let returnObject = [];
  json.results.forEach((element) => {
    returnObject.push({
      full_address: element.formatted_address,
      place_id: element.place_id,
    });
  });

  ctx.status = 200;
  ctx.body = {
    status: 200,
    message: '조회 성공',
    data: returnObject,
  };
}
