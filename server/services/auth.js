const { Students } = require('../models/Student')
const { Teacher } = require('../models/Teachers')
const { Admin } = require('../models/Admin')
var jwt = require('jsonwebtoken');
const secret = process.env.SECRET_KEY


const login = async (req, res) => {
    const { email, password, type } = req.body;
    var user;
    if (type === "admin") {
        user = await Admin.findOne({ email: email })
    }
    if (type === "student") {
        user = await Students.findOne({ email: email })
    }
    if (type === "teacher") {
        user = await Teacher.findOne({ email: email })
    }

    if (!user) {
        res.status(401).send("User not exist")
    }
    if (password === user.password) {
        try {

            const token = jwt.sign({
                data: user._id
            }, secret);
            res.json({ status: "OK", token: token, type: type })
        } catch (err) {
            console.log(err)
            res.status(401).send(err)
        }
    }
}

module.exports = { login }