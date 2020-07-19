const Parcel = require("../model/parcelsModel");

module.exports.createParcel = (req, res) => {
    const parcelDetails = req.body;
    Parcel.create(parcelDetails, (err, data) => {
        if (err) throw err;
        res.status(200).json(data);
    })
}

module.exports.getParcels = (req, res) => {
    Parcel.find((err, data) => {
        if (err) throw err;
        res.status(200).json(data);
    })
}
