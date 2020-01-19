var nodemailer = require('nodemailer');
var user;

if (process.env.NODE_ENV !== 'production') {
    user = require('../mailConfig');
}


var transport = {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.NODE_ENV === 'production' ? process.env.MAIL_ADDR : user.USER,
        pass: process.env.NODE_ENV === 'production' ? process.env.MAIL_PASS : user.PASS
    }
}
console.log(process.env.MAIL_ADDR, process.env.MAIL_PASS)
console.log(process.env.NODE_ENV)



var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Server is ready to take messages');
        }
    });

    module.exports = transporter;