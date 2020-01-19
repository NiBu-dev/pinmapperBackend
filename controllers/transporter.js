var nodemailer = require('nodemailer');

var transport;
transport = {
    host: 'smtp.gmail.com',
    auth: {
        user: process.env.MAIL_ADDR,
        pass: process.env.MAIL_PASS
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