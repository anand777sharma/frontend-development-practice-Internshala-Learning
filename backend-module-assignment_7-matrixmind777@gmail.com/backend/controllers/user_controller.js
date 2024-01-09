const User = require("../models/User")

const getallusers = async (req, res) => {
    try {
        const data = await User.find();
        res.status(200).send(data);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Internal Error Occured" })
    }
}
module.exports = { getallusers}