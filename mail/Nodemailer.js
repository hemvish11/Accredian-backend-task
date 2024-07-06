const nodemailer = require("nodemailer");

const sendEmail = async (req, res, next) => {
    const auth = nodemailer.createTransport({
        service: 'gmail',
        secure: true,
        port: 465,
        auth: {
            user: `${process.env.MY_EMAIL}`,
            pass: `${process.env.MY_EMAIL_PASSWORD}`
        }
    });

    const receiver = {
        from: `${process.env.MY_EMAIL}`,
        to: req.body.refereeEmail,
        subject: 'Accredian private limited',
        text: `Thankyou! for referral. You will be rewarded when your friend purchases any course.`
    };

    auth.sendMail(receiver, (error, emailResponse) => {
        if (error) {
            console.error('Error:', error);
            return;
        }
        console.log('Success!');
    });


    
    const auth2 = nodemailer.createTransport({
        service: 'gmail',
        secure: true,
        port: 465,
        auth: {
            user: `${process.env.MY_EMAIL}`,
            pass: `${process.env.MY_EMAIL_PASSWORD}`
        }
    });

    const receiver2 = {
        from: `${process.env.MY_EMAIL}`,
        to: req.body.friendEmail,
        subject: 'Accredian private limited',
        text: `You are being referred by your friend ${req.body.refereeName}. You can avail the discount in the courses. Feel free to explore https://accredian.com/`
    };

    auth2.sendMail(receiver2, (error, emailResponse) => {
        if (error) {
            console.error('Error:', error);
            return;
        }
        console.log('Success!');
    });
}

module.exports = {sendEmail};