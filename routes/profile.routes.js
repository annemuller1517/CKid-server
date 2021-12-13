const router = require("express").Router();
const Country = require("../models/Country.model");
const User = require("../models/User.model")

router.get("/profile", (req, res, next) => {
    let userId = req.session.loggedInUser._id
    Country.find({userId})
    .then((response)=> {
        res.status(200).json(response)
    })
    .catch((err)=> {
        next(err)
    })
})
// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

module.exports = router;
