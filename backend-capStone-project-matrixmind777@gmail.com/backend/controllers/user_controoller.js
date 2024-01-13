const User = require('../models/User');

const getuserbyid = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).send({ message: "user not found" });
        }
        res.status(200).send(user);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Internal Error Occurred" });
    }
};


module.exports = { getuserbyid }