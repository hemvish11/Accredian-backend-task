const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function addReferralDetails(req,res) {
    const referalDetails = req.body;
    const newUser = await prisma.user.create({
        data: {
            refereeName: referalDetails.refereeName,
            refereeEmail: referalDetails.refereeEmail,
            refereePhoneNumber: referalDetails.refereePhoneNumber,
            friendName: referalDetails.friendName,
            friendEmail: referalDetails.friendEmail,
            friendPhoneNumber: referalDetails.friendPhoneNumber
        }
    });
    console.log("New user created:", newUser);
    res.json(newUser);
}
module.exports = {addReferralDetails};