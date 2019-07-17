const mailer = require('nodemailer');
const mailConfig = require('../../config/mail');

const transporter = mailer.createTransport({
  service: 'gmail',
  auth: {
    user: mailConfig.id,
    pass: mailConfig.pw,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

exports.sendMail = (mailObject) => {
  const { title, content, to } = mailObject;

  let mailOptions = {
    from: 'xink1358@dgsw.hs.kr',
    to,
    subject: title,
    html: '<img style="width: 1000px" src="cid:unique@cid"><br />' + content,
    attachments: [{
      filename: 'delivery.png',
      path: 'asset/delivery.png',
      cid: 'unique@cid',
    }]
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if(err) {
      console.log(err);
    }
  });
}