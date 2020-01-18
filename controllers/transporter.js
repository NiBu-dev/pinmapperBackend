var nodemailer = require('nodemailer');

var transport;
if (process.env.NODE_ENV === 'production') {
    transport = {
        host: 'smtp.gmail.com',
        auth: {
            user: process.env.MAIL_ADDR,
            pass: process.env.MAIL_PASS
        }
    }
} else if (process.env.NODE_ENV === 'development') {
    const creds = require('../mailConfig');

    transport = {
        host: 'smtp.gmail.com',
        auth: {
            user: creds.USER,
            pass: creds.PASS
        }
    }
    
}
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