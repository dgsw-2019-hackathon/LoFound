const joi = require('joi');

exports.validateLost = (object) => {
  const schema = joi.object().keys({
    title: joi.string().required(),
    content: joi.string().required(),
    startPlaceId: joi.string().required(),
    endPlaceId: joi.string().required(),
    picture: joi.array(),
  });

  return schema.validate(object);
}

exports.validateLostFile = (object) => {
  const schema = joi.object().keys({
    type: joi.string().required(),
    uploadName: joi.string().required(),
  });

  return schema.validate(object);
}
