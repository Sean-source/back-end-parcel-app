const User = require("../model/userModel");

module.exports.createUser = (req, res) => {
    const userDetails = req.body;
    User.create(userDetails, (err, data) => {
        if (err) throw err;
        res.status(200).json(data);
    })
}

module.exports.getUsers = (req, res) => {
    User.find((err, data) => {
        if (err) throw err;
        res.status(200).json(data);
    })
}

module.exports.login = (req, res) => {
    User.find({ email: req.body.email, password: req.body.password }, (err, data) => {
        if (err) throw err;
        if (data.length == 0) {
            res.json({ error: "username/password incorrect" })
        } else {
            res.status(200).json({ success: "logged in successfully", data });
        }

    })
}
