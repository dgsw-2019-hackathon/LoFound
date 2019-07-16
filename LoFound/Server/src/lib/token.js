require('dotenv').config();

const { JWT_SECRET: secret } = process.env;

const jwt = require('jsonwebtoken');

exports.createToken = async (memberId,) => { // Create Token
  const payload = {
    memberId,
  };
  const option = { expiresIn: '6 hours', issuer: 'lofound.com', subject: 'token' };

  try {
    return await jwt.sign(payload, secret, option);
  } catch (error) {
    throw error;
  }
};

exports.createRefreshToken = async (memberId) => { // Create Refresh Token
  const payload = {
    memberId,
  };
  const option = { expiresIn: '3 hours', issuer: 'lofound.com', subject: 'refreshToken' };

  try {
    return await jwt.sign(payload, secret, option);
  } catch (error) {
    throw error;
  }
};

exports.verifyToken = async (token) => { // Verify Token
  try {
    return await jwt.verify(token, secret);
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};
