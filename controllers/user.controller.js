const { addReferralDetails } = require("../DB/prismORM");
const { sendEmail } = require("../mail/Nodemailer");

const test = (req, res) => {
    res.json({
        message: "API is working"
    })
}

const addUserData = async (req, res) => {
    addReferralDetails(req, res)
        .catch(e => {
            throw e;
        })
        .finally(async () => {
            await prisma.$disconnect();
        });

    sendEmail(req, res)
        .catch(err => {
            throw err;
        })
        .finally(() => {
            console.log("Email sent successfully.");
        });
}

module.exports ={test,addUserData};