var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'bom2zzanggg@gmail.com',
    pass: 'password'
  }
});

var mailOptions = {
  from: 'bom2zzanggg@gmail.com',
  to: 'duzzul94@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!???????? wow wow wow hihi gogo PUBG'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});